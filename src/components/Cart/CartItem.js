import classes from './CartItem.module.css';

const CartItem = (props) => {
  // Check if props.price is a valid number
  const formattedPrice = typeof props.price === 'number' ? `$${props.price.toFixed(2)}` : '';

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{formattedPrice}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
