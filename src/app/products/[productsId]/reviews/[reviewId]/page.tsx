import { notFound } from "next/navigation";

export default function ReviewDatail ({
    params,
} : {
    params : {
        reviewId : string;
        productsId : string;
        
    }
}){

    if (parseInt(params.reviewId) > 1000){
        notFound();
    }
    return(
        <h1>Review {params.reviewId} for product {params.productsId}</h1>
    )
}