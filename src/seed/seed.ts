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
            description: "Suave chocolate con leche relleno de una cremosa pasta de lúcuma. Esta fruta tradicional peruana añade un dulzor natural y notas similares al maple a nuestro chocolate con leche 45% cacao.",
            images: [
                'lucuma_chocolate_01.jpg',
                'lucuma_chocolate_02.jpg',
            ],
            inStock: 22,
            price: 16,
            sizes: ['100g','200g'],
            slug: "chocolate_leche_lucuma",
            type: 'artisanal_chocolate',
            tags: ['chocolate con leche', 'lúcuma'],
            title: "Barra de Chocolate con Leche Rellena de Lúcuma"
        },
        {
            description: "Una sofisticada barra de chocolate negro con trozos de jengibre cristalizado y un toque de ají amazónico. El equilibrio perfecto entre picante y dulce en una base de cacao al 65%.",
            images: [
                'ginger_chili_chocolate_01.jpg',
                'ginger_chili_chocolate_02.jpg',
            ],
            inStock: 12,
            price: 15,
            sizes: ['50g','100g'],
            slug: "chocolate_negro_jengibre_aji",
            type: 'artisanal_chocolate',
            tags: ['chocolate negro', 'picante'],
            title: "Chocolate Negro con Jengibre y Ají"
        },
        {
            description: "Delicada corteza de chocolate elaborada con chocolate negro 60% y cubierta con una mezcla de nueces nativas incluyendo nueces de Brasil, anacardos y pecanas. Cada pieza es única y artesanal.",
            images: [
                'nut_bark_01.jpg',
                'nut_bark_02.jpg',
            ],
            inStock: 25,
            price: 20,
            sizes: ['200g','500g'],
            slug: "corteza_chocolate_nueces_amazonicas",
            type: 'artisanal_chocolate',
            tags: ['chocolate negro', 'nueces'],
            title: "Corteza de Chocolate con Nueces Amazónicas"
        },
        {
            description: "Una selección de nuestros mejores bombones de chocolate rellenos con ganache de frutas nativas incluyendo maracuyá, mango y guanábana. Cada pieza está pintada a mano con colores naturales de manteca de cacao.",
            images: [
                'tropical_bonbons_01.jpg',
                'tropical_bonbons_02.jpg',
            ],
            inStock: 15,
            price: 24,
            sizes: ['100g','200g'],
            slug: "coleccion_bombones_frutas_tropicales",
            type: 'artisanal_chocolate',
            tags: ['bombones', 'frutas tropicales'],
            title: "Colección de Bombones de Frutas Tropicales"
        },
        {
            description: "Discos de chocolate caliente elaborados con chocolate negro 70% y especiados con canela y vainilla. Simplemente revuelva en leche caliente para una experiencia tradicional de chocolate caliente peruano.",
            images: [
                'hot_chocolate_01.jpg',
                'hot_chocolate_02.jpg',
            ],
            inStock: 30,
            price: 17,
            sizes: ['100g','200g'],
            slug: "discos_chocolate_caliente_especiado",
            type: 'artisanal_chocolate',
            tags: ['chocolate caliente', 'especiado'],
            title: "Discos de Chocolate Caliente Especiado"
        },
        {
            description: "Chips crujientes de nueces de Brasil ligeramente sazonadas con sal rosa amazónica. Estas chips ricas en proteínas están hechas con nueces cosechadas de manera sostenible y son perfectas para un snack saludable.",
            images: [
                'brazil_nut_chips_01.jpg',
                'brazil_nut_chips_02.jpg',
            ],
            inStock: 40,
            price: 8,
            sizes: ['50g','100g'],
            slug: "chips_nueces_brasil",
            type: 'amazonian_snacks',
            tags: ['nueces', 'chips'],
            title: "Chips de Nueces de Brasil"
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
            description: "Chips crujientes hechas de plátano verde orgánico y sazonadas con ajo silvestre y hierbas. Una alternativa saludable a las papas fritas tradicionales.",
            images: [
                'plantain_chips_01.jpg',
                'plantain_chips_02.jpg',
            ],
            inStock: 45,
            price: 6,
            sizes: ['50g','100g'],
            slug: "chips_platano_hierbas",
            type: 'amazonian_snacks',
            tags: ['chips', 'plátano'],
            title: "Chips de Plátano con Hierbas"
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
        {
            description: "Un único cuero de fruta hecho de bayas de açaí y plátano. Este snack masticable es rico en antioxidantes y proporciona un impulso de energía natural.",
            images: [
                'acai_fruit_leather_01.jpg',
                'acai_fruit_leather_02.jpg',
            ],
            inStock: 28,
            price: 9,
            sizes: ['50g','100g'],
            slug: "cuero_fruta_acai",
            type: 'amazonian_snacks',
            tags: ['cuero de fruta', 'açaí'],
            title: "Cuero de Fruta de Açaí"
        },
        {
            description: "Semillas de sacha inchi tostadas y sazonadas, también conocidas como maní inca. Estas semillas ricas en proteínas están llenas de omega-3 y tienen una textura crujiente y sabor a nuez.",
            images: [
                'sacha_inchi_01.jpg',
                'sacha_inchi_02.jpg',
            ],
            inStock: 40,
            price: 11,
            sizes: ['100g','200g'],
            slug: "semillas_sacha_inchi_tostadas",
            type: 'amazonian_snacks',
            tags: ['semillas', 'proteína'],
            title: "Semillas de Sacha Inchi Tostadas"
        },
        {
            description: "Una mezcla única de granola con ingredientes amazónicos nativos que incluye nueces de Brasil, aguaymanto y chips de coco, endulzada con miel natural de la selva.",
            images: [
                'rainforest_granola_01.jpg',
                'rainforest_granola_02.jpg',
            ],
            inStock: 35,
            price: 13,
            sizes: ['200g','500g'],
            slug: "mezcla_granola_selva",
            type: 'amazonian_snacks',
            tags: ['granola', 'desayuno'],
            title: "Mezcla de Granola de la Selva"
        },
        {
            description: "Chips crujientes hechas de cocona, esta única fruta amazónica. Estas chips exóticas ofrecen un sabor equilibrado entre dulce y ácido, y son ricas en compuestos naturales.",
            images: [
                'cocona_chips_01.jpg',
                'cocona_chips_02.jpg',
            ],
            inStock: 25,
            price: 8,
            sizes: ['50g','100g'],
            slug: "chips_fruta_cocona",
            type: 'amazonian_snacks',
            tags: ['chips', 'fruta exótica'],
            title: "Chips de Cocona"
        }
    ]
}