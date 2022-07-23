import "./Card.css";

const Card = ({ menuData }) => {
  return (
    <div className="Card-Container">
      {menuData.map((value) => {
        const { id, category, item, description, image, price } = value;
        return (
          <div className="Card" key={id}>
            <span className="Category">{category}</span>
            <h1>{item}</h1>
            <p>{description}</p>
            <img src={image} alt={image} />
            <span className="Price">&#8377;{price}/-</span>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
