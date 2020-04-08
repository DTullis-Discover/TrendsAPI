import React, { useRef, useEffect, useState } from "react"
import ReactDOM from "react-dom"
import { axisLeft, axisRight, curveCardinal, axisBottom, keys, extent, scalePoint, scaleLinear, select, line } from "d3";
import notData from "./../../json/dummy.json"

function About() {
	// func vars
	const svgRef = useRef()

  // Look at json and parse into vars
  let individualData = JSON.parse(notData[0]["fields"]["data"])
  let keyword = notData[0]["fields"]["keyword"]
  let realData = individualData[keyword]

  // Verify vars
  /*
  console.log(individualData)
  console.log(keyword)
  */
  console.log(realData)

  // Store test line data here
  let realDates = []
  let x
  // Loop through date parse epoch
  for(x in realData){
    console.log(realData[x])
    realDates.push(realData[x])
  }

  // Look at the date list
  console.log(realDates)

  // Set the data
  const [data, setData] =  useState(realDates);

  /* 
	let margin = {top: 30, right: 10, bottom: 10, left: 0},
		width = 800 - margin.left - margin.right,
		height = 600 - margin.top - margin.bottom;
  */

  //will be called for every data change
  useEffect(() => {
    const svg = select(svgRef.current);

    //x size of svg
    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 300]);

    //y size of svg
    const yScale = scaleLinear()
      .domain([0, 150])
      .range([150, 0]);

    //x size of svg
    /*
    const xAxis = axisBottom(xScale).ticks(data.length).tickFormat(index => index + 1);
    svg
      .select(".x-axis")
      .style("transform", "translateY(150px)")
      .call(xAxis);

    const yAxis = axisRight(yScale);
    svg
      .select(".y-axis")
      .style("transform", "translateX(300px)")
      .call(yAxis);
    */
    
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
      .attr("stroke", "blue");

  }, [data]);

	return (
    <React.Fragment>
      <svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
      <br />
      <br />
      <br />
      <button onClick={() => setData(data.map(value => value + 5))}>
        Update data
      </button>
      <button onClick={() => setData(data.filter(value => value  <= 35))}>
        Filter data
      </button>
    </React.Fragment>
	);

}


ReactDOM.render(
	<About/>,
	document.getElementById("react")
)
