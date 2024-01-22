import { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import DashboardContent from "./DashboardContent";
import "./Dashboard.css";
import { getToken, getDeviceData } from "../../actions/DashboardActions";
import { connect } from "react-redux";

const Dashboard = (props) => {
  const { getToken, getDeviceData, loading } = props;

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
        {/* {loading ? (
          <div className="loader" id="loader-1">
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          <DashboardContent />
        )} */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.dashboardReducer.loading,
});

const mapDispatchToProps = {
  getToken,
  getDeviceData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
