/* =========================================================
   RЯANGELSHOP
   CATÁLOGO DE PLAYERAS PERSONALIZADAS
========================================================= */


/* =========================================================
   WHATSAPP
========================================================= */

const whatsappNumber = "523327939622";


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
        description:
            "Playera personalizada de lamine yamal.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    },


    {
        id: 2,
        name: "Playera Sport",
        category: "Anime",
        price: 299,
        image: "img/playera-02.jpg",
        description:
            "Diseño deportivo de estilo moderno para uso casual o deportivo.",
        sizes: ["CH", "M", "G", "XG"],
        colors: ["Negro", "Blanco"]
    },


    {
        id: 3,
        name: "Street Name",
        category: "Personalizadas",
        price: 329,
        image: "img/playera-03.jpg",
        description:
            "Personaliza tu playera con nombre, número o texto.",
        sizes: ["CH", "M", "G", "XG", "2XG"],
        colors: ["Negro", "Blanco", "Rojo"]
    },


    {
        id: 4,
        name: "Urban Style",
        category: "Nuevos",
        price: 329,
        image: "img/playera-04.jpg",
        description:
            "Diseño urbano inspirado en las tendencias actuales.",
        sizes: ["CH", "M", "G", "XG"],
        colors: ["Negro", "Blanco"]
    },


    {
        id: 5,
        name: "Classic Black",
        category: "Artistas",
        price: 299,
        image: "img/playera-05.jpg",
        description:
            "Playera con diseño de frase personalizada.",
        sizes: ["CH", "M", "G", "XG"],
        colors: ["Negro", "Blanco"]
    },


    {
        id: 6,
        name: "Team Edition",
        category: "Fútbol",
        price: 349,
        image: "img/playera-06.jpg",
        description:
            "Diseño inspirado en jerseys y equipos.",
        sizes: ["CH", "M", "G", "XG", "2XG"],
        colors: ["Negro", "Blanco", "Rojo"]
    },


    {
        id: 7,
        name: "Street Premium",
        category: "Nuevos",
        price: 349,
        image: "img/playera-07.jpg",
        description:
            "Diseño premium para un look urbano.",
        sizes: ["CH", "M", "G", "XG"],
        colors: ["Negro", "Blanco"]
    },


    {
        id: 8,
        name: "Tu Diseño",
        category: "Personalizadas",
        price: 399,
        image: "img/playera-08.jpg",
        description:
            "Mándanos tu idea y creamos una playera personalizada.",
        sizes: ["CH", "M", "G", "XG", "2XG"],
        colors: ["Negro", "Blanco", "Rojo", "Azul"]
    },


    {
        id: 9,
        name: "Frase Motivacional",
        category: "Artistas",
        price: 279,
        image: "img/playera-09.jpg",
        description:
            "Diseño con frase inspiradora para el día a día.",
        sizes: ["CH", "M", "G", "XG"],
        colors: ["Negro", "Blanco"]
    },


    {
        id: 10,
        name: "Retro Club",
        category: "Fútbol",
        price: 349,
        image: "img/playera-10.jpg",
        description:
            "Diseño con inspiración retro estilo club de fútbol.",
        sizes: ["CH", "M", "G", "XG", "2XG"],
        colors: ["Negro", "Blanco", "Rojo"]
    },


    {
        id: 11,
        name: "Minimal Line",
        category: "Nuevos",
        price: 299,
        image: "img/playera-11.jpg",
        description:
            "Diseño minimalista con líneas simples y estilo moderno.",
        sizes: ["CH", "M", "G", "XG"],
        colors: ["Negro", "Blanco"]
    },


    {
        id: 12,
        name: "Doble Cara",
        category: "Personalizadas",
        price: 379,
        image: "img/playera-12.jpg",
        description:
            "Playera personalizada con diseño al frente y espalda.",
        sizes: ["CH", "M", "G", "XG", "2XG"],
        colors: ["Negro", "Blanco", "Azul"]
    },


    {
        id: 13,
        name: "Gignac",
        category: "Fútbol",
        price: 220,
        image: "img/playera-13.jpg",
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
        description:
            "Playera personalizada de Nahuel.",
        sizes: ["M", "G", "XG"],
        colors: ["Negro"]
    }

];



/* =========================================================
   ELEMENTOS
========================================================= */

const productsGrid =
    document.getElementById("productsGrid");


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



/* =========================================================
   ESTADO
========================================================= */

let currentCategory = "Todos";



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
   MOSTRAR PRODUCTOS
========================================================= */

function renderProducts() {

    const search =
        searchInput.value
            .toLowerCase()
            .trim();


    const filteredProducts =
        products.filter(
            product => {


                const matchesCategory =
                    currentCategory === "Todos" ||
                    product.category === currentCategory;


                const matchesSearch =
                    product.name
                        .toLowerCase()
                        .includes(search);


                return (
                    matchesCategory &&
                    matchesSearch
                );

            }
        );


    productsGrid.innerHTML = "";


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

                    Desde $${product.price} MXN

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


                renderProducts();

            }
        );

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


    modalTitle.textContent =
        product.name;


    modalCategory.textContent =
        product.category;


    modalPrice.textContent =
        `Desde $${product.price} MXN`;


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
   ESC
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);



/* =========================================================
   INICIAR
========================================================= */

renderProducts();
