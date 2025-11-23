import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />

      <div className="container my-5">
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-4">
            <Card
              image="https://images.unsplash.com/photo-1668737422841-1d01553260da?q=80&w=870&auto=format&fit=crop"
              title="Card title"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
            />
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <Card
              image="https://images.unsplash.com/photo-1758661539999-2c0708ace863?q=80&w=687&auto=format&fit=crop"
              title="Card title"
              text="Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
            />
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <Card
              image="https://images.unsplash.com/photo-1569440703587-144c30a968dd?q=80&w=687&auto=format&fit=crop"
              title="Card title"
              text="Sapiente esse necessitatibus neque sequi consequatur."
            />
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <Card
              image="https://plus.unsplash.com/premium_photo-1747857953448-1e815a6d85cf?q=80&w=687&auto=format&fit=crop"
              title="Card title"
              text="Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
