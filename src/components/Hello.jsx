import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css"

const Hello = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `https://gnews.io/api/v4/search?q=windows&apikey=85a6c100f135aeb4cb7d83219c5d6cc1`
      );
      console.log(response.data.articles);
      setData(response.data.articles);
    };
    fetchMovies();
  }, []);

  const dataArray = Object.values(data);
  return (
    // <div>
    //   {dataArray.map((element) => (
    //     <div>
    //       <h1>{element.title}</h1>
    //       <h1>{element.content}</h1>
    //       <img src={element.image} alt="" />
    //       <img src={element.url} alt="" />
    //     </div>
    //   ))}
    // </div>

    <div className="card-container">
      {dataArray.map((element, index) => (
        <div className="card" key={index}>
          <h1 className="card-title">{element.title}</h1>
          <p className="card-content">{element.content}</p>
          <img className="card-image" src={element.image} alt="Card image" />
          <a href={element.url} target="_blank" rel="noopener noreferrer">
            <img
              className="card-url-image"
              src={element.url}
              alt="Link image"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Hello;
