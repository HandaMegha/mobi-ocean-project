import { useState } from "react";
import TicketData from "../TicketData/TicketData";
import DeviceData from "../DeviceData/DeviceData";
import TransactionData from "../TransactionData/TransactionData";
import SoftwareUpdate from "../SoftwareUpdate/SoftwareUpdate";

const statesList = [
  { name: "Gujarat", value: "9,99,999" },
  { name: "Maharasthra", value: "9,99,999" },
  { name: "Rajsathan", value: "9,99,999" },
  { name: "Tamil Nadu", value: "9,99,999" },
  { name: "Uttar Pradesh", value: "9,99,999" },
  { name: "Madhya Pradesh", value: "9,99,999" },
  { name: "Delhi", value: "9,99,999" },
  { name: "Karnataka", value: "9,99,999" },
  { name: "Arunchal Pradesh", value: "9,99,999" },
  { name: "Assam", value: "9,99,999" },
  { name: "Punjab", value: "9,99,999" },
  { name: "Chattisgarh", value: "9,99,999" },
  { name: "Goa", value: "9,99,999" },
  { name: "Haryana", value: "9,99,999" },
  { name: "Goa", value: "9,99,999" },
  { name: "Haryana", value: "9,99,999" },
  { name: "Goa", value: "9,99,999" },
  { name: "Haryana", value: "9,99,999" },
  { name: "Goa", value: "9,99,999" },
  { name: "Haryana", value: "9,99,999" },
  { name: "Goa", value: "9,99,999" },
  { name: "Haryana", value: "9,99,999" },
  { name: "Goa", value: "9,99,999" },
];

const DashboardContent = () => {
  const [listView, setListView] = useState(true);

  const changeView = () => {
    setListView((prevListView) => !prevListView);
  };

  return (
    <div className="body-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 d-flex align-items-strech">
            <div className="card w-100">
              <div className="card-body">
                <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                  <div className="mb-3 mb-sm-0">
                    <h5 className="card-title fw-semibold">
                      {listView ? "Lorem ipsum" : "Lorem ipsum dolor sitamet"}
                    </h5>
                  </div>
                  <button className="viewBtn" onClick={changeView}>
                    <img
                      src={listView ? "/icons/list.svg" : "/icons/map.svg"}
                      alt="list"
                    />
                    {listView ? "List View" : "Map View"}
                  </button>
                </div>
                {listView ? (
                  <div className="row align-items-center">
                    <div className="col-md-12">
                      <div className="map">
                        <img className="vw1" src="/images/Map.png" alt="map" />{" "}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="hstack_1">
                        <h4>XX</h4>
                        <p>LOREM IPSUM</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="hstack_1">
                        <h4>XX</h4>
                        <p>LOREM IPSUM</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="hstack_1">
                        <h4>XX</h4>
                        <p>LOREM IPSUM</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="hstack_1">
                        <h4>XX</h4>
                        <p>LOREM IPSUM</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="row">
                      <div className="col-md-7">
                        <input
                          type="search"
                          id="stateSearch"
                          name="stateSearch"
                          className="searchInput"
                          placeholder="Search by state, district or organization"
                        />
                      </div>
                      <div className="col-md-5">
                        <select className="form-select w-auto">
                          <option defaultValue="0"> Filter by</option>
                          <option value="1">State</option>
                        </select>
                      </div>
                    </div>
                    <div className="tableList">
                      <table id="stateList">
                        <tr>
                          <th>State/UT</th>
                          <th>Active devices</th>
                        </tr>
                        {statesList.map((list, index) => {
                          return (
                            <tr key={index}>
                              <td>{list.name}</td>
                              <td>{list.value}</td>
                            </tr>
                          );
                        })}
                      </table>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row">
              <TicketData />
              <DeviceData />
              <TransactionData listView={listView} />
              {!listView && <SoftwareUpdate />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
