import React from "react";
import { Container } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./academicBackground.css";
const AcademicBackground = ({brightNess}) => {
  return (
    <Container style={{color:brightNess? "black":'white'}}>
      <h1 className="text-center custom-color py-5 my-5">
        Academic Background
      </h1>
      <div className="academic-box">
      <VerticalTimeline className="custom-vertical-timeline">
        <VerticalTimelineElement
          className="vertical-timeline-element--work  "
          contentStyle={{
            background: "inherit",
            boxShadow: "5px 5px 5px black",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #f95654" }}
          date="2023-2025"
          iconStyle={{ background: "inherit", color: "#fff" }}
          icon={
            <img
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                borderRadius: "50%",
              }}
              src="data:image/jpeg;base64,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"
              alt="logo"
            />
          }
        >
          <h3 className="vertical-timeline-element-title">Bachelor in IT</h3>
          <h5 className="vertical-timeline-element-subtitle text-secondary">
            Asia Pacific International College
          </h5>
          <br />
          <ul className="list-unstyled">
            <li>
              Currently pursuing a Bachelor's degree in Information Technology,
              gaining comprehensive knowledge in various IT domains.(Set to
              graduate in 2025){" "}
            </li>
            <br />
            <li>
              Studying project management principles and methodologies to
              effectively plan, execute, and manage IT projects.
            </li>
            <br />
            <li>
              Acquiring proficiency in Java, a versatile and widely-used
              programming language.
            </li>
            
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education "
          date="October 2023 - Jan 2024"
          contentStyle={{
            background: "inherit",
            boxShadow: "5px 5px 5px  black",
          }}
          iconStyle={{ background: "inherit", color: "#fff" }}
          icon={
            <img
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                borderRadius: "50%",
              }}
              src="data:image/png;base64,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"
              alt="img"
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Development
          </h3>
          <h5 className="vertical-timeline-element-subtitle text-secondary">
            {" "}
            Dented Code Academy
          </h5>
          <br />
          <ul className="list-unstyled">
            <li>
              Successfully completed a front-end development coding bootcamp,
              gaining intensive and hands-on experience in web development.
            </li>
            <br />
            <li>
              Acquired proficiency in essential web development technologies,
              including HTML, CSS, and JavaScript.
            </li>
            <br />
            <li>
              Developed expertise in React.js, a popular JavaScript library for
              building user interfaces.
            </li>
           
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
    </Container>
  );
};

export default AcademicBackground;
