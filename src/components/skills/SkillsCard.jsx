import React from "react";
import { Col } from "react-bootstrap";

const SkillsCard = ({ name, logo }) => {
  return (
    <Col lg={3}>
      <div className="skills">
        <img src={logo} alt="" />
        {name}
      </div>
    </Col>
  );
};

export default SkillsCard;
