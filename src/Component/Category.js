import React from 'react'
import { Row, Col } from 'react-bootstrap';

const Category = ({ filterByCategory, allCategory }) => {
  const onFilter = (cat) => {
    filterByCategory(cat);
  }

  return (
    <Row className='my-2 mb-5'>
      <Col sm='12' className='d-flex justify-content-center'>
        {
          allCategory.length >= 1 ? (
            allCategory.map((cat, index) => {
              return (
                <button
                  key={index} // Ajout d'une clé unique
                  onClick={() => onFilter(cat)} // On filtre selon la catégorie dynamique
                  style={{ border: "1px solid #b45b35" }}
                  className='btno mx-2'
                >
                  {cat} {/* Affichage du nom de la catégorie */}
                </button>
              );
            })
          ) : (
            <h1>Il n'y a aucun type</h1>
          )
        }
      </Col>
    </Row>
  );
}

export default Category;
