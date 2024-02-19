import { isEmpty } from "lodash";
import React from "react";
import "./Breadcrumb.css";
import { useLocation, useNavigate } from "react-router-dom";

const Breadcrumb = (props) => {
  const { title, subTitle, filterValue, area, showDistrict, areaParent } =
    props;
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
        {!isEmpty(filterValue) && !showDistrict ? (
          <li className="breadcrumb-item active" aria-current="page">
            {filterValue === "list_view"
              ? `${area} / List View`
              : (filterValue === "state" && area === "India") ||
                (filterValue === "organization" && area === "India")
              ? `${area} / ${filterValue}`
              : `India / ${filterValue} / ${area}`}
          </li>
        ) : null}
        {!isEmpty(filterValue) && showDistrict && isEmpty(areaParent) ? (
          <li className="breadcrumb-item active" aria-current="page">
            India / {area}
          </li>
        ) : null}
        {!isEmpty(filterValue) && showDistrict && !isEmpty(areaParent) ? (
          <li className="breadcrumb-item active" aria-current="page">
            India / {areaParent} / {area}
          </li>
        ) : null}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
