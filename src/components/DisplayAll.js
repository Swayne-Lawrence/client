import React,{useEffect,useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const DisplayAll= (props)=>{
    const [productList,setProductList]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/")
        .then((res)=>{
            console.log(res.data);
            setProductList(res.data);
        }).catch((err)=>console.log(err));
    },[]);

    return(
        <div>
            <h1>All Products</h1>
            {
                productList.map((product,index)=>{
                    return(
                        <div>
                            <Link to={`/products/${product._id}`}>{product.product}</Link>
                        </div>

                    );
                })
            }
        </div>
    );
}
export default DisplayAll;