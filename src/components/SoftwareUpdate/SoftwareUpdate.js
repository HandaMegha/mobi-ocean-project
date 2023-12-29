import SoftwareUpdatesGraph from "./SoftwareUpdatesGraph";

const SoftwareUpdate = () => {
  return (
    <div className="col-lg-5 col-md-5">
      <div className="card speed_sc">
        <div className="card-body dev_dt2">
          <div className=" align-items-start">
            <div className="col-12">
              <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                <div className="mb-3 mb-sm-0">
                  <h5 className="card-title fw-semibold">Software Update</h5>
                  <span className="ac2">Launched on 23/11/2023</span>
                </div>
              </div>
              <SoftwareUpdatesGraph />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareUpdate;
