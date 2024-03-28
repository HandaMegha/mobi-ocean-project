import { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import DashboardContent from "./DashboardContent";
import "./Dashboard.css";
import {
  getToken,
  getDeviceData,
  getDeviceWiseCount,
  getDeviceAppData,
  getTicketWiseCount,
  getTickets,
  getTicketTopIssues,
} from "../../actions/DashboardActions";
import { connect } from "react-redux";
import { isEmpty } from "lodash";

const Dashboard = (props) => {
  const {
    getToken,
    getDeviceData,
    getDeviceWiseCount,
    getDeviceAppData,
    getTicketWiseCount,
    getTickets,
    getTicketTopIssues,
    loading,
    tokenSuccess,
  } = props;

  useEffect(() => {
    getToken();
  }, [getToken]);

  useEffect(() => {
    if (!isEmpty(tokenSuccess)) {
      const token = localStorage.getItem("Ns_t");
      getDeviceData(token);
      getDeviceWiseCount(token);
      getDeviceAppData(token);
      getTicketWiseCount(token);
      getTickets(token);
      getTicketTopIssues(token);
    }
  }, [
    tokenSuccess,
    getDeviceData,
    getDeviceWiseCount,
    getDeviceAppData,
    getTicketWiseCount,
    getTickets,
    getTicketTopIssues,
  ]);

  return (
    <div id="main-wrapper">
      <Sidebar />
      <div className="page-wrapper">
        <Header />
        {loading ? (
          <div className="loader" id="loader-1">
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          <DashboardContent />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.dashboardReducer.loading,
  tokenSuccess: state.dashboardReducer.tokenSuccess,
});

const mapDispatchToProps = {
  getToken,
  getDeviceData,
  getDeviceWiseCount,
  getDeviceAppData,
  getTicketWiseCount,
  getTickets,
  getTicketTopIssues,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
