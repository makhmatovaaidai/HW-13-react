import { useState } from "react";
import classes from "./MealItem.module.css";
export function MealItem(props) {
  const price = props.price.toFixed(2);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(price);
  console.log(total);
  const handleIncrement = () => {
    setCount(count + 1);
    setTotal((prevState) => +prevState + props.price);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount((count)=> count -1);
       setTotal((prevState) => +prevState - props.price);
    }
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{price}</p>
        <div className={classes.content}>
          <div>
            <p className={classes.counter}>{count}</p>
            <div className={classes.container}>
              <button onClick={handleIncrement} className={classes.btnsucces}>
                +
              </button>
              <button onClick={handleDecrement} className={classes.btnfalse}>
                -
              </button>
              <div>{`total:${Number(total).toFixed(2)}`}</div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
