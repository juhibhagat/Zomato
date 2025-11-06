import { useEffect, useState } from "react";
import axios from "axios";

export function AjaxDemo(){

    const [product, setProduct] = useState({title:'', price:0, rating:{rate:0, ratings:0, reviews:0}, image:'', offers:[]});

    function GetProduct(){

        axios.get('product.json')
        .then(response=> {
            setProduct(response.data);
        })
       

    }

    useEffect(()=>{
        GetProduct();
    },[])


    return(
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-3">
                    <img src={product.image} width='100%' />
                </div>
                <div className="col-9">
                    <div className="fs-4 fw-bold">{product.title}</div>
                    <div className="mt-2">
                        <span className="badge bg-success text-white rounded">{product.rating.rate} <span className="bi bi-star-fill"></span> </span>
                        <span className="mx-2 text-secondary fs-6 fw-bold">{product.rating.ratings.toLocaleString()} ratings & {product.rating.reviews} reviews</span>
                    </div>
                    <div className="mt-4">
                        <div className="fs-1 fw-bold">&#8377; {product.price.toLocaleString('en-in')}</div>
                    </div>
                    <div className="mt-3">
                        <ul className="list-unstyled">
                            {
                                product.offers.map((offer,i)=><li className="bi bi-tag-fill text-success my-2" key={i}> <span className="text-secondary">{offer}</span></li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}