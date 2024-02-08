import DeviceSectionGraph from "./DeviceSectionGraph";
import { connect } from "react-redux";
import { filter, find, isEmpty } from "lodash";
import { useLocation } from "react-router-dom";

const DeviceSection = (props) => {
  const { deviceData, duration, areaLevel, deviceAppData, area } = props;
  const location = useLocation();
  const { pathname } = location;

  const renderDeviceData = () => {
    const deviceGraphData = [];
    let activeDevicesCount = {},
      totalDevicesCount = {};
    if (!isEmpty(deviceData)) {
      const filteredData = filter(deviceData, {
        area_level: areaLevel,
        duration: duration,
        area: area,
      });
      activeDevicesCount = find(filteredData, "device_active_today_count");
      totalDevicesCount = find(filteredData, "device_total_active_count");

      if (!isEmpty(filteredData)) {
        filteredData.map((item) => {
          if (item.hasOwnProperty("device_total_deployed_count")) {
            deviceGraphData.push({
              name: "Total Deployed",
              y: item.device_avg_usage_count,
            });
          }
          if (item.hasOwnProperty("device_total_shipped_count")) {
            deviceGraphData.push({
              name: "Total Shipped",
              y: item.device_avg_usage_count,
            });
          }
          if (item.hasOwnProperty("device_avg_usage_count")) {
            deviceGraphData.push({
              name: "Avg. Usage",
              y: item.device_avg_usage_count,
            });
          }
          if (item.hasOwnProperty("device_avg_active_count")) {
            deviceGraphData.push({
              name: "Avg. Active",
              y: item.device_avg_usage_count,
            });
          }
        });
      }
    }

    return (
      <>
        <div className="d-block align-items-center justify-content-between mb-9">
          <div className="mb-3 mb-sm-0">
            <h5 className="card-title fw-semibold text-center">Device Data</h5>
            {pathname === "/dashboard/devices" ? null : (
              <p className="ac2 text-center" style={{ color: "#1DB636" }}>{`${
                isEmpty(activeDevicesCount)
                  ? 0
                  : activeDevicesCount.device_active_today_count.toLocaleString()
              } active today`}</p>
            )}
          </div>
        </div>
        <div className="act_box w-auto new_cl">
          <p className="ac1">Total Active Count</p>
          <p className="ac2">
            {isEmpty(totalDevicesCount)
              ? 0
              : totalDevicesCount.device_total_active_count.toLocaleString()}
          </p>
        </div>
        {!isEmpty(deviceGraphData) ? (
          <DeviceSectionGraph data={deviceGraphData} />
        ) : (
          <div className="emptyTable">No Device Data Available</div>
        )}
      </>
    );
  };

  return (
    <div
      className={
        pathname === "/dashboard/devices"
          ? isEmpty(deviceAppData)
            ? "col-lg-12 col-md-12"
            : "col-lg-7 col-md-7"
          : "col-lg-5 col-md-5 padding-0"
      }
    >
      <div className="card speed_sc">
        <div
          className={`${
            pathname === "/dashboard/devices" ? "dev_dt3" : "dev_dt1"
          } card-body`}
        >
          <div className=" align-items-start">
            <div className="col-12">{renderDeviceData()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  deviceData: state.dashboardReducer.deviceData,
  deviceDataError: state.dashboardReducer.deviceDataError,
  deviceAppData: state.dashboardReducer.deviceAppData,
});

export default connect(mapStateToProps, {})(DeviceSection);
