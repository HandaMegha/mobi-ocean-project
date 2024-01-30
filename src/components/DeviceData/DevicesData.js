import SoftwareUpdateSection from "../SoftwareUpdate/SoftwareUpdateSection";
import TicketSection from "../TicketData/TicketSection";
import DevicesGraph from "./DevicesGraph";
import DeviceSection from "./DeviceSection";

const DevicesData = (props) => {
  const { duration, areaLevel } = props;
  const deviceGraphData = [
    { y: 999995, color: "#6D3AFF" },
    { y: 520000, color: "#DB5AEE" },
    { y: 280000, color: "#1AD598" },
    { y: 1200000, color: "#F9B959" },
  ];

  return (
    <div className="col-lg-7">
      <div className="row">
        <DeviceSection duration={duration} areaLevel={areaLevel} />
        <SoftwareUpdateSection duration={duration} areaLevel={areaLevel} />
        <TicketSection />
      </div>
      <div className="row mt-15">
        <div className="col-lg-4 col-md-4">
          <div className="card speed_sc">
            <div className="card-body">
              <div className=" align-items-start">
                <div className="col-12">
                  <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                    <div className="mb-3 mb-sm-0">
                      <h5 className="card-title fw-semibold">
                        Device Under repair
                      </h5>
                    </div>
                  </div>
                  <div className="act_box w-auto new_cl mb-9">
                    <p className="ac1">Total</p>
                    <p className="ac2">9,99,999</p>
                  </div>
                  <DevicesGraph
                    data={deviceGraphData}
                    categories={[
                      "Last 24 Hour",
                      "Last 48 Hour",
                      "Last 72 Hour",
                      "Over 1 Week",
                    ]}
                    height={250}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="card speed_sc">
            <div className="card-body">
              <div className=" align-items-start">
                <div className="col-12">
                  <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                    <div className="mb-3 mb-sm-0">
                      <h5 className="card-title fw-semibold">
                        Warranty renewal
                      </h5>
                    </div>
                  </div>
                  <div className="act_box w-auto new_cl mb-9">
                    <p className="ac1">Total</p>
                    <p className="ac2">9,99,999</p>
                  </div>
                  <DevicesGraph
                    data={deviceGraphData}
                    categories={[
                      "Coming Quarter",
                      "Coming Month",
                      "Coming Week",
                      "Expired",
                    ]}
                    height={250}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="card speed_sc">
            <div className="card-body">
              <div className=" align-items-start">
                <div className="col-12">
                  <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                    <div className="mb-3 mb-sm-0">
                      <h5 className="card-title fw-semibold">
                        RD service expiry
                      </h5>
                    </div>
                  </div>
                  <div className="act_box w-auto new_cl mb-9">
                    <p className="ac1">Total</p>
                    <p className="ac2">9,99,999</p>
                  </div>
                  <DevicesGraph
                    data={deviceGraphData}
                    categories={[
                      "Coming Quarter",
                      "Coming Month",
                      "Coming Week",
                      "Expired",
                    ]}
                    height={250}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevicesData;
