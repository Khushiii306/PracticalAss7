import React from 'react';
import  ReactDOM  from 'react-dom';
import Card from './Cards';
import './index.css';
import sdata from './Sdata';

function ncard(val){
return(
  <Card imgsrc= {val.imgsrc}
  title= {val.title}
  sname = {val.sname}
  link= {val.link}
  />
);
}


ReactDOM.render(
  <>
<h1 className='heading_style'>List Of Top 5 Netflix Series</h1>
  {/* custom attribute */}



{sdata.map(ncard)}; 

 </>,

  document.getElementById("root")
);