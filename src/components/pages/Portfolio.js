import React from 'react';
import Project from '../projects/Project';
import { Card, Container, Row, Array, Col } from 'react-bootstrap'

const card1 = {
  heading: 'card1',
  title: 'JustFurPets',
  stack: 'MVC - Sequelize, Handlebars,Express',
  github_url: 'https://github.com/sistaniabong/justFurPets',
  url: 'https://just-fur-pets.herokuapp.com/',
  image: "../../assets/images/justfurpets2.png",
  id: 1,
};

const cards_col1 = [
  {
    heading: 'card1',
    title: 'JustFurPets',
    stack: 'MVC - Sequelize, Handlebars,Express',
    github_url: 'https://github.com/sistaniabong/justFurPets',
    url: 'https://just-fur-pets.herokuapp.com/',
    image: "../../assets/images/justfurpets2.png",
    id: 1,
  },
  {
    heading: 'card1',
    title: 'JustFurPets',
    stack: 'MVC - Sequelize, Handlebars,Express',
    github_url: 'https://github.com/sistaniabong/justFurPets',
    url: 'https://just-fur-pets.herokuapp.com/',
    image: "../../assets/images/justfurpets2.png",
    id: 1,
  },
  {
    heading: 'card1',
    title: 'JustFurPets',
    stack: 'MVC - Sequelize, Handlebars,Express',
    github_url: 'https://github.com/sistaniabong/justFurPets',
    url: 'https://just-fur-pets.herokuapp.com/',
    image: "../../assets/images/justfurpets2.png",
    id: 1,
  }
]

const cards_col2=[
  {
    heading: 'card1',
    title: 'JustFurPets',
    stack: 'MVC - Sequelize, Handlebars,Express',
    github_url: 'https://github.com/sistaniabong/justFurPets',
    url: 'https://just-fur-pets.herokuapp.com/',
    image: "../../assets/images/justfurpets2.png",
    id: 1,
  },
  {
    heading: 'card1',
    title: 'JustFurPets',
    stack: 'MVC - Sequelize, Handlebars,Express',
    github_url: 'https://github.com/sistaniabong/justFurPets',
    url: 'https://just-fur-pets.herokuapp.com/',
    image: "../../assets/images/justfurpets2.png",
    id: 1,
  },
  {
    heading: 'card1',
    title: 'JustFurPets',
    stack: 'MVC - Sequelize, Handlebars,Express',
    github_url: 'https://github.com/sistaniabong/justFurPets',
    url: 'https://just-fur-pets.herokuapp.com/',
    image: "../../assets/images/justfurpets2.png",
    id: 1,
  }
]


export default function Portfolio() {
  return (
    <Container>
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
