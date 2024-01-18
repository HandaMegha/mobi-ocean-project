import { useEffect, useState } from "react";
import TicketData from "../TicketData/TicketData";
import DeviceData from "../DeviceData/DeviceData";
import TransactionData from "../TransactionData/TransactionData";
import SoftwareUpdate from "../SoftwareUpdate/SoftwareUpdate";
import {
  getDeviceWiseCount,
  getDeviceAppData,
} from "../../actions/DashboardActions";
import { connect } from "react-redux";
import { durationValues, filterValues } from "./DashboardConstant";
import { isEmpty } from "lodash";

const DashboardContent = (props) => {
  const { getDeviceWiseCount, deviceCount, getDeviceAppData } = props;
  const [listView, setListView] = useState(true);
  const [duration, setDuration] = useState("last_week");
  const [filterValue, setFilterValue] = useState("state");
  const [filterList, setFilterList] = useState("");
  const [areaLevel, setAreaLevel] = useState("country");
  console.log("filterList", filterList);

  useEffect(() => {
    console.log("in useeffect", deviceCount);
    if (!listView && !isEmpty(deviceCount)) {
      console.log("in if condition");
      setFilterList(deviceCount.States);
    }
  }, [deviceCount, listView]);

  const changeView = () => {
    setListView((prevListView) => !prevListView);
    if (listView) {
      getDeviceWiseCount();
      getDeviceAppData();
    }
  };

  const changeFilter = (value) => {
    setFilterValue(value);
    if (value === "state") {
      setFilterList(deviceCount.States);
    } else {
      setFilterList(deviceCount.Organizations);
    }
  };

  const changeDuration = (value) => {
    setDuration(value);
  };

  return (
    <div className="body-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 d-flex align-items-strech">
            <div className="card w-100">
              <div className="card-body">
                <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                  <div className="mb-3 mb-sm-0">
                    <h5 className="card-title fw-semibold">
                      {listView ? "Lorem ipsum" : "Lorem ipsum dolor"}
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
                  <div className="row align-items-center">
                    <div className="col-md-12">
                      <div className="map">
                        <img className="vw1" src="/images/Map.png" alt="map" />{" "}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="hstack_1">
                        <h4>XX</h4>
                        <p>LOREM IPSUM</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="hstack_1">
                        <h4>XX</h4>
                        <p>LOREM IPSUM</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="hstack_1">
                        <h4>XX</h4>
                        <p>LOREM IPSUM</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="hstack_1">
                        <h4>XX</h4>
                        <p>LOREM IPSUM</p>
                      </div>
                    </div>
                  </div>
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
                        <select
                          className="form-select w-auto"
                          placeholder="Filter by"
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
                    </div>
                    <div className="tableList">
                      <table id="stateList">
                        <thead>
                          <tr>
                            <th>State/UT</th>
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
                        <p>
                          Total Devices <span>9,999,999</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="col-box-6">
                        <p>
                          Average device usage <span>9,999,999</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="col-box-6">
                        <p>
                          Warranty expires in 90 days <span>9,999,999</span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="col-box-6">
                        <p>
                          RD expires in 90 days <span>9,999,999</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row">
              <TicketData />
              <DeviceData duration={duration} areaLevel={areaLevel} />
              <TransactionData listView={listView} />
              {!listView && <SoftwareUpdate />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  deviceCount: state.dashboardReducer.deviceCount,
});

const mapDispatchToProps = {
  getDeviceWiseCount,
  getDeviceAppData,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContent);
