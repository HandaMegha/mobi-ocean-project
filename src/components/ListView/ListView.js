import { durationValues, filterValues } from "../Dashboard/DashboardConstant";
import MapView from "../MapView/MapView";

const ListView = (props) => {
  const {
    changeView,
    changeFilter,
    changeDuration,
    area,
    duration,
    listView,
    filterValue,
    filterList,
  } = props;
  return (
    <>
      <div className="col-lg-5 d-flex align-items-strech">
        <div className="card w-100">
          <div className="card-body">
            <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
              <div className="mb-3 mb-sm-0">
                <h5 className="card-title fw-semibold">
                  {/* {listView ? "India" : "India"} */}
                  {area}
                </h5>
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
              <button className="viewBtn" onClick={changeView}>
                <img
                  src={listView ? "/icons/list.svg" : "/icons/map.svg"}
                  alt="list"
                />
                {listView ? "List View" : "Map View"}
              </button>
            </div>
            {listView ? (
              <MapView filterValue={filterValue} />
            ) : (
              <>
                <div className="row">
                  <div className="col-md-7">
                    <input
                      type="search"
                      id="stateSearch"
                      name="stateSearch"
                      className="searchInput"
                      placeholder="Search by state, district or organization"
                    />
                  </div>
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
                          <div key={index}>
                            <input
                              type="radio"
                              id={list.name}
                              value={list.value}
                              checked={list.value === filterValue}
                              onChange={(e) => changeFilter(e.target.value)}
                            />
                            <label
                              htmlFor={list.name}
                              style={{ marginLeft: "5px" }}
                            >
                              {list.name}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="tableList">
                  <table id="stateList">
                    <thead>
                      <tr>
                        <th>
                          {filterValue === "state"
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
                            <tr>
                              <td>{list.CategoryName}</td>
                              <td>{list.TotalDevice}</td>
                            </tr>
                          </tbody>
                        );
                      })}
                  </table>
                </div>
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
                  <div className="col-box-6">
                    <p style={{ backgroundColor: "#6C3BFF4D" }}>
                      Total Devices <span>9,999,999</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="col-box-6">
                    <p style={{ backgroundColor: "#FFC1A4" }}>
                      Average device usage <span>9,999,999</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="col-box-6">
                    <p style={{ backgroundColor: "#CCE9FF" }}>
                      Warranty expires in 90 days <span>9,999,999</span>
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="col-box-6">
                    <p style={{ backgroundColor: "#D1F7EA" }}>
                      RD expires in 90 days <span>9,999,999</span>
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
