import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Form, Header, Button } from "semantic-ui-react";

const UpdateMovie = props => {
  const { match, history } = props;
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
    axios
      .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error(err.response);
      });
    history.push("/");
  };

  const handleChanges = e => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleStarChanges = e => {
    setMovie({
      ...movie,
      stars: movie.stars.map((star, i) => {
        console.log('e.target.key', e.target.name)
        if (e.target.name === `${i}`) {
          return e.target.value;
        }
      })
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          name="title"
          label="Title"
          placeholder="Title"
          onChange={handleChanges}
          value={movie && movie.title}
        />
        <Form.Input
          name="director"
          label="Director"
          placeholder="Director"
          onChange={handleChanges}
          value={movie && movie.director}
        />
        <Form.Input
          name="metascore"
          label="Metascore"
          type="number"
          placeholder="Metascore"
          onChange={handleChanges}
          value={movie && movie.metascore}
        />
        {movie ? (
          <div className="stars">
            <Header as="h4">Actors</Header>
            {movie.stars.map((star, i) => (
              <Form.Input
                key={i}
                name={i}
                value={star}
                onChange={handleStarChanges}
              />
            ))}
          </div>
        ) : null}
        <Button>Update Movie</Button>
      </Form>
    </Container>
  );
};

export default UpdateMovie;
