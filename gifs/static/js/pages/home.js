import React, { useState, useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { select, line, curveCardinal, axisBottom, scaleLinear, axisRight } from "d3";

function Home(props) {

  const keywords = window.props.keywords
	console.log(keywords)
	
  const [data, setData] =  useState([25,30,45,60,20, 65, 75, 90, 100, 120, 35, 50]);
  const svgRef = useRef();

  //will be called for every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 300]);

    //y size of svg
    const yScale = scaleLinear()
      .domain([0, 150])
      .range([150, 0]);

    //x size of svg
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

  //console.log(keyword)
  //console.log(trendData)

  const h1 = (
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

  return (
    <>
     {h1} 
    </>
  );

}

ReactDOM.render(
  <Home />,
  document.getElementById('react')
);

