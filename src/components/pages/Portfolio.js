import React from 'react';
import Project from '../projects/Project';
import { Card, Container, Row, Array, Col } from 'react-bootstrap'


const cards_col1 = [
  {
    heading: 'card1',
    title: 'JustFurPets',
    stack: 'MVC - Sequelize, Handlebars,Express',
    github_url: 'https://github.com/sistaniabong/justFurPets',
    url: 'https://just-fur-pets.herokuapp.com/',
    image: "../../assets/justfurpets2.png",
    id: 1,
  },
  {
    heading: 'card2',
    title: 'Meal Prep Life',
    stack: 'JavaScript, CSS, HTML',
    github_url: 'https://github.com/sistaniabong/meal-prep-life',
    url: 'https://sistaniabong.github.io/meal-prep-life/',
    image: "../../assets/project_1.png",
    id: 1,
  },
  {
    heading: 'card3',
    title: 'Day Planner',
    stack: 'JavaScript, CSS, HTML',
    github_url: 'https://github.com/sistaniabong/day-planner',
    url: 'https://sistaniabong.github.io/day-planner/',
    image: "../../assets/day_planner.png",
    id: 1,
  }
]

const cards_col2=[
  {
    heading: 'card4',
    title: 'Weather Dashboard',
    stack: 'JavaScript, CSS, HTML',
    github_url: 'https://github.com/sistaniabong/weather-dashboard',
    url: 'https://sistaniabong.github.io/weather-dashboard/',
    image: "../../assets/weather_dashboard.png",
    id: 1,
  },
  {
    heading: 'card5',
    title: 'Text Editor',
    stack: 'Service Workers, Webpack, PWA',
    github_url: 'https://github.com/sistaniabong/text-editor',
    url: 'https://sheltered-retreat-55833.herokuapp.com/',
    image: "../../assets/text-editor.png",
    id: 1,
  },
  {
    heading: 'card6',
    title: 'Social Network API',
    stack: 'Node.js, Express, MongoDB database and Mongoose ODM',
    github_url: 'https://github.com/sistaniabong/social-network-api',
    url: '',
    image: "",
    id: 1,
  }
]

const styles = {
  container: {
    marginTop: 40,
  }
}


export default function Portfolio() {
  return (
    <Container className="vh-100 d-flex flex-column justify-content" style={styles.container}>
      <Row xs={1} md={2} className="g-4">
          <Col>
              <Project cards={cards_col1}
              />
          </Col>
          <Col>
            <Project cards={cards_col2}
                />
          </Col>
        
      </Row>
    </Container>
  );
}
