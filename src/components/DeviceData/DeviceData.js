import DeviceDataGraph from "./DeviceDataGraph";
import { connect } from "react-redux";
import { filter, find, isEmpty } from "lodash";

const DeviceData = (props) => {
  const { deviceData, duration, areaLevel } = props;

  const renderDeviceData = () => {
    const deviceGraphData = [];
    let activeDevicesCount = 0;
    if (!isEmpty(deviceData)) {
      const filteredData = filter(deviceData, {
        area_level: areaLevel,
        duration: duration,
      });
      activeDevicesCount = find(deviceData, "device_total_active_count");

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
          if (item.hasOwnProperty("device_total_active_count")) {
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
        <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
          <div className="mb-3 mb-sm-0">
            <h5 className="card-title fw-semibold">Device Data</h5>
            <p className="ac2" style={{ color: "#1DB636" }}>{`${
              isEmpty(activeDevicesCount)
                ? 0
                : activeDevicesCount.device_total_active_count
            } active today`}</p>
          </div>
          <div className="act_box w-auto new_cl">
            <p className="ac1">Lorem</p>
            <p className="ac2">9,99,999</p>
          </div>
        </div>
        <DeviceDataGraph data={deviceGraphData} />
      </>
    );
  };

  return (
    <div className="col-lg-5 col-md-5">
      <div className="card speed_sc">
        <div className="card-body dev_dt1 ">
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
});

export default connect(mapStateToProps, {})(DeviceData);
