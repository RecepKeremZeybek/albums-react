import React from "react";
import Picture from "../components/Picture";
import "../components/Picture.css"



const Homepage = () => {
// console.log(data)
  return (
    <div className="container">
      <h1 className="text-center text-success mt-4 mb-4">Albums</h1>

{/* {data.map((props,id)=>{
    return(
        <Col>
        <Picture  key={id}/>
        </Col>
    )
})} */}

{/* {data.map((props,id)=> <Picture {...props} key={id}/>)} */}

<Picture/>
      
    </div>
  );
};

export default Homepage;
