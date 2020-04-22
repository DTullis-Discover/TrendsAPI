import React, { useState, useRef, useEffect, setState } from 'react'
import ReactDOM from 'react-dom'
import { select, line, curveCardinal, axisBottom, scaleLinear, axisRight } from "d3";
import notData from "./../../json/dummy.json"

var incr = 1;


function processedData(theData) {
  let processedData = []
  let x
  let y
  for( x in theData ) {
    let singleKey = theData[x]["fields"]["keyword"]
    let singleData = JSON.parse(theData[x]["fields"]["data"])[singleKey]
    let singleDate = theData[x]["fields"]["date"] 
    let singleLine = [] 

    // Loop through date parse epoch
    for(y in singleData){
      singleLine.push(singleData[y])
    }

    let singleObj = {
      "keyword": singleKey,
      "date": singleDate,
      "data": singleData,
      "line": singleLine
    }
    processedData.push(singleObj)
  }
  return processedData
}

function About() {

  const svgRef = useRef();



  //set data
  let realDates = processedData(notData)
  console.log(realDates)
  let why = new Array()
 
  var z
 
  for (z = 0; z < 180; z++)
  {
    why.push(realDates[0]["line"][z])
  }

  //console.log(why1);
  console.log(incr);

  let keys = new Array()
  var k 
  for(k = 0; k < 220; k++){
    keys.push(realDates[k]["keyword"])
  }

  console.log(keys);

  function increment(){
    if(incr<180)
      setData(realDates[incr++]["line"]);
  }
  function decrement(){
    if(incr>1)
      setData(realDates[incr--]["line"]);
  }

  function keyDisplay(){
    return keys[incr];
  }
  

  const [data, setData] =  useState(why);
  

  //will be called for every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    

    svg
      .attr("preserveAspectRatio", "xMaxYMid meet")
      .attr("width", 1200)
      .attr("height", 558)
      .attr("viewBox", "0 0 " + 300 + " 151");
      
      //.attr("viewBox", "0 0 " + 400 + " 20");
    
   /* const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 50]);

    //y size of svg
    const yScale = scaleLinear()
      .domain([0, 125])
      .range([20, 0]);*/

    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 300]);

    //y size of svg
    const yScale = scaleLinear()
      .domain([0, 110])
      .range([150, 0]);
    
    


      const yAxis = axisRight(yScale);
      svg
        .select(".y-axis")
        .style("transform", "translateX(300px)")
        .call(yAxis);


    //x size of svg
    
    // generates the "d" attribute of a path element
    const myLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);

    
    
      //render path element, and attaches the "d" attribute from line generator above
    
    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("class", "line")
      .attr("d", myLine)
      .attr("fill", "none")
      .attr("stroke", "green");

      
      

  }, [data]);

  const trend = (
    <div className="container">
      <div className="row pt-3 pb-2">
        <div className="col">
          <h1>{keyDisplay()}</h1>
        </div>
      </div>
      <div className="row"> 
        <div className="col">
          <svg ref={svgRef}>
          <g className="x-axis" />
          <g className="y-axis" />
          </svg>
        </div>
      </div>
      <div className="row pt-4 pb-2">
        <div className="col">
          <button className="btn btn-primary btn-lg" onClick={() => increment()}>See Another Trend</button>
        </div>
      </div>
    </div>
  );
  

  return (
    <>
     {trend} 
    </>
  );

}

ReactDOM.render(
  <About />,
  document.getElementById('react')
);
