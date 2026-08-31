/* =========================================================
   RЯANGELSHOP
   CATÁLOGO DE PLAYERAS PERSONALIZADAS
========================================================= */


/* =========================================================
   WHATSAPP
========================================================= */

let whatsappNumber = "523327939622";


const CITY_NUMBERS = {
    guadalajara: "523327939622",
    monterrey: "528131046235"
};


let priceAdjustment = 0;


const CITY_PRICE_ADJUSTMENT = {
    guadalajara: 30,
    monterrey: 0
};


/* =========================================================
   PRODUCTOS
========================================================= */

const products = [

    {
        id: 1,
        name: "lamine yamal",
        category: "Fútbol",
        price: 220,
        image: "img/playera-01.jpg",
        folder: "Barcelona",
        description:
            "Playera personalizada de lamine yamal.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 13,
        name: "Gignac",
        category: "Fútbol",
        price: 220,
        image: "img/playera-13.jpg",
        folder: "Tigres",
        description:
            "Playera personalizada de Gignac.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 14,
        name: "Pedri",
        category: "Fútbol",
        price: 220,
        image: "img/playera-14.jpg",
        folder: "Barcelona",
        description:
            "Playera personalizada de Pedri.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 15,
        name: "Piojo Alvarado",
        category: "Fútbol",
        price: 220,
        image: "img/playera-15.jpg",
        folder: "Chivas",
        description:
            "Playera personalizada de Piojo Alvarado.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 16,
        name: "Nahuel",
        category: "Fútbol",
        price: 220,
        image: "img/playera-16.jpg",
        folder: "Tigres",
        description:
            "Playera personalizada de Nahuel.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 17,
        name: "Dragon Ball",
        category: "Anime",
        price: 220,
        image: "img/playera-17.jpg",
        folder: "Dragon Ball",
        description:
            "Playera personalizada de Dragon Ball.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 18,
        name: "Bulma",
        category: "Anime",
        price: 220,
        image: "img/playera-18.jpg",
        folder: "Dragon Ball",
        description:
            "Playera personalizada de Bulma.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 19,
        name: "Son Goku",
        category: "Anime",
        price: 220,
        image: "img/playera-19.jpg",
        folder: "Dragon Ball",
        description:
            "Playera personalizada de Son Goku.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 20,
        name: "Dragon Ball",
        category: "Anime",
        price: 220,
        image: "img/playera-20.jpg",
        folder: "Dragon Ball",
        description:
            "Playera personalizada de Dragon Ball.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 21,
        name: "Goku",
        category: "Anime",
        price: 220,
        image: "img/playera-21.jpg",
        folder: "Dragon Ball",
        description:
            "Playera personalizada de Goku.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 22,
        name: "Goku",
        category: "Anime",
        price: 220,
        image: "img/playera-22.jpg",
        folder: "Dragon Ball",
        description:
            "Playera personalizada de Goku.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 23,
        name: "Goku Shenlong",
        category: "Anime",
        price: 220,
        image: "img/playera-23.jpg",
        folder: "Dragon Ball",
        description:
            "Playera personalizada de Goku Shenlong.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 24,
        name: "Boo",
        category: "Anime",
        price: 220,
        image: "img/playera-24.jpg",
        folder: "Dragon Ball",
        description:
            "Playera personalizada de Boo.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 25,
        name: "Naruto",
        category: "Anime",
        price: 220,
        image: "img/playera-25.jpg",
        description:
            "Playera personalizada de Naruto.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 26,
        name: "Naruto",
        category: "Anime",
        price: 220,
        image: "img/playera-26.jpg",
        description:
            "Playera personalizada de Naruto.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 27,
        name: "Naruto",
        category: "Anime",
        price: 220,
        image: "img/playera-27.jpg",
        description:
            "Playera personalizada de Naruto.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 28,
        name: "Naruto",
        category: "Anime",
        price: 220,
        image: "img/playera-28.jpg",
        description:
            "Playera personalizada de Naruto.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 29,
        name: "Naruto",
        category: "Anime",
        price: 220,
        image: "img/playera-29.jpg",
        description:
            "Playera personalizada de Naruto.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 30,
        name: "Naruto",
        category: "Anime",
        price: 220,
        image: "img/playera-30.jpg",
        description:
            "Playera personalizada de Naruto.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 31,
        name: "Naruto",
        category: "Anime",
        price: 220,
        image: "img/playera-31.jpg",
        description:
            "Playera personalizada de Naruto.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 32,
        name: "Naruto",
        category: "Anime",
        price: 220,
        image: "img/playera-32.jpg",
        description:
            "Playera personalizada de Naruto.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 33,
        name: "Naruto",
        category: "Anime",
        price: 220,
        image: "img/playera-33.jpg",
        description:
            "Playera personalizada de Naruto.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 34,
        name: "Naruto",
        category: "Anime",
        price: 220,
        image: "img/playera-34.jpg",
        description:
            "Playera personalizada de Naruto.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 35,
        name: "Natanael Cano",
        category: "Artistas",
        price: 220,
        image: "img/playera-35.jpg",
        description:
            "Playera personalizada de Natanael Cano.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 36,
        name: "Natanael Cano",
        category: "Artistas",
        price: 220,
        image: "img/playera-36.jpg",
        description:
            "Playera personalizada de Natanael Cano.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 37,
        name: "Natanael Cano",
        category: "Artistas",
        price: 220,
        image: "img/playera-37.jpg",
        description:
            "Playera personalizada de Natanael Cano.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 38,
        name: "Natanael Cano",
        category: "Artistas",
        price: 220,
        image: "img/playera-38.jpg",
        description:
            "Playera personalizada de Natanael Cano.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 39,
        name: "Natanael Cano",
        category: "Artistas",
        price: 220,
        image: "img/playera-39.jpg",
        description:
            "Playera personalizada de Natanael Cano.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 40,
        name: "Natanael Cano",
        category: "Artistas",
        price: 220,
        image: "img/playera-40.jpg",
        description:
            "Playera personalizada de Natanael Cano.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 41,
        name: "Natanael Cano",
        category: "Artistas",
        price: 220,
        image: "img/playera-41.jpg",
        description:
            "Playera personalizada de Natanael Cano.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 42,
        name: "Natanael Cano",
        category: "Artistas",
        price: 220,
        image: "img/playera-42.jpg",
        description:
            "Playera personalizada de Natanael Cano.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 43,
        name: "Natanael Cano",
        category: "Artistas",
        price: 220,
        image: "img/playera-43.jpg",
        description:
            "Playera personalizada de Natanael Cano.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 44,
        name: "One Piece",
        category: "Anime",
        price: 220,
        image: "img/playera-44.jpg",
        description:
            "Playera personalizada de One Piece.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 45,
        name: "One Piece",
        category: "Anime",
        price: 220,
        image: "img/playera-45.jpg",
        description:
            "Playera personalizada de One Piece.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 46,
        name: "One Piece",
        category: "Anime",
        price: 220,
        image: "img/playera-46.jpg",
        description:
            "Playera personalizada de One Piece.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 47,
        name: "One Piece",
        category: "Anime",
        price: 220,
        image: "img/playera-47.jpg",
        description:
            "Playera personalizada de One Piece.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 48,
        name: "One Piece",
        category: "Anime",
        price: 220,
        image: "img/playera-48.jpg",
        description:
            "Playera personalizada de One Piece.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 49,
        name: "One Piece",
        category: "Anime",
        price: 220,
        image: "img/playera-49.jpg",
        description:
            "Playera personalizada de One Piece.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 50,
        name: "One Piece",
        category: "Anime",
        price: 220,
        image: "img/playera-50.jpg",
        description:
            "Playera personalizada de One Piece.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 51,
        name: "One Piece",
        category: "Anime",
        price: 220,
        image: "img/playera-51.jpg",
        description:
            "Playera personalizada de One Piece.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 52,
        name: "One Piece",
        category: "Anime",
        price: 220,
        image: "img/playera-52.jpg",
        description:
            "Playera personalizada de One Piece.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 53,
        name: "One Piece",
        category: "Anime",
        price: 220,
        image: "img/playera-53.jpg",
        description:
            "Playera personalizada de One Piece.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 54,
        name: "One Piece",
        category: "Anime",
        price: 220,
        image: "img/playera-54.jpg",
        description:
            "Playera personalizada de One Piece.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 55,
        name: "Junior H",
        category: "Artistas",
        price: 220,
        image: "img/playera-55.jpg",
        description:
            "Playera personalizada de Junior H.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 56,
        name: "Junior H",
        category: "Artistas",
        price: 220,
        image: "img/playera-56.jpg",
        description:
            "Playera personalizada de Junior H.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 57,
        name: "Junior H",
        category: "Artistas",
        price: 220,
        image: "img/playera-57.jpg",
        description:
            "Playera personalizada de Junior H.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 58,
        name: "Junior H",
        category: "Artistas",
        price: 220,
        image: "img/playera-58.jpg",
        description:
            "Playera personalizada de Junior H.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 59,
        name: "Junior H",
        category: "Artistas",
        price: 220,
        image: "img/playera-59.jpg",
        description:
            "Playera personalizada de Junior H.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 60,
        name: "Junior H",
        category: "Artistas",
        price: 220,
        image: "img/playera-60.jpg",
        imageBack: "img/playera-60-espalda.jpg",
        description:
            "Playera personalizada de Junior H con diseño al frente y espalda.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 61,
        name: "Junior H",
        category: "Artistas",
        price: 220,
        image: "img/playera-61.jpg",
        imageBack: "img/playera-61-espalda.jpg",
        description:
            "Playera personalizada de Junior H con diseño al frente y espalda.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 62,
        name: "Junior H",
        category: "Artistas",
        price: 220,
        image: "img/playera-62.jpg",
        imageBack: "img/playera-62-espalda.jpg",
        description:
            "Playera personalizada de Junior H con diseño al frente y espalda.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 63,
        name: "Junior H",
        category: "Artistas",
        price: 220,
        image: "img/playera-63.jpg",
        imageBack: "img/playera-63-espalda.jpg",
        description:
            "Playera personalizada de Junior H con diseño al frente y espalda.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 69,
        name: "Peso Pluma",
        category: "Artistas",
        price: 220,
        image: "img/playera-69.jpg",
        description:
            "Playera personalizada de Peso Pluma.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 70,
        name: "Peso Pluma",
        category: "Artistas",
        price: 220,
        image: "img/playera-70.jpg",
        description:
            "Playera personalizada de Peso Pluma.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 71,
        name: "Peso Pluma",
        category: "Artistas",
        price: 220,
        image: "img/playera-71.jpg",
        description:
            "Playera personalizada de Peso Pluma.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 72,
        name: "Peso Pluma",
        category: "Artistas",
        price: 220,
        image: "img/playera-72.jpg",
        description:
            "Playera personalizada de Peso Pluma.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 73,
        name: "Peso Pluma",
        category: "Artistas",
        price: 220,
        image: "img/playera-73.jpg",
        description:
            "Playera personalizada de Peso Pluma.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 74,
        name: "Súper Campeones",
        category: "Anime",
        price: 220,
        image: "img/playera-74.jpg",
        description:
            "Playera personalizada de Súper Campeones.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 75,
        name: "Súper Campeones",
        category: "Anime",
        price: 220,
        image: "img/playera-75.jpg",
        description:
            "Playera personalizada de Súper Campeones.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 76,
        name: "Súper Campeones",
        category: "Anime",
        price: 220,
        image: "img/playera-76.jpg",
        description:
            "Playera personalizada de Súper Campeones.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 77,
        name: "Súper Campeones",
        category: "Anime",
        price: 220,
        image: "img/playera-77.jpg",
        description:
            "Playera personalizada de Súper Campeones.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 78,
        name: "Jujutsu Kaisen",
        category: "Anime",
        price: 220,
        image: "img/playera-78.jpg",
        description:
            "Playera personalizada de Jujutsu Kaisen.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 79,
        name: "Jujutsu Kaisen",
        category: "Anime",
        price: 220,
        image: "img/playera-79.jpg",
        description:
            "Playera personalizada de Jujutsu Kaisen.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 80,
        name: "Jujutsu Kaisen",
        category: "Anime",
        price: 220,
        image: "img/playera-80.jpg",
        description:
            "Playera personalizada de Jujutsu Kaisen.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 81,
        name: "Jujutsu Kaisen",
        category: "Anime",
        price: 220,
        image: "img/playera-81.jpg",
        description:
            "Playera personalizada de Jujutsu Kaisen.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 82,
        name: "Jujutsu Kaisen",
        category: "Anime",
        price: 220,
        image: "img/playera-82.jpg",
        description:
            "Playera personalizada de Jujutsu Kaisen.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 83,
        name: "Jujutsu Kaisen",
        category: "Anime",
        price: 220,
        image: "img/playera-83.jpg",
        description:
            "Playera personalizada de Jujutsu Kaisen.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 85,
        name: "Bad Bunny",
        category: "Artistas",
        price: 220,
        image: "img/playera-85.jpg",
        description:
            "Playera personalizada de Bad Bunny.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 86,
        name: "Bad Bunny",
        category: "Artistas",
        price: 220,
        image: "img/playera-86.jpg",
        description:
            "Playera personalizada de Bad Bunny.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 87,
        name: "Bad Bunny",
        category: "Artistas",
        price: 220,
        image: "img/playera-87.jpg",
        description:
            "Playera personalizada de Bad Bunny.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 88,
        name: "Bad Bunny",
        category: "Artistas",
        price: 220,
        image: "img/playera-88.jpg",
        description:
            "Playera personalizada de Bad Bunny.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 89,
        name: "Bad Bunny",
        category: "Artistas",
        price: 220,
        image: "img/playera-89.jpg",
        description:
            "Playera personalizada de Bad Bunny.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 90,
        name: "Bad Bunny",
        category: "Artistas",
        price: 220,
        image: "img/playera-90.jpg",
        description:
            "Playera personalizada de Bad Bunny.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 91,
        name: "Travis Scott",
        category: "Artistas",
        price: 220,
        image: "img/playera-91.jpg",
        description:
            "Playera personalizada de Travis Scott.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 92,
        name: "Travis Scott",
        category: "Artistas",
        price: 220,
        image: "img/playera-92.jpg",
        description:
            "Playera personalizada de Travis Scott.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 93,
        name: "Travis Scott",
        category: "Artistas",
        price: 220,
        image: "img/playera-93.jpg",
        description:
            "Playera personalizada de Travis Scott.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 94,
        name: "Travis Scott",
        category: "Artistas",
        price: 220,
        image: "img/playera-94.jpg",
        description:
            "Playera personalizada de Travis Scott.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 95,
        name: "Travis Scott",
        category: "Artistas",
        price: 220,
        image: "img/playera-95.jpg",
        description:
            "Playera personalizada de Travis Scott.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 96,
        name: "Fuerza Regida",
        category: "Artistas",
        price: 220,
        image: "img/playera-96.jpg",
        description:
            "Playera personalizada de Fuerza Regida.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 97,
        name: "Fuerza Regida",
        category: "Artistas",
        price: 220,
        image: "img/playera-97.jpg",
        description:
            "Playera personalizada de Fuerza Regida.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 98,
        name: "Fuerza Regida",
        category: "Artistas",
        price: 220,
        image: "img/playera-98.jpg",
        description:
            "Playera personalizada de Fuerza Regida.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 99,
        name: "Fuerza Regida",
        category: "Artistas",
        price: 220,
        image: "img/playera-99.jpg",
        description:
            "Playera personalizada de Fuerza Regida.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 100,
        name: "Fuerza Regida",
        category: "Artistas",
        price: 220,
        image: "img/playera-100.jpg",
        description:
            "Playera personalizada de Fuerza Regida.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 101,
        name: "Fuerza Regida",
        category: "Artistas",
        price: 220,
        image: "img/playera-101.jpg",
        description:
            "Playera personalizada de Fuerza Regida.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 102,
        name: "Fuerza Regida",
        category: "Artistas",
        price: 220,
        image: "img/playera-102.jpg",
        description:
            "Playera personalizada de Fuerza Regida.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 103,
        name: "Demon Slayer",
        category: "Anime",
        price: 220,
        image: "img/playera-103.jpg",
        description:
            "Playera personalizada de Demon Slayer.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 104,
        name: "Demon Slayer",
        category: "Anime",
        price: 220,
        image: "img/playera-104.jpg",
        description:
            "Playera personalizada de Demon Slayer.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 105,
        name: "Demon Slayer",
        category: "Anime",
        price: 220,
        image: "img/playera-105.jpg",
        description:
            "Playera personalizada de Demon Slayer.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 106,
        name: "Demon Slayer",
        category: "Anime",
        price: 220,
        image: "img/playera-106.jpg",
        description:
            "Playera personalizada de Demon Slayer.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 107,
        name: "Demon Slayer",
        category: "Anime",
        price: 220,
        image: "img/playera-107.jpg",
        description:
            "Playera personalizada de Demon Slayer.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 108,
        name: "Demon Slayer",
        category: "Anime",
        price: 220,
        image: "img/playera-108.jpg",
        description:
            "Playera personalizada de Demon Slayer.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 109,
        name: "Demon Slayer",
        category: "Anime",
        price: 220,
        image: "img/playera-109.jpg",
        description:
            "Playera personalizada de Demon Slayer.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 110,
        name: "Carros",
        category: "Carros",
        price: 220,
        image: "img/playera-110.jpg",
        imageBack: "img/playera-110-espalda.jpg",
        description:
            "Playera personalizada de carros con diseño al frente y espalda.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 111,
        name: "Carros",
        category: "Carros",
        price: 220,
        image: "img/playera-111.jpg",
        imageBack: "img/playera-111-espalda.jpg",
        description:
            "Playera personalizada de carros con diseño al frente y espalda.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 112,
        name: "Carros",
        category: "Carros",
        price: 220,
        image: "img/playera-112.jpg",
        imageBack: "img/playera-112-espalda.jpg",
        description:
            "Playera personalizada de carros con diseño al frente y espalda.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 113,
        name: "Carros",
        category: "Carros",
        price: 220,
        image: "img/playera-113.jpg",
        imageBack: "img/playera-113-espalda.jpg",
        description:
            "Playera personalizada de carros con diseño al frente y espalda.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 114,
        name: "Carros",
        category: "Carros",
        price: 220,
        image: "img/playera-114.jpg",
        imageBack: "img/playera-114-espalda.jpg",
        description:
            "Playera personalizada de carros con diseño al frente y espalda.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 115,
        name: "Carros",
        category: "Carros",
        price: 220,
        image: "img/playera-115.jpg",
        imageBack: "img/playera-115-espalda.jpg",
        description:
            "Playera personalizada de carros con diseño al frente y espalda.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 116,
        name: "Carros",
        category: "Carros",
        price: 220,
        image: "img/playera-116.jpg",
        imageBack: "img/playera-116-espalda.jpg",
        description:
            "Playera personalizada de carros con diseño al frente y espalda.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 117,
        name: "Messi",
        category: "Fútbol",
        price: 220,
        image: "img/playera-117.jpg",
        description:
            "Playera personalizada de Messi.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 118,
        name: "Messi",
        category: "Fútbol",
        price: 220,
        image: "img/playera-118.jpg",
        description:
            "Playera personalizada de Messi.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 119,
        name: "Messi",
        category: "Fútbol",
        price: 220,
        image: "img/playera-119.jpg",
        description:
            "Playera personalizada de Messi.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 120,
        name: "Messi",
        category: "Fútbol",
        price: 220,
        image: "img/playera-120.jpg",
        description:
            "Playera personalizada de Messi.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 121,
        name: "Messi",
        category: "Fútbol",
        price: 220,
        image: "img/playera-121.jpg",
        description:
            "Playera personalizada de Messi.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 122,
        name: "Gignac",
        category: "Fútbol",
        price: 220,
        image: "img/playera-122.jpg",
        folder: "Tigres",
        description:
            "Playera personalizada de Gignac.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 123,
        name: "Gignac",
        category: "Fútbol",
        price: 220,
        image: "img/playera-123.jpg",
        folder: "Tigres",
        description:
            "Playera personalizada de Gignac.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 124,
        name: "Gignac",
        category: "Fútbol",
        price: 220,
        image: "img/playera-124.jpg",
        folder: "Tigres",
        description:
            "Playera personalizada de Gignac.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    }

];



/* =========================================================
   ELEMENTOS
========================================================= */

const productsGrid =
    document.getElementById("productsGrid");


const resultsCount =
    document.getElementById("resultsCount");


const backToFolders =
    document.getElementById("backToFolders");


const searchInput =
    document.getElementById("searchInput");


const categoryButtons =
    document.querySelectorAll(".category");


const modal =
    document.getElementById("productModal");


const modalOverlay =
    document.getElementById("modalOverlay");


const modalClose =
    document.getElementById("modalClose");


const modalImage =
    document.getElementById("modalImage");


const modalTitle =
    document.getElementById("modalTitle");


const modalCategory =
    document.getElementById("modalCategory");


const modalPrice =
    document.getElementById("modalPrice");


const modalDescription =
    document.getElementById("modalDescription");


const modalSizes =
    document.getElementById("modalSizes");


const modalColors =
    document.getElementById("modalColors");


const modalWhatsapp =
    document.getElementById("modalWhatsapp");


const menuButton =
    document.getElementById("menuButton");


const mainNav =
    document.querySelector(".nav");


const imageZoom =
    document.getElementById("imageZoom");


const imageZoomPicture =
    document.getElementById("imageZoomPicture");


const imageZoomClose =
    document.getElementById("imageZoomClose");


const imageSides =
    document.getElementById("imageSides");


const sideFront =
    document.getElementById("sideFront");


const sideBack =
    document.getElementById("sideBack");


const sizeGuideLink =
    document.getElementById("sizeGuideLink");


const sizeGuideModal =
    document.getElementById("sizeGuideModal");


const sizeGuideOverlay =
    document.getElementById("sizeGuideOverlay");


const sizeGuideClose =
    document.getElementById("sizeGuideClose");



/* =========================================================
   ESTADO
========================================================= */

let currentCategory = "Todos";


let currentFolder = null;


const FOLDER_CATEGORIES = [
    "Anime",
    "Artistas",
    "Fútbol"
];


let currentProduct = null;



/* =========================================================
   MENÚ MÓVIL
========================================================= */

menuButton.addEventListener(
    "click",
    () => {

        mainNav.classList.toggle(
            "nav-open"
        );

    }
);


mainNav.querySelectorAll("a").forEach(
    link => {

        link.addEventListener(
            "click",
            () => {

                mainNav.classList.remove(
                    "nav-open"
                );

            }
        );

    }
);



/* =========================================================
   PLACEHOLDER
========================================================= */

function getFinalPrice(product) {

    return product.price + priceAdjustment;

}



function slugify(text) {

    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

}



const FOLDER_ACCENT_COLORS = {
    "dragon-ball": "#f4c430"
};


const DEFAULT_ACCENT_COLOR = "#f4c430";


/* =========================================================
   ANIMACIONES DE ENTRADA POR CARPETA
========================================================= */

const FOLDER_CONFETTI_COLORS = {
    "chivas": ["#C8102E", "#FFFFFF"]
};


function fireConfetti(colors) {

    const canvas =
        document.createElement("canvas");


    canvas.className =
        "confetti-canvas";


    document.body.appendChild(
        canvas
    );


    const ctx =
        canvas.getContext("2d");


    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;


    const particleCount = 160;

    const particles = [];


    for (
        let i = 0;
        i < particleCount;
        i++
    ) {

        particles.push({
            x: canvas.width / 2 + (Math.random() - 0.5) * 260,
            y: canvas.height * 0.18 + (Math.random() - 0.5) * 40,
            vx: (Math.random() - 0.5) * 11,
            vy: Math.random() * -7 - 3,
            size: Math.random() * 8 + 4,
            color: colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ],
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 12,
            gravity: 0.22 + Math.random() * 0.16
        });

    }


    let frame = 0;

    const maxFrames = 150;


    function animate() {

        frame++;


        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        particles.forEach(
            particle => {

                particle.vy +=
                    particle.gravity;

                particle.x +=
                    particle.vx;

                particle.y +=
                    particle.vy;

                particle.rotation +=
                    particle.rotationSpeed;


                const opacity =
                    Math.max(
                        0,
                        1 - frame / maxFrames
                    );


                ctx.save();

                ctx.globalAlpha =
                    opacity;

                ctx.translate(
                    particle.x,
                    particle.y
                );

                ctx.rotate(
                    (particle.rotation * Math.PI) / 180
                );

                ctx.fillStyle =
                    particle.color;

                ctx.fillRect(
                    -particle.size / 2,
                    -particle.size / 4,
                    particle.size,
                    particle.size / 2
                );

                ctx.restore();

            }
        );


        if (
            frame < maxFrames
        ) {

            requestAnimationFrame(
                animate
            );

        } else {

            canvas.remove();

        }

    }


    requestAnimationFrame(
        animate
    );

}


const FOLDER_ENTRY_ANIMATIONS = {
    "spiderman": {
        intro: "img/anim-spiderman.gif",
        introDuration: 3000
    }
};


function playIntroSwing(src, duration) {

    const img =
        document.createElement("img");


    img.src =
        src;


    img.className =
        "intro-swing";


    img.style.animationDuration =
        `${duration / 2}ms`;


    document.body.appendChild(
        img
    );


    setTimeout(
        () => {

            img.remove();

        },
        duration
    );

}


function playFolderAnimation(name) {

    const slug =
        slugify(name);


    if (
        FOLDER_CONFETTI_COLORS[slug]
    ) {

        fireConfetti(
            FOLDER_CONFETTI_COLORS[slug]
        );

    }


    const entryConfig =
        FOLDER_ENTRY_ANIMATIONS[slug];


    if (
        entryConfig &&
        entryConfig.intro
    ) {

        playIntroSwing(
            entryConfig.intro,
            entryConfig.introDuration || 3000
        );

    }

}


function setThemedBackground(name) {

    const hero =
        document.querySelector(".hero");


    const header =
        document.querySelector(".header");


    const catalogSection =
        document.querySelector(".catalog-section");


    const customSection =
        document.querySelector(".custom-section");


    const howSection =
        document.querySelector(".how-section");


    const contactSection =
        document.querySelector(".contact-section");


    hero.classList.toggle(
        "hide",
        !!name
    );


    header.classList.toggle(
        "themed",
        !!name
    );


    customSection.classList.toggle(
        "hide",
        !!name
    );


    howSection.classList.toggle(
        "hide",
        !!name
    );


    contactSection.classList.toggle(
        "hide",
        !!name
    );


    document.body.classList.toggle(
        "is-themed",
        !!name
    );


    if (
        !name
    ) {

        header.style.backgroundImage =
            "";

        catalogSection.style.backgroundImage =
            "";

        document.documentElement.style.removeProperty(
            "--theme-accent"
        );

        return;

    }


    const slug =
        slugify(name);


    const bgStyle =
        `url("img/fondo-${slug}.jpg")`;


    [header, catalogSection].forEach(
        element => {

            element.style.backgroundImage =
                bgStyle;

            element.style.backgroundSize =
                "cover";

            element.style.backgroundPosition =
                "center top";

            element.style.backgroundAttachment =
                "fixed";

            element.style.backgroundRepeat =
                "no-repeat";

        }
    );


    document.documentElement.style.setProperty(
        "--theme-accent",
        FOLDER_ACCENT_COLORS[slug] || DEFAULT_ACCENT_COLOR
    );

}



function openFolder(name) {

    history.pushState(
        {
            rrFolder: name,
            rrCategory: currentCategory
        },
        "",
        ""
    );


    currentFolder =
        name;


    setThemedBackground(
        name
    );


    playFolderAnimation(
        name
    );


    renderProducts();

}



function closeFolder() {

    currentFolder =
        null;


    setThemedBackground(
        null
    );


    renderProducts();

}



window.addEventListener(
    "popstate",
    event => {

        const state =
            event.state;


        if (
            state &&
            state.rrFolder
        ) {

            currentCategory =
                state.rrCategory;


            currentFolder =
                state.rrFolder;


            setThemedBackground(
                state.rrFolder
            );


            playFolderAnimation(
                state.rrFolder
            );

        } else {

            currentFolder =
                null;


            setThemedBackground(
                null
            );

        }


        renderProducts();

    }
);



function createPlaceholder(product) {

    const canvas =
        document.createElement("canvas");


    canvas.width = 800;

    canvas.height = 980;


    const ctx =
        canvas.getContext("2d");


    ctx.fillStyle = "#eeeeeb";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    ctx.beginPath();

    ctx.arc(
        400,
        390,
        190,
        0,
        Math.PI * 2
    );


    ctx.fillStyle = "#d7d7d2";

    ctx.fill();


    ctx.fillStyle = "#111";

    ctx.textAlign = "center";


    ctx.font =
        "800 72px Arial";


    ctx.fillText(
        "RЯ",
        400,
        410
    );


    ctx.font =
        "600 26px Arial";


    ctx.fillStyle = "#555";


    ctx.fillText(
        product.name,
        400,
        690
    );


    ctx.font =
        "500 18px Arial";


    ctx.fillStyle = "#999";


    ctx.fillText(
        product.category.toUpperCase(),
        400,
        735
    );


    return canvas.toDataURL(
        "image/png"
    );

}



/* =========================================================
   MOSTRAR CARPETAS
========================================================= */

function renderFolders() {

    const groups = {};


    products
        .filter(
            product =>
                product.category === currentCategory
        )
        .forEach(
            product => {

                const key =
                    product.folder || product.name;


                if (
                    !groups[key]
                ) {

                    groups[key] = {
                        name: key,
                        image: product.image,
                        count: 0
                    };

                }


                groups[key].count++;

            }
        );


    const folderList =
        Object.values(groups);


    productsGrid.innerHTML = "";


    productsGrid.classList.add(
        "folder-grid"
    );


    resultsCount.textContent =
        folderList.length === 1
            ? "1 grupo de diseños"
            : `${folderList.length} grupos de diseños`;


    folderList.forEach(
        folder => {


            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "product-card folder-card";


            const imageContainer =
                document.createElement(
                    "div"
                );


            imageContainer.className =
                "product-image";


            const image =
                document.createElement(
                    "img"
                );


            const slug =
                slugify(folder.name);


            image.src =
                `img/carpeta-${slug}.png`;


            image.alt =
                folder.name;


            image.loading =
                "lazy";


            image.onerror =
                () => {

                    image.onerror =
                        () => {

                            image.onerror =
                                () => {

                                    image.onerror = null;

                                    image.src =
                                        createPlaceholder({
                                            name: folder.name,
                                            category: currentCategory
                                        });

                                };


                            image.src =
                                folder.image;

                        };


                    image.src =
                        `img/carpeta-${slug}.jpg`;

                };


            imageContainer.appendChild(
                image
            );


            const info =
                document.createElement(
                    "div"
                );


            info.className =
                "product-info";


            info.innerHTML = `

                <div class="product-title">

                    ${folder.name}

                </div>


                <div class="product-price">

                    ${folder.count} ${folder.count === 1 ? "diseño" : "diseños"}

                </div>

            `;


            card.appendChild(
                imageContainer
            );


            card.appendChild(
                info
            );


            card.addEventListener(
                "click",
                () => {

                    openFolder(
                        folder.name
                    );

                }
            );


            productsGrid.appendChild(
                card
            );

        }
    );

}



/* =========================================================
   MOSTRAR PRODUCTOS
========================================================= */

function renderProducts() {

    const search =
        searchInput.value
            .toLowerCase()
            .trim();


    const showingFolders =
        search === "" &&
        FOLDER_CATEGORIES.includes(currentCategory) &&
        !currentFolder;


    backToFolders.classList.toggle(
        "show",
        FOLDER_CATEGORIES.includes(currentCategory) &&
            !!currentFolder
    );


    if (
        showingFolders
    ) {

        renderFolders();

        return;

    }


    const filteredProducts =
        products.filter(
            product => {


                const matchesCategory =
                    currentCategory === "Todos" ||
                    product.category === currentCategory;


                const matchesFolder =
                    !currentFolder ||
                    (product.folder || product.name) === currentFolder;


                const matchesSearch =
                    product.name
                        .toLowerCase()
                        .includes(search);


                return (
                    matchesCategory &&
                    matchesFolder &&
                    matchesSearch
                );

            }
        );


    productsGrid.innerHTML = "";


    productsGrid.classList.remove(
        "folder-grid"
    );


    resultsCount.textContent =
        filteredProducts.length === 1
            ? "1 diseño encontrado"
            : `${filteredProducts.length} diseños encontrados`;


    if (
        filteredProducts.length === 0
    ) {

        productsGrid.innerHTML = `

            <div class="no-products">

                No encontramos diseños
                con esa búsqueda.

            </div>

        `;

        return;
    }



    filteredProducts.forEach(
        product => {


            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "product-card";


            const imageContainer =
                document.createElement(
                    "div"
                );


            imageContainer.className =
                "product-image";


            const image =
                document.createElement(
                    "img"
                );


            image.src =
                product.image;


            image.alt =
                product.name;


            image.loading =
                "lazy";


            image.onerror =
                () => {

                    image.onerror = null;

                    image.src =
                        createPlaceholder(
                            product
                        );

                };


            imageContainer.appendChild(
                image
            );



            const info =
                document.createElement(
                    "div"
                );


            info.className =
                "product-info";


            info.innerHTML = `

                <div class="product-category">

                    ${product.category}

                </div>


                <div class="product-title">

                    ${product.name}

                </div>


                <div class="product-price">

                    Desde $${getFinalPrice(product)} MXN

                </div>

            `;


            card.appendChild(
                imageContainer
            );


            card.appendChild(
                info
            );



            card.addEventListener(
                "click",
                () => {

                    openProduct(
                        product
                    );

                }
            );


            productsGrid.appendChild(
                card
            );

        }
    );

}



/* =========================================================
   CATEGORÍAS
========================================================= */

categoryButtons.forEach(
    button => {


        button.addEventListener(
            "click",
            () => {


                categoryButtons.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                currentCategory =
                    button.dataset.category;


                currentFolder =
                    null;


                setThemedBackground(
                    null
                );


                renderProducts();

            }
        );

    }
);


backToFolders.addEventListener(
    "click",
    () => {

        if (
            history.state &&
            history.state.rrFolder
        ) {

            history.back();

        } else {

            closeFolder();

        }

    }
);



/* =========================================================
   BUSCADOR
========================================================= */

searchInput.addEventListener(
    "input",
    () => {

        renderProducts();

    }
);



/* =========================================================
   ABRIR PRODUCTO
========================================================= */

function openProduct(product) {

    currentProduct = product;


    modalImage.onerror =
        () => {

            modalImage.onerror = null;

            modalImage.src =
                createPlaceholder(
                    product
                );

        };


    modalImage.src =
        product.image;


    modalImage.alt =
        product.name;


    if (
        product.imageBack
    ) {

        imageSides.classList.add(
            "show"
        );

        sideFront.classList.add(
            "active"
        );

        sideBack.classList.remove(
            "active"
        );

    } else {

        imageSides.classList.remove(
            "show"
        );

    }


    modalTitle.textContent =
        product.name;


    modalCategory.textContent =
        product.category;


    modalPrice.textContent =
        `Desde $${getFinalPrice(product)} MXN`;


    modalDescription.textContent =
        product.description;


    modalSizes.textContent =
        product.sizes.join(
            " · "
        );


    modalColors.textContent =
        product.colors.join(
            " · "
        );



    /* =====================================================
       WHATSAPP DEL PRODUCTO
    ===================================================== */

    const message =
        `Hola, me interesa la playera "${product.name}". Vi el diseño en el catálogo de RЯangelShop. ¿Me pueden dar información sobre disponibilidad, tallas y colores?`;


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


    modalWhatsapp.href =
        whatsappURL;


    modalWhatsapp.target =
        "_blank";


    modalWhatsapp.rel =
        "noopener noreferrer";


    modalWhatsapp.textContent =
        "Consultar por WhatsApp →";



    /* ABRIR */

    modal.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";

}



/* =========================================================
   CERRAR MODAL
========================================================= */

function closeModal() {

    modal.classList.remove(
        "show"
    );


    document.body.style.overflow =
        "";

}


modalClose.addEventListener(
    "click",
    closeModal
);


modalOverlay.addEventListener(
    "click",
    closeModal
);



/* =========================================================
   FRENTE / ESPALDA
========================================================= */

sideFront.addEventListener(
    "click",
    () => {

        if (
            !currentProduct
        ) {

            return;

        }


        modalImage.src =
            currentProduct.image;


        sideFront.classList.add(
            "active"
        );

        sideBack.classList.remove(
            "active"
        );

    }
);


sideBack.addEventListener(
    "click",
    () => {

        if (
            !currentProduct ||
            !currentProduct.imageBack
        ) {

            return;

        }


        modalImage.src =
            currentProduct.imageBack;


        sideBack.classList.add(
            "active"
        );

        sideFront.classList.remove(
            "active"
        );

    }
);



/* =========================================================
   GUÍA DE TALLAS
========================================================= */

sizeGuideLink.addEventListener(
    "click",
    () => {

        sizeGuideModal.classList.add(
            "show"
        );

        document.body.style.overflow =
            "hidden";

    }
);


function closeSizeGuide() {

    sizeGuideModal.classList.remove(
        "show"
    );


    document.body.style.overflow =
        "";

}


sizeGuideClose.addEventListener(
    "click",
    closeSizeGuide
);


sizeGuideOverlay.addEventListener(
    "click",
    closeSizeGuide
);



/* =========================================================
   UNIDADES DE MEDIDA (CM / PULG)
========================================================= */

const unitButtons =
    document.querySelectorAll(".unit-button");


const sizeCells =
    document.querySelectorAll(
        ".size-guide-table td[data-cm]"
    );


unitButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                const unit =
                    button.dataset.unit;


                unitButtons.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                sizeCells.forEach(
                    cell => {

                        cell.textContent =
                            unit === "in"
                                ? cell.dataset.in
                                : cell.dataset.cm;

                    }
                );

            }
        );

    }
);



/* =========================================================
   ZOOM DE IMAGEN
========================================================= */

modalImage.addEventListener(
    "click",
    () => {

        imageZoomPicture.src =
            modalImage.src;

        imageZoomPicture.alt =
            modalImage.alt;

        imageZoomPicture.classList.remove(
            "zoomed"
        );

        imageZoom.classList.add(
            "show"
        );

        document.body.style.overflow =
            "hidden";

    }
);


imageZoomPicture.addEventListener(
    "click",
    () => {

        imageZoomPicture.classList.toggle(
            "zoomed"
        );

    }
);


function closeImageZoom() {

    imageZoom.classList.remove(
        "show"
    );


    imageZoomPicture.classList.remove(
        "zoomed"
    );


    document.body.style.overflow =
        "";

}


imageZoomClose.addEventListener(
    "click",
    closeImageZoom
);


imageZoom.addEventListener(
    "click",
    event => {

        if (
            event.target === imageZoom
        ) {

            closeImageZoom();

        }

    }
);



/* =========================================================
   ESC
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeImageZoom();

            closeSizeGuide();

            closeModal();

        }

    }
);



/* =========================================================
   SELECCIÓN DE CIUDAD
========================================================= */

const cityModal =
    document.getElementById("cityModal");


const cityOptions =
    document.querySelectorAll(".city-option");


const cityFloat =
    document.getElementById("cityFloat");


document.body.style.overflow =
    "hidden";


function updateWhatsappLinks(number) {

    whatsappNumber = number;


    document.querySelectorAll(
        'a[href*="wa.me/"]'
    ).forEach(
        link => {

            link.href =
                link.href.replace(
                    /wa\.me\/\d+/,
                    `wa.me/${number}`
                );

        }
    );

}


cityOptions.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                const city =
                    button.dataset.city;


                updateWhatsappLinks(
                    CITY_NUMBERS[city]
                );


                priceAdjustment =
                    CITY_PRICE_ADJUSTMENT[city];


                renderProducts();


                cityModal.classList.add(
                    "hide"
                );


                document.body.style.overflow =
                    "";

            }
        );

    }
);


cityFloat.addEventListener(
    "click",
    () => {

        cityModal.classList.remove(
            "hide"
        );


        document.body.style.overflow =
            "hidden";

    }
);



/* =========================================================
   INICIAR
========================================================= */

renderProducts();
