import { PageTitle } from "@/components"
import { ProductGrid } from "@/components/products/product-grid/ProductGrid"
import { initialData } from "@/seed/seed"

export default function () {

    const products = initialData.products

    return (
        <>
            <PageTitle title="Todos los productos" subtitle= "Hechos con mucho amor"/>
            <ProductGrid products={products}
            />
        </>
    )
}