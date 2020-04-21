import React from 'react';
import Product from './Product';
import Location from './Location';
import availableProduce from './SeasonalProduce';
import marketSchedule from './MarketSchedule';

function Results(props) {

  // Get current seasonal produce    
  let produce = null;
  let productObj = availableProduce.filter(productObj => productObj.month === props.month);
  produce = productObj[0].selection.map((product, index) => (
    <Product name={product} key={index} />
  ));

  // Get location by month
  let currentLocation = null;
  let locationObj = marketSchedule.filter(locationObj => locationObj.day === props.weekday);
  currentLocation = locationObj[0];

  return (
    <React.Fragment>
      <h3>Market: {currentLocation.location}</h3>
      <p>Hours: {currentLocation.hours}</p>
      <p>Booth: {currentLocation.booth}</p>
      {produce}
    </React.Fragment>
  )
}

export default Results;