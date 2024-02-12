import React from "react";
import "./MapView.css";
import { connect } from "react-redux";
import { isEmpty, get, toLower, replace, filter } from "lodash";
import { allStateList } from "../Dashboard/DashboardConstant";

const MapView = (props) => {
  const {
    deviceCount,
    changeArea,
    changeAreaLevel,
    deviceData,
    showDistrictList,
    changeView,
    setFilterList,
    duration,
    setFilterValue,
    changeSoftwareAppSection,
  } = props;

  const handleChange = (value) => {
    if (!isEmpty(deviceData)) {
      const list = filter(deviceData, {
        duration: duration,
        area_parent: value,
        area_level: "district",
      });
      setFilterList(list);
      changeArea(value);
      changeAreaLevel("state");
      showDistrictList(true);
      changeView(false);
      setFilterValue("state");
      changeSoftwareAppSection("", false);
    }
  };

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
            className: `${replace(
              toLower(list.name),
              " ",
              "-"
            )} statesNotPresent`,
          });
        });
      }
    }
    return (
      <div className="col-md-12">
        <img
          className="vw1"
          src="/images/Map.png"
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
              onClick={() => handleChange(list.name)}
            >
              {list.name}
              <br />
              <span>{list.deviceCount}</span>
            </div>
          );
        })}
      </div>
    );
  };

  return <div className="row align-items-center">{renderMap()}</div>;
};

const mapStateToProps = (state) => ({
  deviceCount: state.dashboardReducer.deviceCount,
  deviceData: state.dashboardReducer.deviceData,
});

export default connect(mapStateToProps, {})(MapView);
