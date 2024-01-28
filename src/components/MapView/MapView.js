import React from "react";
import "./MapView.css";
import { connect } from "react-redux";
import { isEmpty, get, toLower, trim, replace } from "lodash";
import { allStateList } from "../Dashboard/DashboardConstant";

const MapView = (props) => {
  const { deviceCount, filterValue } = props;

  const renderMap = () => {
    const finalStateList = [];
    if (!isEmpty(deviceCount)) {
      const statesList = get(deviceCount, "States");
      const difference = allStateList.filter(
        (obj1) => !statesList.some((obj2) => obj1.name === obj2.CategoryName)
      );
      if (!isEmpty(statesList)) {
        statesList.map((list) => {
          finalStateList.push({
            name: list.CategoryName,
            deviceCount: list.TotalDevice,
            className:
              list.CategoryName === "Jammu and Kashmir"
                ? "jammu"
                : replace(toLower(list.CategoryName), " ", "-"),
          });
        });
        difference.map((list) => {
          finalStateList.push({
            name: list.name,
            deviceCount: 0,
            className: "statesNotPresent",
          });
        });
      }
    }
    return (
      <div className="col-md-12">
        <div className="map">
          <img
            className="vw1"
            src="/images/Map2.jpg"
            alt="map"
            style={{ width: "100%", height: "100%" }}
          />{" "}
          {finalStateList.map((list, index) => {
            return (
              <div
                className={
                  list.className !== "statesNotPresent"
                    ? `${list.className} stateContainer`
                    : list.className
                }
                key={index}
              >
                {list.name}
                <br />
                <span>{list.deviceCount}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="row align-items-center">
      {renderMap()}
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
  );
};

const mapStateToProps = (state) => ({
  deviceCount: state.dashboardReducer.deviceCount,
});

export default connect(mapStateToProps, {})(MapView);
