import React from "react";
import Directory from "../../components/directory/directory-component";
import "./home-style.sass";
import HeaderComponent from "../../components/Header/Header-component";

const Home = () => {
  const categories = [
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      route: "shop/jackets",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      route: "shop/sneakers",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      route: "shop/womens",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      route: "shop/mens",
    },
  ];
  return (
    <>
      <HeaderComponent />
      <div className="categories-container">
        {categories.map(data => (
          <Directory key={data.id} categories={data} />
        ))}
      </div>
    </>
  );
};

export default Home;
