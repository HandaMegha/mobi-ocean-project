import DeviceDataGraph from "./DeviceDataGraph";
import { connect } from "react-redux";
import { filter, isEmpty } from "lodash";

const DeviceData = (props) => {
  const { deviceData, duration, areaLevel } = props;
  console.log("props", props);

  const renderDeviceGraph = () => {
    const deviceGraphData = [];
    if (!isEmpty(deviceData)) {
      const filteredData = filter(deviceData, {
        area_level: areaLevel,
        duration: duration,
      });
      console.log("filteredData", filteredData);

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
        console.log("deviceGraphData", deviceGraphData);
      }
    }
    return <DeviceDataGraph data={deviceGraphData} />;
  };

  return (
    <div className="col-lg-5 col-md-5">
      <div className="card speed_sc">
        <div className="card-body dev_dt1 ">
          <div className=" align-items-start">
            <div className="col-12">
              <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                <div className="mb-3 mb-sm-0">
                  <h5 className="card-title fw-semibold">Device Data</h5>
                  <p className="ac2">999,99,99,999</p>
                </div>
                <div className="act_box w-auto new_cl">
                  <p className="ac1">Total Ordered</p>
                  <p className="ac2">9,99,999</p>
                </div>
              </div>
              {renderDeviceGraph()}
            </div>
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
