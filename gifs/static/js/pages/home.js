import React, { useRef, useEffect } from "react"
import ReactDOM from "react-dom"
import { axisLeft, keys, extent, scalePoint, scaleLinear, select, line } from "d3";

function Home() {
	// func vars
	const svgRef = useRef()
  const trends = window.props.trends
	console.log(trends)

  var data = JSON.parse(window.props.trends[0]["fields"]["data"])
  var keyword = window.props.trends[0]["fields"]["keyword"]
  var realData = data[keyword]

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


	}, [data,]);

	return (
		<div className="d3-svg-container">
			<svg className="d3-svg" ref={svgRef} ></svg>
		</div>
	);

} 

ReactDOM.render(
	<Home/>,
	document.getElementById("react")
);
