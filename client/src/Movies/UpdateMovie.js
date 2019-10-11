import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container, Form, Header } from "semantic-ui-react";

const UpdateMovie = props => {
  const { match, history} = props;
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${match.params.id}`)
      .then(res => {
        setMovie(res.data);
      })
      .catch(err => console.error(err.response));
  }, [match.params.id]);

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Container>
      <Form>
        <Form.Input name="title" placeholder="Title" value={movie && movie.title} />
        <Form.Input name="director" placeholder="Director" value={movie && movie.director} />
        <Form.Input name="metascore" placeholder="Metascore" value={movie && movie.metascore} />
        {movie ? (
          <div className="stars">
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
