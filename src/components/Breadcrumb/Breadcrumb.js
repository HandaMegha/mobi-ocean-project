import { isEmpty } from "lodash";
import React from "react";
import "./Breadcrumb.css";
import { useNavigate } from "react-router-dom";

const Breadcrumb = (props) => {
  const { title, subTitle } = props;
  const navigate = useNavigate();

  const handleChange = () => {
    navigate(-1);
  };

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
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
