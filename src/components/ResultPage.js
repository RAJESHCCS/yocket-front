import React, { useEffect,useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ResultPage.css'; 
 
const ResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { result } = location.state;
  let [resData,setresData]=useState()
  useEffect(()=>{
   fetch('http://localhost:3000/result', {
      // method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      
      // body: JSON.stringify({ vehicles: { cop1: selectedVehicleCop1, cop2: selectedVehicleCop2 } }),
    })
    .then(response => {
      // console.log("response.json()",response.json())
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }).then(data=>{
      console.log("data in fetch l24",data)
      setresData(data)
    })
    
  } ,[])
  // capturingCop
  // : 
  // {copName: 'Cop2', cityName: 'Yapkashnagar', vehicleName: 'EV Car'}
  // success
  // : 
  // true
  // [[Prototype]]
  // : 
  // Object
  
  return (
    <div className="result-page-container">
    <h2 className="result-page-title">Result</h2>
    {result.success ? (
      <div>
        <p className="result-text">Captured by: {resData?.capturingCop?.copName}</p>
        <p className="result-text">City: {resData?.capturingCop?.cityName}</p>
        <p className="result-text">Vehicle: {resData?.capturingCop?.vehicleName}</p>
      </div>
    ) : (
      <p className="result-text">Fugitive escaped!</p>
    )}
    <button onClick={() => navigate('/')} className="result-page-button">
      Restart
    </button>
  </div>
 
  );
};
 
export default ResultPage;
 
 
//i had thought logice for finding the capturingCop another way also
// const ResultPage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { result } = location.state;
 
// Function to determine which cop catches the fugitive based on distances
//   const determineCapturingCop = (fugitiveDistance, copDistances) => {
//     let minDistance = Infinity;
//     let capturingCop = '';
 
//     // Iterate through cop distances to find the closest one to the fugitive
//     for (const [copName, copDistance] of Object.entries(copDistances)) {
//       const distanceDifference = Math.abs(fugitiveDistance - copDistance);
//       if (distanceDifference < minDistance) {
//         minDistance = distanceDifference;
//         capturingCop = copName;
//       }
//     }
 
//     return capturingCop;
//   };
 
//   // Determine capturing cop
//   const capturingCop = determineCapturingCop(result.fugitiveDistance, result.copDistances);
 
//   // Determine if the fugitive was captured
//   const isCaptured = capturingCop !== '';
 
//   return (
//     <div className="result-page-container">
//       <h2 className="result-page-title">Simulation Result</h2>
 
//       {isCaptured ? (
//         <p className="result-text">Fugitive captured by {capturingCop}!</p>
//       ) : (
//         <p className="result-text">Fugitive escaped!</p>
//       )}
//       <button onClick={() => navigate('/SimulationComponent')} className="result-page-button">Restart</button>
//     </div>
//   );
// };
 
// export default ResultPage;