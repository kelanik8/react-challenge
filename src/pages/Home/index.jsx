import React from "react";
import DefaultLayout from "../../layout/default";
import SubNavbar from "../../components/General/SubNav";
import { CardContainer, Card } from "./styles";

const CardData = [
  {
    title: "Popular Series",
    sub: "SERIES",
    img: require("../../assets/placeholder.png").default,
    to: "/series",
  },
  {
    title: "Popular Movies",
    sub: "MOVIES",
    img: require("../../assets/placeholder.png").default,
    to: "/movies",
  },
];

const Home = ({ history }) => {
  return (
    <DefaultLayout>
      <SubNavbar title="Popular Titles" />
      <div className="container">
        <CardContainer>
          {CardData.map(({ title, sub, img, to }, i) => (
            <Card img={img} onClick={() => history.push(to)} key={i}>
              <div className="card-img">
                <h1>{sub}</h1>
              </div>
              <div className="card-content">{title}</div>
            </Card>
          ))}
        </CardContainer>
      </div>
    </DefaultLayout>
  );
};

export default Home;
