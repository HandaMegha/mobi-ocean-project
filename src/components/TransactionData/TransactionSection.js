import TicketSection from "../TicketData/TicketSection";
import TransactionGraph from "./TransactionGraph";

const TransactionSection = () => {
  const renderGraphs = (title, height, key) => {
    return (
      <div className="card speed_sc">
        <div className="card-body">
          <div className=" align-items-start">
            <div className="col-12">
              <div className="d-block align-items-center justify-content-between mb-9">
                <div className="mb-3 mb-sm-0">
                  <h5 className="card-title fw-semibold text-center">
                    {title}
                  </h5>
                </div>
              </div>
              <div className="act_box w-auto new_cl mb-9">
                <p className="ac1">Total</p>
                <p className="ac2">0</p>
              </div>
              <TransactionGraph height={height} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="col-lg-7">
        <div className="row">
          <TicketSection />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="row mt-5">
          <div className="col-lg-3 col-md-3">
            {renderGraphs("Total Transactions", 250, "total-transactions")}
          </div>
          <div className="col-lg-3 col-md-3 padding-0">
            {renderGraphs(
              "Credit Transactions",
              250,
              "credit-card-transactions"
            )}
          </div>
          <div className="col-lg-3 col-md-3 padding-0">
            {renderGraphs("Debit Transactions", 250, "debit-card-transactions")}
          </div>
          <div className="col-lg-3 col-md-3 padding-0">
            {renderGraphs("UPI Transactions", 250, "upi-transactions")}
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionSection;
