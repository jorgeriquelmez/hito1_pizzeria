// import Header from "./component/Header"
import './Home.css'
import CardPizza from "./CardPizza";
import Header from "./Header";
import {pizzas} from '../../data/pizzas.js'

const Home = () => {
  return (
    <>
    <Header/>
    <div className="pizzas">
      {pizzas.map((pizza) => (
        <CardPizza
          key={pizza.id}
          name={pizza.name}
          price={pizza.price}
          ingredients={pizza.ingredients}
          img={pizza.img}
          description={pizza.desc}
          />
       )) }
    </div>
    </>
  );
};

export default Home;