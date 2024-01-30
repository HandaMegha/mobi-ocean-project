import "./Sidebar.css";

const sidebarMenu = [
  {
    name: "Dashboard",
    imgUrl: "/icons/dashboard.svg",
    alt: "dashboard",
    href: "/dashboard",
    class: "active",
  },
  { name: "Devices", imgUrl: "/icons/devices.svg", alt: "devices", href: "#" },
  {
    name: "APP/Firmware",
    imgUrl: "/icons/firmware.svg",
    alt: "firmware",
    href: "#",
  },
  {
    name: "Transactions",
    imgUrl: "/icons/transactions.svg",
    alt: "transactions",
    href: "#",
  },
  { name: "Tickets", imgUrl: "/icons/tickets.svg", alt: "tickets", href: "#" },
];

const sidebarUserDetails = [
  { name: "Profile", imgUrl: "/icons/profile.svg", alt: "profile", href: "#" },
  { name: "Inbox", imgUrl: "/icons/inbox.svg", alt: "inbox", href: "#" },
];

const Sidebar = () => {
  const date = new Date();
  const year = date.getFullYear();
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
                    className={`sidebar-link ${menu.class}`}
                    href={menu.href}
                    aria-expanded="false"
                  >
                    <span>
                      <img src={menu.imgUrl} alt={menu.alt} />
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
