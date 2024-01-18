import { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import DashboardContent from "./DashboardContent";
import "./Dashboard.css";
import { getToken, getDeviceData } from "../../actions/DashboardActions";
import { connect } from "react-redux";

const Dashboard = (props) => {
  const { getToken, getDeviceData, getDeviceAppData } = props;

  useEffect(() => {
    getToken();
    getDeviceData();
  }, []);

  return (
    <div id="main-wrapper">
      <Sidebar />
      <div className="page-wrapper">
        <Header />
        <DashboardContent />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  getToken,
  getDeviceData,
};

export default connect(undefined, mapDispatchToProps)(Dashboard);
