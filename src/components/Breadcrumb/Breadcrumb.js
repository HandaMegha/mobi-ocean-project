import { isEmpty } from "lodash";
import React from "react";
import "./Breadcrumb.css";
import { useLocation, useNavigate } from "react-router-dom";

const Breadcrumb = (props) => {
  const { title, subTitle } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const handleChange = () => {
    navigate(-1);
  };

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="pagetitle">
          {pathname === "/" || pathname === "/dashboard"
            ? "Dashboard"
            : pathname === "/dashboard/devices"
            ? "Device Dashboard"
            : "Ticket Dashboard"}
        </li>
        <br />
        <li className="breadcrumb-item titleList" onClick={handleChange}>
          {title}
        </li>
        {!isEmpty(subTitle) ? (
          <li className="breadcrumb-item active" aria-current="page">
            {subTitle}
          </li>
        ) : null}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
