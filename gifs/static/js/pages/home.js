import React from 'react'
import ReactDOM from 'react-dom'

function Home(props) {

  const keyword = window.props.keyword
  const trendData = window.props.trendData

  console.log(keyword)
  console.log(trendData)

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
