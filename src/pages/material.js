import React from "react";
import { useState, useEffect } from "react";
import { SpinnerCircularFixed, SpinnerRoundOutlined } from "spinners-react";
import "./material.css";
import axios from "axios";

const Material = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const [data, setData] = useState({
    data:[]
  });
  console.log(data)

  useEffect(() => {
    const getAllData = () => {
      axios
        .get("https://corona-api.com/countries")
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getAllData();
  }, []);
  // const countryname = () => {
  //   const dataArr = data.data;
  //   return data ? (
  //     dataArr.map((country) => {
  //       return (
  //         <div>
  //           <div className="data" key={country.id}>
  //             <h3>{country.name}</h3>
  //           </div>
  //         </div>
  //       );
  //     })
  //   ) : (
  //     <h3>No data yet</h3>
  //   );
  // };

  // const countrypopulation = () => {
  //   const dataArr = data.data;
  //   return data ? (
  //     dataArr.map((country) => {
  //       return (
  //         <div>
  //           <h4>{country.population}</h4>
  //         </div>
  //       );
  //     })
  //   ) : (
  //     <h3>No data yet</h3>
  //   );
  // };
  // const countryconfirmed = () => {
  //   const dataArr = data.data;
  //   console.log(dataArr);
  //   return data ? (
  //     dataArr.map((country) => {
  //       return (
  //         <div>
  //           <h5>{country.latest_data.confirmed}</h5>
  //         </div>
  //       );
  //     })
  //   ) : (
  //     <h3>No data yet</h3>
  //   );
  // };
  // const countryrecovered = () => {
  //   const dataArr = data.data;
  //   return data ? (
  //     dataArr.map((country) => {
  //       return (
  //         <div>
  //           <h6>{country.latest_data.recovered}</h6>
  //         </div>
  //       );
  //     })
  //   ) : (
  //     <h3>No data yet</h3>
  //   );
  // };
  // const countryDeaths = () => {
  //   const dataArr = data.data;
  //   return data ? (
  //     dataArr.map((country) => {
  //       return (
  //         <div>
  //           <h6>{country.latest_data.deaths}</h6>
  //         </div>
  //       );
  //     })
  //   ) : (
  //     <h3>No data yet</h3>
  //   );
  // };

  // // */actions*/
  // const addList = () => {
  //             return data.push ({

  //       })

  return (
    <div>
      {loading ? (
        <SpinnerRoundOutlined
          size={100}
          color={"#123abc"}
          position={SpinnerCircularFixed}
          top={50}
          left={50}
          background-size={100}
          loading={loading}
        />
      ) : (
        <div>
          <>
            <table>
              <thead>
                <tr>
                  <th>country</th>
                  <th>population</th>
                  <th>confirmed</th>
                  <th>recovered</th>
                  <th>deaths</th>
                </tr>
              </thead>
              <tbody>
                {data?.data.map((country) => {
                  console.log(country)
                  const {
                    name,
                    population,
                    latest_data: { confirmed, recovered, deaths },
                  } = country;
                  return (
                    <tr>
                      <td>{name}</td>
                      <td>{population}</td>
                      <td>{confirmed}</td>
                      <td>{recovered}</td>
                      <td>{deaths}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        </div>
      )}
    </div>
  );
};
export default Material;
