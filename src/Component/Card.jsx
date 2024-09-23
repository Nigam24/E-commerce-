import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";
const Card = ({ product, handleClick }) => {
  const navigate = useNavigate();
  const click = () => {
    handleClick(product._id);
  };
  return (
    <div className={styles.Shirtt} onClick={click}>
      <img
        className={styles.imggg}
        src={`data:${product.image.fileType};base64,${product.image.fileContent}`}
        alt="T-shirt with Tape Details"
      />
      <div id="info" className={styles.info}>
        <p className="p8">{product.title}</p>
        <p id="ratii">{product.rating}</p>
        <p id="product">${product.price}</p>
      </div>
    </div>
  );
};

export default Card;
