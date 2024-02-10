import { isEmpty } from "lodash";
import { useLocation } from "react-router-dom";

const SoftwareUpdateTable = (props) => {
  const { softwareTableData } = props;
  const location = useLocation();
  const { pathname } = location;

  const renderTable = () => {
    return isEmpty(softwareTableData) ? (
      <div className="emptyTable">No Data Available</div>
    ) : (
      <table id="tableListId">
        <thead>
          <tr>
            <th>Total Device</th>
            <th>Pushed devices</th>
            <th>Installed devices</th>
            <th>Pending devices</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{softwareTableData.total_device_count.toLocaleString()}</td>
            <td>{softwareTableData.pushed_device_count.toLocaleString()}</td>
            <td>{softwareTableData.installed_device_count.toLocaleString()}</td>
            <td>
              {(
                softwareTableData.pushed_device_count -
                softwareTableData.installed_device_count
              ).toLocaleString()}
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  const renderSoftwareData = () => {
    return (
      <div className="col-12">
        <div className="d-block align-items-center justify-content-between mb-9">
          <div className="mb-3 mb-sm-0">
            <h5 className="card-title fw-semibold text-center">
              Software Data
            </h5>
            <p className="ac2 text-center" style={{ color: "#1DB636" }}>{`${
              isEmpty(softwareTableData)
                ? 0
                : softwareTableData.total_device_count.toLocaleString()
            } total count`}</p>
          </div>
        </div>
        {renderTable()}
      </div>
    );
  };

  return (
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
          <div className=" align-items-start">{renderSoftwareData()}</div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareUpdateTable;
