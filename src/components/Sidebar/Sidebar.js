import { useLocation } from "react-router-dom";
import "./Sidebar.css";

const sidebarMenu = [
  {
    name: "Dashboard",
    imgUrl: "/icons/dashboard.svg",
    imgUrlActive: "/icons/dashboard-white.svg",
    alt: "dashboard",
    href: "/dashboard",
    class: "active",
  },
  {
    name: "Devices/APP/Firmware",
    imgUrl: "/icons/devices.svg",
    imgUrlActive: "/icons/devices-white.svg",
    alt: "devices",
    href: "/dashboard/devices",
    class: "active",
  },
  // {
  //   name: "Transactions",
  //   imgUrl: "/icons/transactions.svg",
  //   alt: "transactions",
  //   href: "#",
  // },
  {
    name: "Tickets",
    imgUrl: "/icons/tickets.svg",
    imgUrlActive: "/icons/tickets-white.svg",
    alt: "tickets",
    href: "#",
  },
];

const sidebarUserDetails = [
  { name: "Profile", imgUrl: "/icons/profile.svg", alt: "profile", href: "#" },
  { name: "Inbox", imgUrl: "/icons/inbox.svg", alt: "inbox", href: "#" },
];

const Sidebar = () => {
  const date = new Date();
  const year = date.getFullYear();
  const location = useLocation();
  const { pathname } = location;

  return (
    <aside className="left-sidebar with-vertical">
      <div>
        <div className="brand-logo d-flex align-items-center justify-content-between">
          <a href="#" className="text-nowrap logo-img">
            <img
              src="/images/mobi-ocean.png"
              className="dark-logo"
              alt="Logo-Dark"
            />
          </a>
        </div>
        <nav className="sidebar-nav scroll-sidebar" data-simplebar>
          <ul id="sidebarnav">
            {sidebarMenu.map((menu, index) => {
              return (
                <li className="sidebar-item" key={index}>
                  <a
                    className={`sidebar-link ${
                      pathname === menu.href ? menu.class : ""
                    }`}
                    href={menu.href}
                    aria-expanded="false"
                  >
                    <span>
                      <img
                        src={
                          pathname === menu.href
                            ? menu.imgUrlActive
                            : menu.imgUrl
                        }
                        alt={menu.alt}
                      />
                    </span>
                    <span className="hide-menu">{menu.name}</span>
                  </a>
                </li>
              );
            })}
            <li className="nav-small-cap">
              <span className="hide-menu">USER</span>
            </li>
            {sidebarUserDetails.map((notification, index) => {
              return (
                <li className="sidebar-item" key={index}>
                  <a
                    className="sidebar-link"
                    href={notification.href}
                    aria-expanded="false"
                  >
                    <span>
                      <img src={notification.imgUrl} alt={notification.alt} />
                    </span>
                    <span className="hide-menu">{notification.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="fixed-profile mx-4 mb-2 mt-3">
          <button className="btn_log_out">Log out</button>
          <div className="hstack_cd1">
            <p className="cp1">© {year} Mobiocean</p>
            <p className="cp2">
              <a href="#">Terms & Conditions apply</a>
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
