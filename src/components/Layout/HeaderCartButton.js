import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numOfItems = cartCtx.items.reduce(
    (curNumber, item) => curNumber + item.amount,
    0
  );
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>you cart</span>
      <span className={classes.badge}>{numOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
