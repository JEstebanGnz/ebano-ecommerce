import { Type } from "@/app/interfaces";
import { PageTitle } from "@/components";
import { ProductGrid } from "@/components/products/product-grid/ProductGrid";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation"

interface Props {
    params: Promise<{
        id: Type 
    }>
}

export default async function Page({ params }: Props) {

    const { id } = await params;

    const products = initialData.products.filter((product) => product.type === id);

    const labels: Record<Type, string> = {
        'artisanal_chocolate': 'Chocolate Artesanal',
        'amazonian_snacks': 'Frutos de amazónicos'
    }


    // if (id === 'services') {
    //     notFound();
    // }

    return (
        <>
            <PageTitle title={`Productos de ${labels[id]}`} subtitle="Hechos con mucho amor" />
            <ProductGrid products={products} />
        </>
    )
}