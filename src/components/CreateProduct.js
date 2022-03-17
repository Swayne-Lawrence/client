import React,{useState, useEffect} from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";

const CreateProduct= (props)=>{
    const [product,setProduct]=useState("");
    const [price,setPrice]=useState(0);
    const [description,setDescription]=useState("");

const navigate=useNavigate();
const submithandeler=(e)=>{
    e.preventDefault();

    axios.post("http://localhost:8000/api/products",{product,price,description})
    .then((res)=>{
        console.log(res.data)
        navigate("/");

    }).catch((err)=>console.log(err));
}

    return(
        <div>
            <h1>Create a Product</h1>
            <form onSubmit={submithandeler}>
                <div>
                    <label>Product:</label>
                    <input value={product} type="text" onChange={(e)=>setProduct(e.target.value)}/>
                </div>
                <div>
                    <label>Price:</label>
                    <input value={price} type="number" onChange={(e)=>setPrice(e.target.value)}/>
                </div>
                <div>
                    <label>description</label>
                    <textarea value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default CreateProduct;