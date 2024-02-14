import { connect } from "react-redux";
import { useEffect } from "react";
import { getTicketList, getTicketData } from "../../actions/DashboardActions";

const ActiveTicket = (props) => {
  const { getTicketList, ticketList, getTicketData, ticketData } = props;

  useEffect(() => {
    getTicketList();
  }, []);

  return (
    <div className="col-lg-12">
      <div className="row">
        <div className="col-lg-12 col-md-12 padding-0">
          <div className="card speed_sc">
            <div className="card-body">
              <div className=" align-items-start">
                <div className="col-12">
                  <div className="d-block align-items-center justify-content-between mb-9">
                    <div className="mb-3 mb-sm-0">
                      <h5 className="card-title fw-semibold text-center">
                        Active Ticket
                      </h5>
                    </div>
                  </div>
                  {/* <button
                                    className="backBtn"
                                    // onClick={() => changeSoftwareAppSection("", false)}
                                    >
                                    Back
                                </button> */}
                  {/* {renderTable()} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ticketList: state.dashboardReducer.ticketList,
  ticketData: state.dashboardReducer.ticketData,
});

const mapDispatchToProps = {
  getTicketList,
  getTicketData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveTicket);
