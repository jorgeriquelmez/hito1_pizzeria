
const cardStyle = {
  width: "30%" 
};

const verMasText = "Ver Más 👀";
const anadirText = "Añadir 🛒";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card" style={cardStyle}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-center" style={{ fontSize: '1.2rem' }}>Ingredientes:</li> 
        <li className="list-group-item" style={{ fontSize: '0.9rem' }}>🍕 {ingredients.join(", ")}</li>
        <li className="list-group-item text-center" style={{ fontSize: '1.5rem' }}><strong>Precio: ${price}</strong></li> 
      </ul>
      <div className="card-body d-flex justify-content-between align-items-center">
        <a href="#" className="btn btn-light border-dark">{verMasText}</a> 
        <a href="#" className="btn btn-dark">{anadirText}</a> 
      </div>
    </div>
  );
};

export default CardPizza;