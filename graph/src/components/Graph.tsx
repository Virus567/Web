import React from 'react';
import * as d3 from 'd3';

function funcMath(){
  let funcArray : number[] = [];
  let y : number;
  for(let x = 0 ; x < 2.5; x += 0.1){
    y = 3 * (x ** 3) - 2 ** (Math.E ** (x ** 3 - 2 * (x ** 2) - 1)) + (Math.log(x)/Math.log(13));
    funcArray.push(y);
  }   
  return funcArray;  
}

function Graph() {
    let data = [];
    let yArr  = funcMath();
    for(let i = 0; i < yArr.length; i += 0.1){
      data.push({y : yArr[i*10], x : i });
    }   

    return (
      <div> 
      <svg width={600} height={300}>
      </svg>
      </div>
    );
  }
  
  export default Graph;