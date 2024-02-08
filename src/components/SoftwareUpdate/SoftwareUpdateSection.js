import SoftwareUpdatesGraph from "./SoftwareAppGraph";
import SoftwareFirmwareGraph from "./SoftwareFirmwareGraph";
import { connect } from "react-redux";
import { isEmpty, filter } from "lodash";
import { useLocation } from "react-router-dom";

const SoftwareUpdateSection = (props) => {
  const { deviceAppData, duration, areaLevel, area } = props;
  // const areaLevel = "district";
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
          height={data.length <= 1 ? 250 : 207}
          yLabel={-20}
          title={`${item.app_name + " " + item.version_no}`}
          subtitle="Launched on 23/11/2023"
        />
      );
    });
  };

  const renderAppGraph = (filteredAppData) => {
    if (!isEmpty(filteredAppData)) {
      return calculateGraphData(
        filteredAppData,
        SoftwareUpdatesGraph,
        "#962DFF",
        "#E0C6FD"
      );
    }
  };

  const renderFirmwareGraph = (filteredFirmwareData) => {
    if (!isEmpty(filteredFirmwareData)) {
      return calculateGraphData(
        filteredFirmwareData,
        SoftwareFirmwareGraph,
        "#4A3AFF",
        "#C6D2FD"
      );
    }
  };

  const renderSoftwareGraph = () => {
    let filteredAppData = [],
      filteredFirmwareData = [];
    if (!isEmpty(deviceAppData)) {
      filteredAppData = filter(deviceAppData, {
        area_level: areaLevel,
        duration: duration,
        app_firmware_bool: true,
        area: area,
      });

      filteredFirmwareData = filter(deviceAppData, {
        area_level: areaLevel,
        duration: duration,
        app_firmware_bool: false,
        area: area,
      });
    }
    return !isEmpty(filteredAppData) || !isEmpty(filteredFirmwareData) ? (
      <div className="row">
        {renderAppGraph(filteredAppData)}
        {renderFirmwareGraph(filteredFirmwareData)}
      </div>
    ) : (
      <div className="emptyTable">No Software Data Available</div>
    );
  };

  return !isEmpty(deviceAppData) ? (
    <div
      className={`${
        pathname === "/dashboard/devices"
          ? "col-lg-5 col-md-5 padding-0"
          : "col-lg-12 col-md-12"
      }`}
    >
      <div className="card speed_sc graphContainer">
        <div
          className={`${
            pathname === "/dashboard/devices" ? "dev_dt3" : "dev_dt2"
          } card-body`}
        >
          <div className=" align-items-start">
            <div className="col-12">
              <div
                className={`${
                  pathname === "/dashboard/devices" ? "" : "mb-9"
                } d-block align-items-center justify-content-between`}
              >
                {pathname === "/dashboard/devices" ? null : (
                  <div className="mb-3 mb-sm-0">
                    <h5 className="card-title fw-semibold text-center">
                      Software Update
                    </h5>
                  </div>
                )}
              </div>
              {renderSoftwareGraph()}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

const mapStateToProps = (state) => ({
  deviceAppData: state.dashboardReducer.deviceAppData,
  deviceAppDataError: state.dashboardReducer.deviceAppDataError,
});

export default connect(mapStateToProps, {})(SoftwareUpdateSection);
