import { useEffect, useState } from "react";
import TicketSection from "../TicketData/TicketSection";
import DeviceSection from "../DeviceData/DeviceSection";
import SoftwareUpdateSection from "../SoftwareUpdate/SoftwareUpdateSection";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import { Link, useLocation } from "react-router-dom";
import ListView from "../ListView/ListView";
import DevicesData from "../DeviceData/DevicesData";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const DashboardContent = (props) => {
  const { deviceCount } = props;
  const [listView, setListView] = useState(true);
  const [duration, setDuration] = useState("last_week");
  const [filterValue, setFilterValue] = useState("");
  const [filterList, setFilterList] = useState("");
  const [area, setArea] = useState("India");
  const [areaLevel, setAreaLevel] = useState("country");
  const [showDistrict, setShowDistrict] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (!listView && !isEmpty(deviceCount) && !showDistrict) {
      setFilterList(deviceCount.States);
    }
  }, [deviceCount, listView]);

  const changeView = (val) => {
    setListView(val);
    if (val === true) {
      setShowDistrict(false);
      setAreaLevel("country");
      setArea("India");
      setFilterValue("list_view");
    }
  };

  const changeFilter = (value) => {
    setFilterValue(value);
    setListView(false);
    setShowDistrict(false);
    if (!isEmpty(deviceCount)) {
      if (value === "state") {
        setFilterList(deviceCount.States);
      } else {
        setFilterList(deviceCount.Organizations);
      }
    }
  };

  const changeDuration = (value) => {
    setDuration(value);
  };

  const changeArea = (val) => {
    setArea(val);
  };

  const changeAreaLevel = (val) => {
    setAreaLevel(val);
  };

  const showDistrictList = (val) => {
    setShowDistrict(val);
  };

  return (
    <div className="body-wrapper">
      <div className="container-fluid">
        <Breadcrumb
          title="Dashboard"
          subTitle={
            pathname === "/" || pathname === "/dashboard" ? "" : "devices"
          }
        />
        <div className="row">
          <ListView
            changeView={changeView}
            changeFilter={changeFilter}
            changeDuration={changeDuration}
            area={area}
            changeArea={changeArea}
            changeAreaLevel={changeAreaLevel}
            duration={duration}
            listView={listView}
            filterValue={filterValue}
            filterList={filterList}
            setFilterList={setFilterList}
            showDistrict={showDistrict}
            showDistrictList={showDistrictList}
            areaLevel={areaLevel}
            setFilterValue={setFilterValue}
          />
          {pathname === "/" || pathname === "/dashboard" ? (
            <div className="col-lg-7">
              <div className="row">
                <TicketSection />
                <Link to={{ pathname: "/dashboard/devices" }}>
                  <DeviceSection
                    duration={duration}
                    areaLevel={areaLevel}
                    area={area}
                  />
                </Link>
                <SoftwareUpdateSection
                  duration={duration}
                  areaLevel={areaLevel}
                  area={area}
                />
              </div>
            </div>
          ) : (
            <DevicesData
              duration={duration}
              areaLevel={areaLevel}
              area={area}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  deviceCount: state.dashboardReducer.deviceCount,
});

export default connect(mapStateToProps, {})(DashboardContent);
