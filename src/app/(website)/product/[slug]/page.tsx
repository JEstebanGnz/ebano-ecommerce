import { Product, Type } from "@/app/interfaces";
import {
  ProductSlideshow,
  ProductSlideshowMobile,
  QuantitySelector,
  SizeSelector,
} from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: Type;
  };
}

export default function ({ params }: Props) {
  const { slug } = params;

  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-3">
      <div className="col-span-1 md:col-span-2">
        <ProductSlideshowMobile
          title={product.title}
          images={product.images}
          className="block md:hidden"
        />

        <ProductSlideshow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />
      </div>

      <div className="col-span-1 md:col-span-1">
        {/* Detalles del producto */}
        <h1
          className={`${titleFont.className} text-2xl font-bold mt-5 mb-3 tracking-wide antialiased`}
        >
          {" "}
          {product.title}
        </h1>

        <h3 className="text-lg mb-3 font-light"> {product.description}</h3>

        <p className="text-lg mb-3 font-bold"> ${product.price}.000 COP</p>

        {/* Selector de tamaño */}
        <SizeSelector
          availableSizes={product.sizes}
          selectedSize={product.sizes[0]}
        />

        {/* Selector de cantidad */}

        <QuantitySelector />

        <button className="btn-primary my-5">Agregar al carrito</button>
      </div>
    </div>
  );
}
