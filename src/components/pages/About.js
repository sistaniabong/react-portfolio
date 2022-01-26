import React from 'react';
import '../../styles/about.css';
import { Card, Container, Row, Array, Col } from 'react-bootstrap'


export default function About() {
  return (
    <Container className="vh-100 d-flex flex-column "> 
    {/* <div className="h-75"> */}
        <h2>About Me</h2>
        <img id="profile-img" src={require('../../assets/profile_pic.png')} alt="profile"></img>
        <p class="profile-desc">Product development engineer with passion and expertise in the development of interoperable and data-driven healthcare software applications to enhance patient care and clinical efficiency. Highly proficient at leading an agile development throughout software development life cycle (SDLC). Proven ability and knowledge in integration with a wide range of medical record system and healthcare system.</p>
    {/* </div> */}
    </Container>
  );
}
