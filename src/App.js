import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [loding, setLoding] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] = useState([]);


  useEffect(()=>{
    fetchData({page});
  },[page])

  const fetchData = ({page})=>{
    setLoding(true);
    axios({
      method: 'get',
      url: "https://json-server-mocker-masai.herokuapp.com/candidates",
      params:{
        _page:page,
        _limit:5
      }
    })
    .then(res=>{
      setData(res.data);
    
      setLoding(false)
    })
    .catch(err=>{
      setError(true);
      setLoding(false)
    })
  }
 const sort=()=>{
  setData( data.sort((a,b)=>a.salary-b.salary))
  console.log(data,"asd");
 }
const pagee=(e)=>{
  if(page==0){
    setPage(1)
    }else{
      setPage((page)=>page+e)
    }

}
  return (
    <div className="App">
      <div>
        {loding?<div id="loading-container">...Loading</div>:null}
        <Button id="SORT_BUTTON" title={`Sort by Ascending Salary`}  onClic={()=>sort()} />
        <Button title="PREV" id="PREV" onClic={()=>pagee(-1)}  />
        <Button id="NEXT" title="NEXT" onClic={()=>pagee(1)}/>
      </div>
      {data.map((item) => <CandidateCard key={item.id} item={item}/> )}
    </div>
  );
}
