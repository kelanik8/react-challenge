import React, { useState, useEffect } from "react";
import DefaultLayout from "../../layout/default";
import SubNavbar from "../../components/General/SubNav";
import { CardContainer, Card } from "./styles";

const Series = () => {
  const [seriesData, setSeriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchSeriesData();
  }, []);

  const fetchSeriesData = () => {
    setIsLoading(true);
    fetch("/data/data.json")
      .then((res) => res.json())
      .then(({ entries }) => {
        setIsLoading(false);
        let FilterData = [];
        entries.forEach((series) => {
          if (series.releaseYear >= 2010 && series.programType === "series") {
            FilterData.push({
              ...series,
            });
          }
        });
        FilterData.sort(function (data1, data2) {
          let title1 = data1.title.toLowerCase();
          let title2 = data2.title.toLowerCase();
          if (title1 < title2) return -1;
          if (title1 > title2) return 1;
          return 0;
        });
        FilterData = FilterData.slice(0, 21);
        setSeriesData(FilterData);
      });
  };

  return (
    <DefaultLayout>
      <SubNavbar title="Popular Series" />
      <div className="container">
        <CardContainer>
          {seriesData.map(({ title, images }, i) => (
            <Card img={images["Poster Art"].url} key={i}>
              <div className="card-img"></div>
              <div className="card-content">{title}</div>
            </Card>
          ))}
        </CardContainer>
        {isLoading && <p>Loading ...</p>}
      </div>
    </DefaultLayout>
  );
};

export default Series;
