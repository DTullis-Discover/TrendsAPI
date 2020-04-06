import React from 'react'
import ReactDOM from 'react-dom'

function Home(props) {

  
  const trends = window.props.trends
	console.log(trends)

  const h1 = (
    <div>
      <h2>Test</h2>
    </div>
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
