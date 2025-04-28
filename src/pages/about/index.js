import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass } from 'react-icons/fa';
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        {/* <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row> */}

        {/* <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col> */}




        {/* {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })} */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Expertise</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>

                <FaHtml5 color="#E34F26" fontSize={60} />
                <FaCss3Alt color="#1572B6" fontSize={60} />
                <FaJs color="#F7DF1E" fontSize={60} />
                <FaReact color="#61DAFB" fontSize={60} />
                <FaSass color="#CC6699" fontSize={60} />
              </div>

            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Education</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <h5>10th</h5>
              <p>Wellhem's International School,Gujarat </p>
              <p>87.55 percentile</p>
              <hr></hr>
              <h5>12th</h5>
              <p>Mordern Defence Snr Secondary School,Rajathan </p>
              <p>82.20 %</p>
            </div>
          </Col>
        </Row>


        {/* <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row> */}
      </Container>
    </HelmetProvider>
  );
};
