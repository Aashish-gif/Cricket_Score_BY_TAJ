// import React, { useState, useEffect } from 'react';
// import './cricket.css';

// const Cricketscore = () => {
//   const [data, setData] = useState([]);
//   const [inputData, setInputData] = useState('');
//   const [search, setSearch] = useState('');

//   const getData = async () => {
//     try {
//       const response = await fetch("https://api.cricapi.com/v1/cricScore?apikey=0aa9be3d-64a6-41b8-9cd1-1da639057663");
//       const result = await response.json();
//       console.log(result);
//       setData(result.data);  // Assuming 'data' is the key in the API response containing the scores
//     } catch (err) {
//       console.log('Error fetching data:', err);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const handleInput = (e) => {
//     setInputData(e.target.value);
//   };

//   const handleButton = () => {
//     setSearch(inputData);
//   };

//   return (
//     <div className="main-container">
//       <div className="search">
//         <input
//           type="text"
//           placeholder="Search Match, Series, or Teams"
//           value={inputData}
//           onChange={handleInput}
//         />
//         <button onClick={handleButton}>Search</button>
//       </div>
//       <div className="heading">
//         <p>Live Cricket Score App</p>
//       </div>

//       <div className="container">
//         {data && data.length > 0 ? (
//           data.map((curValue) => {
//             // Check if the search term matches the series or teams (t1 or t2)
//             const seriesMatch = curValue.series.toLowerCase().includes(search.toLowerCase());
//             const team1Match = curValue.t1.toLowerCase().includes(search.toLowerCase());
//             const team2Match = curValue.t2.toLowerCase().includes(search.toLowerCase());

//             if (curValue.status !== 'Match not started' && (seriesMatch || team1Match || team2Match)) {
//               return (
//                 <div className="card" key={curValue.id}>
//                   <h3>{curValue.series}</h3>
//                   <h3>{curValue.matchType}</h3>
//                   <div className="img">
//                     <div>
//                       <img src={curValue.t1img} alt={curValue.t1} />
//                       <p>{curValue.t1}</p>
//                       <p>{curValue.t1s}</p>
//                     </div>
//                     <div>
//                       <img src={curValue.t2img} alt={curValue.t2} />
//                       <p>{curValue.t2}</p>
//                       <p>{curValue.t2s}</p>
//                     </div>
//                   </div>
//                   <p className="status">Status: {curValue.status}</p>
//                 </div>
//               );
//             }
//             return null;
//           })
//         ) : (
//           <p>No matches found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cricketscore;


import React, { useState, useEffect } from 'react';
import './cricket.css';

const Cricketscore = () => {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState('');
  const [search, setSearch] = useState('');

  const getData = async () => {
    try {
      const response = await fetch("https://api.cricapi.com/v1/cricScore?apikey=0aa9be3d-64a6-41b8-9cd1-1da639057663");
      const result = await response.json();
      console.log(result);
      setData(result.data);  // Assuming 'data' is the key in the API response containing the scores
    } catch (err) {
      console.log('Error fetching data:', err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    setInputData(e.target.value);
  };

  const handleButton = () => {
    setSearch(inputData);
  };

  return (
    <div className="main-container">
      <div className="search">
        <input
          type="text"
          placeholder="Search Match, Series, or Teams"
          value={inputData}
          onChange={handleInput}
        />
        <button onClick={handleButton}>Search</button>
      </div>
      <div className="heading">
        <p>Live Cricket Score App</p>
      </div>

      <div className="container">
        {data && data.length > 0 ? (
          data.map((curValue) => {
            // Check if the search term matches the series or teams (t1 or t2)
            const seriesMatch = curValue.series.toLowerCase().includes(search.toLowerCase());
            const team1Match = curValue.t1.toLowerCase().includes(search.toLowerCase());
            const team2Match = curValue.t2.toLowerCase().includes(search.toLowerCase());

            if (curValue.status !== 'Match not started' && (seriesMatch || team1Match || team2Match)) {
              return (
                <div className="card" key={curValue.id}>
                  <h3>{curValue.series}</h3>
                  <h3>{curValue.matchType}</h3>
                  <div className="img">
                    <div>
                      <img src={curValue.t1img} alt={curValue.t1} />
                      <p>{curValue.t1}</p>
                      <p>{curValue.t1s}</p>
                    </div>
                    <div>
                      <img src={curValue.t2img} alt={curValue.t2} />
                      <p>{curValue.t2}</p>
                      <p>{curValue.t2s}</p>
                    </div>
                  </div>
                  <p className="status">Status: {curValue.status}</p>
                </div>
              );
            }
            return null;
          })
        ) : (
          <p>No matches found</p>
        )}
      </div>
    </div>
  );
};

export default Cricketscore;
