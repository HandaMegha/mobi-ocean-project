import { useState } from "react";
import { durationValues, filterValues } from "../Dashboard/DashboardConstant";
import MapView from "../MapView/MapView";
import { isEmpty, toLower, find, filter } from "lodash";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

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
    deviceData,
    areaLevel,
    setFilterValue,
    changeSoftwareAppSection,
  } = props;
  const [searchItem, setSearchItem] = useState("");
  const [searchedList, setSearchedList] = useState(filterList);
  const [areaParent, setAreaParent] = useState("");
  const location = useLocation();
  const { pathname } = location;

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

  const showDistrictGraph = (list) => {
    changeSoftwareAppSection("", false);
    if (showDistrict) {
      changeArea(list.area);
      changeAreaLevel(list.area_level);
      setAreaParent(list.area_parent);
    } else {
      changeArea(list.CategoryName);
    }
  };

  const onChange = (value) => {
    changeDuration(value);
    if (!isEmpty(deviceData)) {
      if (!showDistrict) {
        const list = filter(deviceData, {
          area_level: areaLevel,
          duration: value,
          area: area,
        });
        setFilterList(list);
      } else {
        const list = filter(deviceData, {
          area_parent: areaLevel === "state" ? area : areaParent,
          duration: value,
          area_level: "district",
        });
        setFilterList(list);
      }
    }
  };

  const getSearchBar = () => {
    return (
      <div className="col-md-6">
        <input
          type="search"
          id="stateSearch"
          className="searchInput"
          placeholder={
            filterValue === "state"
              ? "Search by state"
              : "Search by organization"
          }
          value={searchItem}
          onChange={(event) => handleSearch(event.target.value)}
        />
      </div>
    );
  };

  const getDropdowns = () => {
    return (
      <div className="col-md-6">
        <div
          className="radiobtns"
          style={{
            fontSize: "15px",
            display: "flex",
            padding: "2px",
            border: "1px solid #dfe5ef",
            borderRadius: "7px",
          }}
        >
          {filterValues.map((list, index) => {
            return index >= 1 ? (
              <div key={index} style={{ whiteSpace: "nowrap", padding: "3px" }}>
                <input
                  type="radio"
                  id={list.name}
                  value={list.value}
                  checked={list.value === filterValue}
                  onChange={(e) => changeFilter(e.target.value)}
                />
                <label htmlFor={list.name} style={{ marginLeft: "4px" }}>
                  {list.name}
                </label>
              </div>
            ) : null;
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
      <table id="tableListId">
        <thead>
          <tr>
            <th>
              {showDistrict
                ? "District"
                : filterValue === "state"
                ? "State/UT"
                : "Organization"}
            </th>
            <th>Active devices</th>
          </tr>
        </thead>
        {filterList &&
          filterList.map((list, index) => {
            return (
              <tbody key={index}>
                <tr
                  onClick={() => showDistrictGraph(list)}
                  className={
                    list.area === area || list.CategoryName === area
                      ? "tableRowActive"
                      : ""
                  }
                >
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

  const renderDeviceSummary = () => {
    let deviceSummaryCount = {};
    if (!isEmpty(deviceData)) {
      deviceSummaryCount = find(deviceData, {
        area_level: areaLevel,
        duration: duration,
        area: area,
      });
    }
    return (
      <div className="col-lg-7">
        <div className=" card device_box">
          <div className="card-body">
            <div className=" align-items-center">
              {pathname === "/" ||
              pathname === "/dashboard" ||
              pathname === "/dashboard/devices" ? (
                <div className="row">
                  <div className="col-md-3">
                    <div className="col-box-6 col-box1">
                      <p>
                        Total <br /> Devices <br />{" "}
                        <span>
                          {isEmpty(deviceSummaryCount)
                            ? 0
                            : deviceSummaryCount.device_total_ordered_count.toLocaleString()}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="col-box-6 col-box2">
                      <p>
                        Average device usage <br />{" "}
                        <span>
                          {isEmpty(deviceSummaryCount)
                            ? 0
                            : deviceSummaryCount.device_avg_usage_count.toLocaleString()}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="col-box-6 col-box3">
                      <p>
                        Warranty expires in 90 days <br />{" "}
                        <span>
                          {isEmpty(deviceSummaryCount)
                            ? 0
                            : deviceSummaryCount.device_warrantee_expiry_in_90days.toLocaleString()}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="col-box-6 col-box4">
                      <p>
                        RD expires in 90 days <br />{" "}
                        <span>
                          {isEmpty(deviceSummaryCount)
                            ? 0
                            : deviceSummaryCount.device_RD_expiry_in_90days.toLocaleString()}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="row">
                  <div className="col-md-4">
                    <div className="col-box-6 col-boxt1">
                      <p>
                        Active tickets <br /> <span>999,99,99,999</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="col-box-6 col-boxt2">
                      <p>
                        Open in the duration <br /> <span>999,99,99,999</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="col-box-6 col-boxt3">
                      <p>
                        Closed in the duration <br /> <span>999,99,99,999</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="col-lg-5 d-flex align-items-strech">
        <div className="card wscreen">
          <div className="card-body">
            <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
              <div className="mb-3 mb-sm-0">
                <h5 className="card-title fw-semibold areaheading">{area}</h5>
              </div>
              {areaLevel !== "district" ? (
                <div className="mb-3 mb-sm-0">
                  <select
                    className="form-select w-auto"
                    placeholder="Filter by"
                    onChange={(e) => onChange(e.target.value)}
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
              ) : null}
              {listView ? (
                <div className="mb-3 mb-sm-0">
                  <select
                    className="form-select w-auto"
                    placeholder="List view"
                    onChange={(e) => changeFilter(e.target.value)}
                    value={filterValue}
                  >
                    {filterValues.map((list, index) => {
                      return (
                        <option key={index} value={list.value}>
                          {list.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              ) : (
                <div className="mb-3 mb-sm-0">
                  <button
                    className="viewBtn"
                    onClick={() => changeView(!listView)}
                  >
                    <img src="/icons/map.svg" alt="list" />
                    Map View
                  </button>
                </div>
              )}
            </div>
            {listView ? (
              <MapView
                changeArea={changeArea}
                changeAreaLevel={changeAreaLevel}
                showDistrictList={showDistrictList}
                changeView={changeView}
                duration={duration}
                setFilterList={setFilterList}
                setFilterValue={setFilterValue}
                changeSoftwareAppSection={changeSoftwareAppSection}
              />
            ) : (
              <>
                {!isEmpty(filterList) ? (
                  <div className="row">
                    {getSearchBar()}
                    {getDropdowns()}
                  </div>
                ) : null}
                <div className="tableList">{getTable()}</div>
              </>
            )}
          </div>
        </div>
      </div>
      {renderDeviceSummary()}
    </>
  );
};

const mapStateToProps = (state) => ({
  deviceData: state.dashboardReducer.deviceData,
});

export default connect(mapStateToProps, {})(ListView);
