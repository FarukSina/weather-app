// import dayjs from "dayjs";
// import React, { useEffect, useState } from "react";
// function Home() {
//   const [selectedCity, setSelectedCity] = useState("Toronto");
//   const [data, setData] = useState([]);
//   const cities = ["Toronto", "Istanbul", "Tokyo"];
//   useEffect(() => {
//     const asynFunction = async () => {
//       const data = await fetch(
//         `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${selectedCity}&days=5&aqi=no&alerts=no`,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             "Access-Control-Allow-Origin": "*",
//           },
//         }
//       );
//       const result = await data.json();
//       if (result) {
//         setData(result?.forecast?.forecastday);
//       }
//       return result;
//     };
//     asynFunction();
//   }, [selectedCity]);

//   console.log("data", data);
//   const renderCities = () => {
//     return cities.map((city, index) => {
//       return (
//         <span
//           className={selectedCity === city ? "city" + " " + "selected" : "city"}
//           onClick={() => setSelectedCity(city)}
//         >
//           {city.toUpperCase()}
//         </span>
//       );
//     });
//   };
//   const renderItems = () => {
//     if (!data) {
//       return <div>Data not found</div>;
//     }
//     return data.map((item, index) => {
//       if (index === 0) {
//         return (
//           <div key={index} className="mainItem">
//             <div>
//               <div className="date">
//                 {dayjs(item.date).format("dddd") ===
//                 dayjs(new Date()).format("dddd")
//                   ? "Today"
//                   : dayjs(item.date).format("dddd")}
//               </div>
//               <div className="wrapper">
//                 <img className="weather2" src={item.day?.condition?.icon} />
//                 <div>
//                   <div className={"temp_min " + "textAlignLeft"}>
//                     {Math.round(item.day?.avgtemp_c)}º
//                   </div>
//                   <div className="weather">{item.day?.condition?.text}</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       }
//       return (
//         <div key={index} className={`item${index}` + " " + "itemWidth"}>
//           <div className="dateColor">
//             {dayjs(item.date).format("dddd").slice(0, 3)}
//           </div>
//           <div>
//             <img className="weather2" src={item.day?.condition?.icon} />
//             <div className="temp_min">{Math.round(item.day?.avgtemp_c)}º</div>
//           </div>
//         </div>
//       );
//     });
//   };

//   console.log("data", data);

//   if (!data) {
//     <div>Loading...</div>;
//   }

//   return (
//     <div className="container">
//       <div className="header">
//         <div className="selectCities">{renderCities()}</div>
//       </div>
//       <div className="wrapper">{renderItems()}</div>
//     </div>
//   );
// }

// export default Home;
