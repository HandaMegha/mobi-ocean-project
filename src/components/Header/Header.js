import { isEmpty } from "lodash";
import { getDateTime } from "../Date/convertDate";
import "./Header.css";

const Header = () => {
  const dateTime = getDateTime();
  const userName = localStorage.getItem("userName");
  const userImage = localStorage.getItem("userImage");

  return (
    <header className="topbar">
      <div className="with-vertical">
        <nav className="navbar navbar-expand-lg p-0">
          <div className=" welcome-links">
            <h2 className="welcome_sms">
              Welcome, {userName} <span>{dateTime}</span>
            </h2>
            <p className="welcome_desi_1">Designation</p>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            {!isEmpty(userImage) ? (
              <img
                // src="/images/iffco.png"
                src={userImage}
                className="iffc_logo"
                alt=""
              />
            ) : null}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
