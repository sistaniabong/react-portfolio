import React from "react";
import { Card } from 'react-bootstrap'


// function Project({className,image,title,stack,github_url,url}) {
//   return (
//     <Card className={className} >
//     {/* <Card.Img variant="top" src={require(image)} /> */}
//     <Card.Body>
//       <Card.Title>{title}</Card.Title>
//       <Card.Text>
//         {stack}
//       </Card.Text>
//       <Card.Link href={github_url}>Github</Card.Link>
//       <Card.Link href={url}>App</Card.Link>
//     </Card.Body>
//     </Card>
//   );
// }

const styles = {
    card: {
      background: "#F0FFFF",
    }
  }
  

function Project( props ) {
    return props.cards.map(card => (
        <Card className={card.heading} style={styles.card} >
        {/* <Card.Img variant="top" src={require(image)} /> */}
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>
            {card.stack}
          </Card.Text>
          <Card.Link href={card.github_url}>Github</Card.Link>
          <Card.Link href={card.url}>App</Card.Link>
        </Card.Body>
        </Card>
      ));
  }

export default Project;
