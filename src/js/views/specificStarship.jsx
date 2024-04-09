import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export function SpecificStarship() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [starshipData, setStarshipData] = useState({});

  const fetchThisStarship = async (id) => {
    const response = await fetch(`https://www.swapi.tech/api/starships/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not okay");
        }
        return response.json();
      })
      .catch((err) => {
        console.error(err);
      });
    console.log(response.result.properties);
    setStarshipData(response.result.properties);
    return response.result.properties;
  };

  useEffect(() => {
    fetchThisStarship(id);
  }, []);

  return (
    <div className="container-fluid mt-5 pt-5">
      <div className="d-flex justify-content-center">
        <img
          src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
          style={{ borderRadius: "20px" }}
        ></img>
        <div className="information-group">
          <ul style={{ listStyleType: "none" }}>
            <li className="text-white" style={{ fontSize: "50px" }}>
              {starshipData.name}
            </li>
            <li className="text-white" style={{ fontSize: "30px" }}>
              Class: {starshipData.starship_class}
            </li>
            <li className="text-white" style={{ fontSize: "30px" }}>
              Cost in Credits: {starshipData.cost_in_credits}
            </li>
            <li className="text-white" style={{ fontSize: "30px" }}>
              Manufacturer: {starshipData.manufacturer}
            </li>
            <li className="text-white" style={{ fontSize: "30px" }}>
              Cargo Capacity: {starshipData.cargo_capacity}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// {
//     "message": "ok",
//     "result": {
//         "properties": {
//             "model": "CR90 corvette",
//             "starship_class": "corvette",
//             "manufacturer": "Corellian Engineering Corporation",
//             "cost_in_credits": "3500000",
//             "length": "150",
//             "crew": "30-165",
//             "passengers": "600",
//             "max_atmosphering_speed": "950",
//             "hyperdrive_rating": "2.0",
//             "MGLT": "60",
//             "cargo_capacity": "3000000",
//             "consumables": "1 year",
//             "pilots": [],
//             "created": "2020-09-17T17:55:06.604Z",
//             "edited": "2020-09-17T17:55:06.604Z",
//             "name": "CR90 corvette",
//             "url": "https://www.swapi.tech/api/starships/2"
//         },
//         "description": "A Starship",
//         "_id": "5f63a34fee9fd7000499be1e",
//         "uid": "2",
//         "__v": 0
//     }
// }
