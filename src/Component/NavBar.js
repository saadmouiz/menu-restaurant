import React, { useState } from 'react';
import { Row, Navbar, Form, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = ({ filterbySearch }) => {
  const [searchValue, setSearchValue] = useState('');

  // Fonction de recherche
  const onSearch = (e) => {
    e.preventDefault(); // Empêche la soumission par défaut du formulaire
    filterbySearch(searchValue); // Appelle la fonction de filtrage
    setSearchValue(''); // Réinitialise la barre de recherche
  };

  return (
    <Row>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <div className='brand-color'>Restaurant</div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex ms-auto" onSubmit={onSearch}> {/* onSubmit pour gérer l'envoi du formulaire */}
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearchValue(e.target.value)} // Met à jour la valeur de recherche
                value={searchValue} // Lier l'état avec la valeur du champ
              />
              <button className='btn-search' type="submit">Search</button> {/* type="submit" pour soumettre le formulaire */}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
