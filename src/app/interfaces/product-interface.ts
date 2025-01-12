export interface Product {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ValidSizes[];
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
}

export type ValidSizes = '50g'|'100g'|'200g'|'500g';
export type ValidTypes = 'artisanal_chocolate'|'amazonian_snacks';

