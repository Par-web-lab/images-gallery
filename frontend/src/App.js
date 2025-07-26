import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import Welcome from './components/Welcome';
import { Container, Row, Col } from 'react-bootstrap';

const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5050';

const App = () => {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null); // Optional: to show user-friendly errors

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setError(null); // Reset error state before making a request

    fetch(`${API_URL}/new-image?query=${word}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch image.");
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.id && data.urls && data.urls.small) {
          setImages([{ ...data, title: word }, ...images]);
        } else {
          throw new Error("No image found for this keyword.");
        }
      })
      .catch((err) => {
        console.error(err.message);
        setError("No image found or something went wrong.");
      });

    setWord('');
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className="mt-4">
        {error && (
          <div className="alert alert-danger text-center" role="alert">
            {error}
          </div>
        )}

        {images.length ? (
          <Row xs={1} md={2} lg={3}>
            {images.map((image, i) => (
              <Col key={i} className="pb-3">
                <ImageCard image={image} deleteImage={handleDeleteImage} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
};

export default App;
