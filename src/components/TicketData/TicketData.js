import TicketDataGraph from "./TicketDataGraph";

const TicketData = () => {
  return (
    <div className="col-lg-7 col-md-7">
      <div className="card">
        <div className="card-body">
          <div className=" align-items-center">
            <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
              <div className="mb-3 mb-sm-0">
                <h5 className="card-title fw-semibold">Ticket Data</h5>
              </div>
              <div className="act_box w-auto">
                <p className="ac1">
                  Active tickets <span>(unresolved)</span>
                </p>
                <p className="ac2">9,99,999</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="col-box-6">
                  <p>
                    Open in duration <span>9,99,999</span>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="col-box-6">
                  <p>
                    Closed in duration <span>9,99,999</span>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="select-box-6">
                  <p>Comparison criteria 1</p>
                  <select className="form-select w-auto">
                    <option defaultValue="0"> Past Month</option>
                    <option value="1">March 2023</option>
                    <option value="2">April 2023</option>
                    <option value="3">May 2023</option>
                    <option value="4">June 2023</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="select-box-6">
                  <p>Comparison criteria 2</p>
                  <select className="form-select w-auto">
                    <option defaultValue="0"> Present Month</option>
                    <option value="1">March 2023</option>
                    <option value="2">April 2023</option>
                    <option value="3">May 2023</option>
                    <option value="4">June 2023</option>
                  </select>
                </div>
              </div>
              <div className="col-md-12">
                <div className="map2">
                  <p className="tm1">
                    Time over time comparative data (Active)
                  </p>
                  <p className="tm2">
                    9,99,999 <span>past 30 days</span>
                  </p>
                  <TicketDataGraph />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketData;
