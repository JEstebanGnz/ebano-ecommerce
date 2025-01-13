export interface Product {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: Size[];
    slug: string;
    tags: string[];
    title: string;
    type: Type;
}

export type Size = '50g'|'100g'|'200g'|'500g';
export type Type = 'artisanal_chocolate'|'amazonian_snacks';

