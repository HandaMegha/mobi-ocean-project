import "./Header.css";

const Header = () => {
  return (
    <header className="topbar">
      <div className="with-vertical">
        <nav className="navbar navbar-expand-lg p-0">
          <div className=" welcome-links">
            <h2 className="welcome_sms">
              Welcome, Rajesh Subramanyam 1{" "}
              <span>12:15 PM at 19th November 2020</span>
            </h2>
            <p className="welcome_desi_1">Designation</p>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <div className="btn_ex">
              <button className="btn_log_out">Log out</button>
              <img
                src="/images/iffco.png"
                className="iffc_logo"
                alt="iffc_logo"
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
