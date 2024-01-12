
import { Metadata } from "next"
import { title } from "process";

type Props = {
    params : {
        productsId: string;
    }
}


export const generateMetadata = async ({params} : Props) : Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`Iphone ${params.productsId}`)
        }, 100)
    })

    return {
        title: `Product ${title}`,
    };
};

export default function ProductDetails ({
    params,
} : {
    params: {productsId : string}
}){
    return(
        <h1>Details about product {params.productsId}</h1>
    )
}

