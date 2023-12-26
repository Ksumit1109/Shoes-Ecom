import classes from './MealsSummary.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Add shoes in your cart</h2>
      <div className={classes.form}>
        <div className={classes.formContent}>
          <Form.Label htmlFor="name">Shoe Name</Form.Label>
          <Form.Control
            type="name"
            id="name"
          />
        </div>

        <div className={classes.formContent}>

          <Form.Label htmlFor="name">Shoe Description</Form.Label>
          <Form.Control
            type="name"
            id="Description"
          />
        </div>
        <div className={classes.formContent}>

          <Form.Label htmlFor="name">Shoe price</Form.Label>
          <Form.Control
            type="number"
            id="price"
          />
        </div>

        <div className={classes.formContentSize}>
          <Form.Label htmlFor="name">Size</Form.Label>
          <Form.Control
            type="name"
            id="size"
          />
          <Form.Control
            type="name"
            id="size"
          />
          <Form.Control
            type="name"
            id="size"
          />
        </div>
        <div className={classes.btn}><Button variant="primary">Add product</Button></div>


      </div>
    </section>
  );
};

export default MealsSummary;
