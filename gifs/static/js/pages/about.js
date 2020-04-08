import React, { useRef, useEffect } from "react"
import ReactDOM from "react-dom"
import { axisLeft, keys, extent, scalePoint, scaleLinear, select, line } from "d3";
import data from "./../../json/dummy.json"

function About() {
	// func vars
	const svgRef = useRef()

  var individualData = JSON.parse(data[0]["fields"]["data"])
  var keyword = data[0]["fields"]["keyword"]
  var realData = individualData[keyword]

  console.log(individualData)
  console.log(keyword)
  console.log(realData)

	let margin = {top: 30, right: 10, bottom: 10, left: 0},
		width = 800 - margin.left - margin.right,
		height = 600 - margin.top - margin.bottom;

	// on data update do thing
	useEffect(() => {

		// connect to dom
		const svg = select(svgRef.current)
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
		.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    const myLine = line()
      .x((value, index) => index * 50)
      .y(value => value)


		// Draw the lines
		svg
			.selectAll("myPath")
			.data(data)
      .join("path")
			.attr("d",  value => myLine(JSON.parse(value.fields.data)))
			.style("fill", "none")
			.style("stroke", "turquoise")
			.style("opacity", 0.5);

	}, [data,]);

	return (
		<div className="d3-svg-container">
			<svg className="d3-svg" ref={svgRef} ></svg>
		</div>
	);

} 

ReactDOM.render(
	<About/>,
	document.getElementById("react")
);
