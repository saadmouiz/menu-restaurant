import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import NavBar from './Component/NavBar';
import Header from './Component/Header';
import Category from './Component/Category';
import ItemsList from './Component/ItemsList';
import { items } from './Data'; // Import items

const App = () => {
  const [itemsData, setItemsData] = useState(items); 

  //get all cat unique 
  const allCategory = ['all', ...new Set(items.map((i) => i.category))];

  // Filter by category
  const filterByCategory = (cat) => {
    if (cat === 'all') {
      setItemsData(items); // Show all items
    } else {
      const newArray = items.filter((item) => item.category === cat);
      setItemsData(newArray); // Show filtered items
    }
  };

  // Filter by search
  const filterBySearch = (word) => {
    if (word !== "") {
      const newArray = items.filter((item) => item.title.toLowerCase().includes(word.toLowerCase()));
      setItemsData(newArray); // Show filtered items
    }
  };

  return (
    <div className='color-body font'>
      {/* Pass the filterBySearch function to NavBar */}
      <NavBar filterbySearch={filterBySearch} />
      <Container>
        <Header />
        <Category filterByCategory={filterByCategory} allCategory={allCategory} />
        <ItemsList itemsData={itemsData} /> {/* Pass 'itemsData' to reflect filtering */}
      </Container>
    </div>
  );
};

export default App;
