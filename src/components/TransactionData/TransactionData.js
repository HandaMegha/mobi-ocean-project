import TicketSection from "../TicketData/TicketSection";
import TransactionDataGraph from "./TransactionDataGraph";

const TransactionData = () => {
  const renderGraphs = (title, height, key, countColor, amountColor) => {
    return (
      <div className="card speed_sc">
        <div className="card-body">
          <div className=" align-items-start">
            <div className="col-12">
              <div className="d-block align-items-center justify-content-between mb-9">
                <div className="mb-3 mb-sm-0">
                  <h5 className="card-title fw-semibold text-center">
                    {title} <br />{" "}
                    {title === "Debit" || title === "Credit" ? "Card" : null}{" "}
                    Transactions
                  </h5>
                </div>
              </div>
              <div className="act_box w-auto new_cl mb-9">
                <p className="ac1">Total</p>
                <p className="ac2">0</p>
              </div>
              <TransactionDataGraph
                height={height}
                countColor={countColor}
                amountColor={amountColor}
              />
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
            {renderGraphs(
              "Total",
              250,
              "total-transactions",
              "#D8D7F8",
              "#F8DEFC"
            )}
          </div>
          <div className="col-lg-3 col-md-3 padding-0">
            {renderGraphs(
              "Credit",
              250,
              "credit-card-transactions",
              "#D1F7EA",
              "#CCE9FF"
            )}
          </div>
          <div className="col-lg-3 col-md-3 padding-0">
            {renderGraphs(
              "Debit",
              250,
              "debit-card-transactions",
              "#D9D9D9",
              "#5D6BB4"
            )}
          </div>
          <div className="col-lg-3 col-md-3 padding-0">
            {renderGraphs("UPI", 250, "upi-transactions", "#f5dbc5", "#b9f3e8")}
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionData;
