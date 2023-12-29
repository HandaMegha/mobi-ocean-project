import { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import DashboardContent from "./DashboardContent";
import "./Dashboard.css";
import { getToken } from "../../actions/AuthActions";
import { connect } from "react-redux";

const Dashboard = (props) => {
  const { getToken } = props;

  useEffect(() => {
    getToken();
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

const mapStateToProps = (state) => ({
  // loggingIn: state.authReducer.loggingIn,
  // loginerror: state.authReducer.loginerror,
  // successMsg: state.authReducer.successMsg
});

const mapDispatchToProps = {
  getToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
