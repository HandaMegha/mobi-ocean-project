import DeviceDataGraph from "./DeviceDataGraph";

const DeviceData = () => {
  return (
    <div className="col-lg-5 col-md-5">
      <div className="card speed_sc">
        <div className="card-body dev_dt1 ">
          <div className=" align-items-start">
            <div className="col-12">
              <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                <div className="mb-3 mb-sm-0">
                  <h5 className="card-title fw-semibold">Device Data</h5>
                </div>
                <div className="act_box w-auto new_cl">
                  <p className="ac1">Total Ordered</p>
                  <p className="ac2">9,99,999</p>
                </div>
              </div>
              <DeviceDataGraph />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceData;
