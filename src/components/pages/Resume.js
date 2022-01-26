import React, { useState } from 'react';
import { Card, Container, Row, Array, Col } from 'react-bootstrap'

export default function Resume() {
    return (
        <Container className="vh-100 d-flex flex-column "> 
            <h3>Backend:</h3>
            <ul>
                <li>Peas</li>
                <li>Carrots</li>
                <li>Love</li>
            </ul>

            <h3>FrontEnd:</h3>
            <ul>
                <li>Peas</li>
                <li>Carrots</li>
                <li>Love</li>
            </ul>
            <p>To get detail information about my skills, please download my <a href="../../assets/Sistania_Bong_Resume_2021.pdf" download>resume</a> </p>             


        </Container>
    );
  }