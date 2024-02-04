import { useState } from "react";
import { durationValues, filterValues } from "../Dashboard/DashboardConstant";
import MapView from "../MapView/MapView";
import { isEmpty, toLower } from "lodash";

const ListView = (props) => {
  const {
    changeView,
    changeFilter,
    changeDuration,
    area,
    changeArea,
    changeAreaLevel,
    duration,
    listView,
    filterValue,
    filterList,
    setFilterList,
    showDistrict,
    showDistrictList,
  } = props;
  const [searchItem, setSearchItem] = useState("");
  const [searchedList, setSearchedList] = useState(filterList);

  const handleSearch = (value) => {
    setSearchItem(value);

    // const list = searchedList.filter((item) => {
    //   console.log("aa", item.CategoryName);
    //   console.log("bb", toLower(item.CategoryName));
    //   console.log("cc", toLower(value));
    //   console.log("ww", value);
    //   if(toLower(item.CategoryName) === toLower(value)){
    //     console.log("in iff")
    //   }
    // });
    // console.log("list", list);
    // setSearchedList((prevSearchedList) => {
    //   return prevSearchedList.filter(item => toLower(item.CategoryName) === value(value))
    // });
  };

  const getSearchBar = () => {
    return (
      <div className={`${showDistrict ? "col-md-12" : "col-md-7"}`}>
        <input
          type="search"
          id="stateSearch"
          className="searchInput"
          placeholder="Search by state, district or organization"
          value={searchItem}
          onChange={(event) => handleSearch(event.target.value)}
        />
      </div>
    );
  };

  const getRadioButtons = () => {
    return (
      <div className="col-md-5">
        <div
          style={{
            fontSize: "15px",
            padding: "8px 38px 8px 16px",
            border: "1px solid #dfe5ef",
            borderRadius: "7px",
          }}
        >
          {filterValues.map((list, index) => {
            return (
              <div key={index} style={{ whiteSpace: "nowrap" }}>
                <input
                  type="radio"
                  id={list.name}
                  value={list.value}
                  checked={list.value === filterValue}
                  onChange={(e) => changeFilter(e.target.value)}
                />
                <label htmlFor={list.name} style={{ marginLeft: "5px" }}>
                  {list.name}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const getTable = () => {
    return isEmpty(filterList) ? (
      <div className="emptyTable">
        {showDistrict
          ? "No District Available"
          : filterValue === "state"
          ? "No State Available"
          : "No Organisation Available"}
      </div>
    ) : (
      <table id="stateList">
        <thead>
          <tr>
            <th>
              {filterValue === "state"
                ? showDistrict
                  ? "District"
                  : "State/UT"
                : "Organization"}
            </th>
            <th>Active devices</th>
          </tr>
        </thead>
        {filterList &&
          filterList.map((list, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{showDistrict ? list.area : list.CategoryName}</td>
                  <td>
                    {showDistrict
                      ? list.device_total_active_count
                      : list.TotalDevice}
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
    );
  };

  return (
    <>
      <div className="col-lg-5 d-flex align-items-strech">
        <div className="card w-100">
          <div className="card-body">
            <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
              <div className="mb-3 mb-sm-0">
                <h5 className="card-title fw-semibold">{area}</h5>
              </div>
              <div className="mb-3 mb-sm-0">
                <select
                  className="form-select w-auto"
                  placeholder="Filter by"
                  onChange={(e) => changeDuration(e.target.value)}
                  value={duration}
                >
                  {durationValues.map((list, index) => {
                    return (
                      <option key={index} value={list.value}>
                        {list.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button className="viewBtn" onClick={() => changeView(!listView)}>
                <img
                  src={listView ? "/icons/list.svg" : "/icons/map.svg"}
                  alt="list"
                />
                {listView ? "List View" : "Map View"}
              </button>
            </div>
            {listView ? (
              <MapView
                changeArea={changeArea}
                changeAreaLevel={changeAreaLevel}
                showDistrictList={showDistrictList}
                changeView={changeView}
                duration={duration}
                setFilterList={setFilterList}
              />
            ) : (
              <>
                {!isEmpty(filterList) ? (
                  <div className="row">
                    {getSearchBar()}
                    {showDistrict ? null : getRadioButtons()}
                  </div>
                ) : null}
                <div className="tableList">{getTable()}</div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="col-lg-7">
        <div className=" card device_box">
          <div className="card-body">
            <div className=" align-items-center">
              <div className="row">
                <div className="col-md-3">
                  <div className="col-box-6 col-box1">
                    <p>
                      Total <br /> Devices <br /> <span>9,999,999</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="col-box-6 col-box2">
                    <p>
                      Average device usage <br /> <span>9,999,999</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="col-box-6 col-box3">
                    <p>
                      Warranty expires in 90 days <br /> <span>9,999,999</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="col-box-6 col-box4">
                    <p>
                      RD expires in 90 days <br /> <span>9,999,999</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListView;
