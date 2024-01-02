import { useState } from 'react';
import classes from './MealsSummary.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const MealsSummary = ({ onAddMeal }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };


  console.log('name', name);
  console.log('description', description);
  console.log('price', price);
  console.log('size', size);

  const handleAddProduct = () => {
    const newMeal = { name, description, price, size };
    onAddMeal(newMeal);
  };

  return (
    <section className={classes.summary}>
      <h2>Add shoes in your cart</h2>
      <div className={classes.form}>
        <div className={classes.formContent}>
          <Form.Label htmlFor="name">Shoe Name</Form.Label>
          <Form.Control type="text" id="name" onChange={handleNameChange} />
        </div>

        <div className={classes.formContent}>
          <Form.Label htmlFor="description">Shoe Description</Form.Label>
          <Form.Control type="text" id="description" onChange={handleDescriptionChange} />
        </div>

        <div className={classes.formContent}>
          <Form.Label htmlFor="price">Shoe Price</Form.Label>
          <Form.Control type="number" id="price" onChange={handlePriceChange} value={price} />
        </div>


        <div className={classes.formContentSize}>
          <Form.Label htmlFor="size">Size</Form.Label>
          <Form.Control type="text" id="size" onChange={handleSizeChange} />
        </div>

        <div className={classes.btn}>
          <Button variant="primary"  onClick={handleAddProduct}>Add product</Button>
        </div>
      </div>
    </section>
  );
};

export default MealsSummary;
