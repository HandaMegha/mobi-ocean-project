import { useEffect, useState } from "react";
import TicketSection from "../TicketData/TicketSection";
import DeviceSection from "../DeviceData/DeviceSection";
// import TransactionSection from "../TransactionData/TransactionSection";
import SoftwareUpdateSection from "../SoftwareUpdate/SoftwareUpdateSection";
import { getDeviceAppData } from "../../actions/DashboardActions";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import { Link, useLocation } from "react-router-dom";
import ListView from "../ListView/ListView";
import DevicesData from "../DeviceData/DevicesData";

const DashboardContent = (props) => {
  const { deviceCount, getDeviceAppData } = props;
  const [listView, setListView] = useState(true);
  const [duration, setDuration] = useState("last_week");
  const [filterValue, setFilterValue] = useState("state");
  const [filterList, setFilterList] = useState("");
  const [area, setArea] = useState("India");
  const [areaLevel, setAreaLevel] = useState("country");
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (!listView && !isEmpty(deviceCount)) {
      setFilterList(deviceCount.States);
    }
  }, [deviceCount, listView]);

  const changeView = () => {
    setListView((prevListView) => !prevListView);
    if (listView) {
      getDeviceAppData();
    }
  };

  const changeFilter = (value) => {
    setFilterValue(value);
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

  return (
    <div className="body-wrapper">
      <div className="container-fluid">
        <div className="row">
          <ListView
            changeView={changeView}
            changeFilter={changeFilter}
            changeDuration={changeDuration}
            area={area}
            duration={duration}
            listView={listView}
            filterValue={filterValue}
            filterList={filterList}
          />
          {pathname === "/" ? (
            <div className="col-lg-7">
              <div className="row">
                <TicketSection />
                <Link to={{ pathname: "/dashboard/devices" }}>
                  <DeviceSection duration={duration} areaLevel={areaLevel} />
                </Link>
                {/* <TransactionSection listView={listView} /> */}
                <Link to={{ pathname: "/dashboard/devices" }}>
                  <SoftwareUpdateSection
                    duration={duration}
                    areaLevel={areaLevel}
                  />
                </Link>
              </div>
            </div>
          ) : (
            <DevicesData duration={duration} areaLevel={areaLevel} />
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  deviceCount: state.dashboardReducer.deviceCount,
});

const mapDispatchToProps = {
  getDeviceAppData,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContent);
