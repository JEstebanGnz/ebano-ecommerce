import { Product } from '@/app/interfaces'
import React from 'react'
import { ProductGridItem } from './ProductGridItem'

interface Props {
    products: Product[]
}

export const ProductGrid = ({products}: Props) => {
  return (
     <>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-16'> {products.map((product) => 
         <ProductGridItem product={product} key={product.slug}/>)}  
         </div>
     </>
  )
}
