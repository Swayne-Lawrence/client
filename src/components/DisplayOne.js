import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";

const DisplayOne=(props)=>{

    const [product,setProduct]=useState({});
    const {id} =useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            console.log(res.data);
            setProduct(res.data);
        }).catch((err)=>console.log(err))
    },[id])

    return(
        <div>
            <h1>{product.product}</h1>
            <p>{product.price}</p>
            <p>{product.description} </p>
        </div>
    );
}
export default DisplayOne;