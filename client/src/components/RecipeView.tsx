import React from "react";
import { Card, Grid, Image } from "semantic-ui-react";

const defaultImageUrl = "https://semantic-ui.com/images/wireframe/image.png";

export default function Recipe(props: any) {
  console.log("card props: ", props);
  const imgUrl = props.imgUrl || defaultImageUrl;
  return (
    <>
      <Card>
        <Image src={imgUrl} size="medium" rounded centered />
        <Card.Content>
          <Card.Header>{props.name}</Card.Header>
          <Card.Description>
            <ul>
              {props.ingredients.map((i: any) => (
                <li>{i}</li>
              ))}
            </ul>
          </Card.Description>
        </Card.Content>
      </Card>
    </>
  );
}
