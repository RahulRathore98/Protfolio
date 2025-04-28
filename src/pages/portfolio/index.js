import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        {/* <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt=" not ava" />
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
        </div> */}
         <h5> 1. Remotebricks Website</h5><p style={{ maxWidth: "1000px" }}>I designed and developed the user interface for the Remotebricks website, a modern and intuitive platform for a technology company specializing in software development, QA, and UX services. The UI is focused on delivering an engaging, responsive experience that showcases the company's expertise and services in a clean and user-friendly layout.

The design prioritizes usability, making it easy for visitors to navigate through the different services, learn about the company's offerings, and get in touch with the team. I worked to create a visually appealing and seamless interface with smooth interactions and optimized performance across various devices.</p>
        <h5> 2. To-Do-application</h5><p style={{ maxWidth: "1000px" }}>Built a basic To-Do List application that allows users to add tasks, delete individual tasks, and clear the entire list with a single click. The project focuses on mastering core JavaScript concepts like array manipulation, event handling, and DOM updates.</p>
        
        <h5> 3. StopWatch</h5><p style={{ maxWidth: "1000px" }}>Created a functional stopwatch application that can start, stop, and reset time tracking. The stopwatch displays elapsed time in minutes, seconds, and milliseconds, updating live on the screen. This project helped build a strong understanding of timers, event handling, and DOM manipulation in JavaScript.</p>
        
        <h5>4. E-commerce design</h5>
        <p style={{ maxWidth: "1000px" }}>Designed and developed the frontend of a modern E-commerce website featuring a clean layout, responsive design, and user-friendly navigation. The site includes essential components such as product listings, product detail pages, a shopping cart interface, and a basic checkout flow, focusing on delivering a seamless shopping experience.</p>


        <h5> 5. Chess design</h5>
        <p style={{ maxWidth: "1000px" }}>Developed a fully dynamic 8x8 chessboard using React.js. The chessboard is generated programmatically, ensuring alternating black and white squares based on row and column indexes. This project focused on dynamic rendering, React component structure, and using logic inside JSX to create patterns without manually hardcoding the layout.</p>

        <h5> 6. Auth Page</h5>
        <p style={{ maxWidth: "1000px" }}>Built a responsive authentication page (Login/Signup) using React, Formik for form state management, and Yup for validation. The form efficiently handles user inputs, displays real-time validation errors, and ensures a smooth and secure user experience.</p>
      </Container>

    </HelmetProvider>
  );
};
