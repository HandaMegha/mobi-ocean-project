import DeviceSection from "../DeviceData/DeviceSection";
import TicketDataGraph from "./TicketDataGraph";
import TicketSection from "./TicketSection";

const TicketData = () => {
  return (
    <div className="col-lg-7">
      <div className="row">
        <TicketSection />
        <DeviceSection />
      </div>
      <div className="col-lg-12 col-md-12 padding-0">
        <div className="card speed_sc graphContainer">
          <div className="card-body">
            <div className=" align-items-start">
              <div className="col-12">
                <div className="d-block align-items-center justify-content-between mb-9">
                  <div className="mb-3 mb-sm-0">
                    <h5 className="card-title fw-semibold text-center">
                      Top 10 issues raised in duration
                    </h5>
                  </div>
                </div>
                <TicketDataGraph />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TicketData;
