import React, { useState } from "react";
import { Container, Form, Header } from "semantic-ui-react";

const UpdateMovie = props => {
  const [movie, setMovie] = useState();

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Container>
      <Form medium>
        <Form.Input name="title" placeholder="Title" />
        <Form.Input name="director" placeholder="Director" />
        <Form.Input name="metascore" placeholder="Metascore"/>
        {movie ? (
          <div class="stars">
            <Header as="h4">Actors</Header>
            {movie.stars.map((star, i) => (
              <Form.Input key={("star ", i)} name="star" value={star} />
            ))}
          </div>
        ) : null}
      </Form>
    </Container>
  );
};

export default UpdateMovie;
