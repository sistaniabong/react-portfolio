import React, { useState } from 'react';
import { Card, Container, Row, Array, Col } from 'react-bootstrap'

export default function Resume() {
    return (
        <Container className="vh-100 d-flex flex-column "> 
            <p>To get detail information about my skills, please download my <a href="../../assets/Sistania_Bong_Resume_2021.pdf" download>resume</a> </p>             

            <h3>Programming Languages:</h3>
            <ul>
                <li>JavaScript</li>
                <li>Python</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>SQL</li>
            </ul>

            <h3>Frameworks:</h3>
            <ul>
                <li>Django</li>
                <li>React</li>
                <li>Express</li>
                <li>Node</li>
            </ul>

            <h3>Skills:</h3>
            <ul>
                <li>Database Design</li>
                <li>Research and development</li>
                <li>Project Management</li>
            </ul>

        </Container>
    );
  }