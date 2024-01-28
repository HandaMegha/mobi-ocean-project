import SoftwareUpdateSection from "../SoftwareUpdate/SoftwareUpdateSection";
import TicketSection from "../TicketData/TicketSection";
import DeviceSection from "./DeviceSection";

const DevicesData = (props) => {
  const { duration, areaLevel } = props;
  return (
    <div className="col-lg-7">
      <div className="row">
        <DeviceSection duration={duration} areaLevel={areaLevel} />
        <SoftwareUpdateSection duration={duration} areaLevel={areaLevel} />
        <TicketSection />
        <div className="col-lg-4 col-md-4">
          <div className="card speed_sc">
            <div className="card-body dev_dt1 ">
              <div className=" align-items-start">
                <div className="col-12">
                  <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                    <div className="mb-3 mb-sm-0">
                      <h5 className="card-title fw-semibold">
                        Device Under repair
                      </h5>
                    </div>
                    <div className="act_box w-auto new_cl">
                      <p className="ac1">Total</p>
                      <p className="ac2">9,99,999</p>
                    </div>
                  </div>
                  {/* <DeviceGraph data={deviceGraphData} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="card speed_sc">
            <div className="card-body dev_dt1 ">
              <div className=" align-items-start">
                <div className="col-12">
                  <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                    <div className="mb-3 mb-sm-0">
                      <h5 className="card-title fw-semibold">
                        Warranty renewal
                      </h5>
                    </div>
                    <div className="act_box w-auto new_cl">
                      <p className="ac1">Total</p>
                      <p className="ac2">9,99,999</p>
                    </div>
                  </div>
                  {/* <DeviceGraph data={deviceGraphData} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="card speed_sc">
            <div className="card-body dev_dt1 ">
              <div className=" align-items-start">
                <div className="col-12">
                  <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                    <div className="mb-3 mb-sm-0">
                      <h5 className="card-title fw-semibold">
                        RD service expiry
                      </h5>
                    </div>
                    <div className="act_box w-auto new_cl">
                      <p className="ac1">Total</p>
                      <p className="ac2">9,99,999</p>
                    </div>
                  </div>
                  {/* <DeviceGraph data={deviceGraphData} /> */}
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
