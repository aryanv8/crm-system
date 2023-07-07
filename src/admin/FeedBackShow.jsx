import React,{ useState,useEffect } from 'react';
import "../styles/FeedBackDesign.css"
import { useParams,useLocation} from "react-router-dom";
import Axios from "axios";

function FeedBackShow() {

const location=useLocation();
  const [resData,setResData] = useState([]);
  const[rec,setRec]=useState([]);
  useEffect(() => {
      //backend Axios using
      setRec(location.state.name);
      setSearch(location.state.name)

      Axios.get("http://127.0.0.1:4000/admin/feedback/all")
      .then((res)=>{
        if(res.status === 200){
          setResData(res.data);
        }
        else{
          Promise.reject();
        }
      })
      .catch((err)=>alert(err));
    }, [])
    const [search, setSearch] = useState("");
  
  
  
  return (
    <div className='container-fluid mb-4'>
      <h2 className='mt-3 mb-4 text-center text-white'>Products Feedback</h2>
      
      <div className="d-flex float-end mb-4">
        <label for="search">Search here:</label>
        <input className="me-2 form-control" type="search" placeholder="Search..." aria-label="Search" id='search' onChange={(e) => setSearch(e.target.value)}/>
      </div>
      
      <div className="col-sm-5 col-md-6 col-12 pt-5 mx-auto" >
      {resData.filter((item)=>{
        
            if(search == ""){
              return item
            }
            else if(item.productid.includes(search)){
              return item
            }
            else if(item.productname.toLowerCase().includes(search.toLowerCase())){
              return item
            }
            else if(item.username.toLowerCase().includes(search.toLowerCase())){
              return item
            }
          }).map((data)=>(
                <div>
            <div style={{borderRadius:"30px"}} className="text-justify darkerfeed mt-4 nth">
                    <h4 id="pn" style={{textAlign:"left"}}>{data.username}</h4>
                    <div class="row">
                    <p class="col-md-6 col-sm-12">Product id:{data.productid}</p>
                    <p class="col-md-6 col-sm-12">Product Name:{data.productname}</p>
                    </div>
                    <div class="row">
                    <p class="col-md-3 col-sm-12">value of money:{data.value_for_money}</p>
                    <p class="col-md-3 col-sm-12">easy of use:{data.ease_of_use}</p>
                    <p class="col-md-3 col-sm-12">experience:{data.experience}</p>
                    <p class="col-md-3 col-sm-12">durability:{data.durability}</p>
                    </div>
                    <p>Over all Rating: {data.overall_rating}</p>
                    <p>{data.suggestions_or_compaints}</p>
                    <p style={{textAlign:"right"}}>{data.timestamp}</p>
                </div><br /></div>

            ))}</div>
            
    </div>
  )
}

export default FeedBackShow;