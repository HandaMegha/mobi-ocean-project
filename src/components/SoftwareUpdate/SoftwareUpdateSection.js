import SoftwareUpdatesGraph from "./SoftwareAppGraph";
import SoftwareFirmwareGraph from "./SoftwareFirmwareGraph";
import { connect } from "react-redux";
import { isEmpty, filter } from "lodash";
import { useLocation } from "react-router-dom";

const SoftwareUpdateSection = (props) => {
  const { deviceAppData, duration, areaLevel } = props;
  const location = useLocation();
  const { pathname } = location;

  const calculateGraphData = (
    data,
    Graph,
    pushedDeviceColor,
    installedDeviceColor
  ) => {
    return data.map((item, index) => {
      const finalData = [];
      if (item.hasOwnProperty("pushed_device_count")) {
        finalData.push({
          y: item.pushed_device_count,
          color: pushedDeviceColor,
        });
      }
      if (item.hasOwnProperty("installed_device_count")) {
        finalData.push({
          y: item.installed_device_count,
          color: installedDeviceColor,
        });
      }
      return (
        <Graph
          key={index}
          data={finalData}
          height={data.length <= 1 ? 330 : 207}
          yLabel={-20}
          title={`${item.app_name + " " + item.version_no}`}
        />
      );
    });
  };

  const renderAppGraph = () => {
    if (!isEmpty(deviceAppData)) {
      const filteredAppData = filter(deviceAppData, {
        area_level: areaLevel,
        duration: duration,
        app_firmware_bool: true,
      });

      if (!isEmpty(filteredAppData)) {
        return calculateGraphData(
          filteredAppData,
          SoftwareUpdatesGraph,
          "#962DFF",
          "#E0C6FD"
        );
      }
    }
  };

  const renderFirmwareGraph = () => {
    if (!isEmpty(deviceAppData)) {
      const filteredFirmwareData = filter(deviceAppData, {
        area_level: areaLevel,
        duration: duration,
        app_firmware_bool: false,
      });

      if (!isEmpty(filteredFirmwareData)) {
        return calculateGraphData(
          filteredFirmwareData,
          SoftwareFirmwareGraph,
          "#4A3AFF",
          "#C6D2FD"
        );
      }
    }
  };

  return (
    <div
      className={`${
        pathname === "/dashboard/devices"
          ? "col-lg-5 col-md-5"
          : "col-lg-12 col-md-12"
      }`}
    >
      <div
        className={`card speed_sc ${
          pathname === "/dashboard/devices" ? "" : "graphContainer"
        }`}
      >
        <div className="card-body dev_dt2">
          <div className=" align-items-start">
            <div className="col-12">
              <div
                className={`${
                  pathname === "/dashboard/devices" ? "" : "mb-9"
                } d-sm-flex d-block align-items-center justify-content-between`}
              >
                {pathname === "/dashboard/devices" ? null : (
                  <div className="mb-3 mb-sm-0">
                    <h5 className="card-title fw-semibold td3">
                      Software Update
                    </h5>
                    <span className="ac2 td3">Launched on 23/11/2023</span>
                  </div>
                )}
              </div>
              <div className="row">
                {renderAppGraph()}
                {renderFirmwareGraph()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  deviceAppData: state.dashboardReducer.deviceAppData,
  deviceAppDataError: state.dashboardReducer.deviceAppDataError,
});

export default connect(mapStateToProps, {})(SoftwareUpdateSection);
