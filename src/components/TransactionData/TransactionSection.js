import TransactionGraph from "./TransactionGraph";
import { connect } from "react-redux";
import { isEmpty } from "lodash";

const TransactionSection = (props) => {
  const { deviceAppData } = props;
  return (
    <div
      className={`${
        !isEmpty(deviceAppData)
          ? "col-lg-6 col-md-6 padding-0"
          : "col-lg-12 col-md-12"
      }`}
    >
      <div className="card speed_sc">
        <div className="card-body">
          <div className=" align-items-start">
            <div className="col-12">
              <div className="d-block align-items-center justify-content-between mb-9">
                <div className="mb-3 mb-sm-0">
                  <h5 className="card-title fw-semibold">Transaction Data</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="act_box w-auto new_c_1">
                    <p className="ac1">Total Transactional Data</p>
                    <p className="ac2">999,99,99,999</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="act_box w-auto new_c_1">
                    <p className="ac1">Total Transactional Count</p>
                    <p className="ac2">9,99,999</p>
                  </div>
                </div>
              </div>
              <TransactionGraph height={295} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  deviceAppData: state.dashboardReducer.deviceAppData,
});

export default connect(mapStateToProps, {})(TransactionSection);
