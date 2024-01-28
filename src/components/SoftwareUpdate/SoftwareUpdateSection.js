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
          height={data.length <= 1 ? 330 : 165}
          yLabel={data.length <= 1 ? -40 : -20}
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
    <div className="col-lg-12 col-md-12">
      <div
        className={`card speed_sc ${
          pathname === "/dashboard/devices" ? "" : "graphContainer"
        }`}
      >
        <div className="card-body dev_dt2">
          <div className=" align-items-start">
            <div className="col-12">
              <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                <div className="mb-3 mb-sm-0">
                  <h5 className="card-title fw-semibold">Software Update</h5>
                  <span className="ac2">Launched on 23/11/2023</span>
                </div>
              </div>
              <div>
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
