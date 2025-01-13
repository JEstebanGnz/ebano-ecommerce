interface SeedProduct {
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

type ValidSizes = '50g'|'100g'|'200g'|'500g';
type ValidTypes = 'artisanal_chocolate'|'amazonian_snacks';

interface SeedData {
    products: SeedProduct[],
}

export const initialData: SeedData = {
    products: [
        {
            description: "Nuestra barra de chocolate negro insignia elaborada con 70% de cacao peruano, cuidadosamente cosechado en granjas sostenibles de la región de Cusco. Cada barra está elaborada artesanalmente utilizando métodos tradicionales, creando una textura suave con complejas notas de sabor a frutos rojos y frutos secos.",
            images: [
                'dark_chocolate_bar_01.jpg',
                'dark_chocolate_bar_02.jpg',
            ],
            inStock: 25,
            price: 12,
            sizes: ['50g','100g'],
            slug: "barra_chocolate_negro_premium",
            type: 'artisanal_chocolate',
            tags: ['chocolate negro', 'premium'],
            title: "Barra de Chocolate Negro Premium 70%"
        },
        {
            description: "Una mezcla única de nuestro chocolate con leche artesanal infusionado con menta andina, creando una experiencia refrescante y deliciosa. Elaborado con 45% de cacao y hojas de menta de origen local.",
            images: [
                'mint_chocolate_01.jpg',
                'mint_chocolate_02.jpg',
            ],
            inStock: 15,
            price: 14,
            sizes: ['100g'],
            slug: "chocolate_leche_menta",
            type: 'artisanal_chocolate',
            tags: ['chocolate con leche', 'menta'],
            title: "Chocolate con Leche y Menta"
        },
        {
            description: "Lujosas trufas de chocolate negro rellenas de ganache de aguaymanto. Estas trufas combinan la intensidad del chocolate negro al 65% con la acidez tropical del aguaymanto peruano.",
            images: [
                'berry_truffles_01.jpg',
                'berry_truffles_02.jpg',
            ],
            inStock: 20,
            price: 18,
            sizes: ['100g','200g'],
            slug: "trufas_chocolate_aguaymanto",
            type: 'artisanal_chocolate',
            tags: ['trufas', 'aguaymanto'],
            title: "Trufas de Chocolate con Aguaymanto"
        },
        {
            description: "Una deliciosa combinación de chocolate blanco y maíz morado, creando una barra de chocolate única con remolinos morados, notas sutiles de maíz y una textura cremosa.",
            images: [
                'purple_corn_chocolate_01.jpg',
                'purple_corn_chocolate_02.jpg',
            ],
            inStock: 30,
            price: 15,
            sizes: ['50g','100g'],
            slug: "chocolate_blanco_maiz_morado",
            type: 'artisanal_chocolate',
            tags: ['chocolate blanco', 'maíz morado'],
            title: "Barra de Chocolate Blanco con Maíz Morado"
        },
        {
            description: "Barra de chocolate negro rico con granos de café tostados de las tierras altas del Perú. La combinación perfecta de 72% de cacao y café arábica premium.",
            images: [
                'coffee_chocolate_01.jpg',
                'coffee_chocolate_02.jpg',
            ],
            inStock: 18,
            price: 13,
            sizes: ['100g'],
            slug: "chocolate_negro_cafe",
            type: 'artisanal_chocolate',
            tags: ['chocolate negro', 'café'],
            title: "Chocolate Negro Crujiente con Café"
        },
        {
            description: "Aguaymanto deshidratado y masticable, conocido por su alto contenido en vitamina C y sabor ácido. Estas bayas naturalmente dulces son perfectas para picar o añadir a mezclas de frutos secos.",
            images: [
                'golden_berries_01.jpg',
                'golden_berries_02.jpg',
            ],
            inStock: 35,
            price: 10,
            sizes: ['100g','200g'],
            slug: "aguaymanto_deshidratado",
            type: 'amazonian_snacks',
            tags: ['fruta deshidratada', 'bayas'],
            title: "Aguaymanto Deshidratado"
        },
        {
            description: "Una mezcla única de semillas de sacha inchi tostadas, nueces de Brasil y anacardos, sazonados con hierbas y especias de la Amazonía. Alto contenido en ácidos grasos omega-3 y proteínas.",
            images: [
                'amazonian_trail_mix_01.jpg',
                'amazonian_trail_mix_02.jpg',
            ],
            inStock: 25,
            price: 12,
            sizes: ['100g','200g','500g'],
            slug: "mezcla_frutos_secos_amazonicos",
            type: 'amazonian_snacks',
            tags: ['frutos secos', 'nueces'],
            title: "Mezcla de Frutos Secos Amazónicos"
        },
        {
            description: "Bayas de camu camu deshidratadas, dulces y ácidas, conocidas por su excepcionalmente alto contenido en vitamina C. Estas bayas ricas en antioxidantes tienen un perfil de sabor único.",
            images: [
                'camu_camu_01.jpg',
                'camu_camu_02.jpg',
            ],
            inStock: 20,
            price: 15,
            sizes: ['50g','100g'],
            slug: "bayas_camu_camu_deshidratadas",
            type: 'amazonian_snacks',
            tags: ['fruta deshidratada', 'superalimento'],
            title: "Bayas de Camu Camu Deshidratadas"
        },
        {
            description: "Chips crujientes de yuca sazonadas con ajíes exóticos amazónicos. Estas chips de raíz de yuca ofrecen una combinación única de picante sutil y sabores terrosos.",
            images: [
                'spicy_yuca_chips_01.jpg',
                'spicy_yuca_chips_02.jpg',
            ],
            inStock: 30,
            price: 7,
            sizes: ['50g','100g'],
            slug: "chips_yuca_picante",
            type: 'amazonian_snacks',
            tags: ['chips', 'picante'],
            title: "Chips de Yuca Picante"
        },
    ]
}