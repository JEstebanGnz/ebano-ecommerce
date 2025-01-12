import { PageTitle } from "@/components";
import { ProductGrid } from "@/components/products/product-grid/ProductGrid";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation"

interface Props {
    params: {
        id: string
    }
}



export default function Page({ params }: Props) {

    const { id } = params;

    const products = initialData.products.filter((product) => product.type === id);

    // if (id === 'services') {
    //     notFound();
    // }



    return (

        <>

            <PageTitle title={`${id}`} subtitle="Hechos con mucho amor"/> 

            <ProductGrid products={products}/>

        </>


    )
}