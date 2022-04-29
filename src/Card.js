// import image1 from "./birthday1.jpeg";
// import image2 from "../../dogs.webp";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={!props.load ? classes.div : classes.pix}>
      {props.children}
    </div>
  );
};

export default Card;
