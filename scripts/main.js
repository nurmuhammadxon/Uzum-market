let swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

let popular__product__data = [
    {
        imge: './images/mashxur mahsulotlar/popular1.png',
        image__alt: "Xo'jalik o'simlik yo'gi",
        product__content: "Xo'jalik o'simlik yog'i",
        degree: "5.0",
        comment: "13",
        installmentPayment: "1 820 so'm/oyiga",
        old__price: "19 000 so'm",
        new__price: "14 000 so'm"
    },
    {
        imge: './images/mashxur mahsulotlar/popular2.png',
        image__alt: "Melek bug'doy uni",
        product__content: "Melek bug'doy unining birinchi navi, 1 kg",
        degree: "5.0",
        comment: "5",
        installmentPayment: "600 so'm/oyiga",
        old__price: "10 000 so'm",
        new__price: "5 000 so'm"
    },
    {
        imge: './images/mashxur mahsulotlar/popular3.png',
        image__alt: "Perla taglik",
        product__content: "Perla, bolalar uchun taglik",
        degree: "5.0",
        comment: "2",
        installmentPayment: "6 840 so'm/oyiga",
        old__price: "70 000 so'm",
        new__price: "57 000 so'm"
    },
    {
        imge: './images/mashxur mahsulotlar/popular4.png',
        image__alt: "Pepsi va Xurmo",
        product__content: "Pepsi va Xurmo, iftorlik uchun",
        degree: "4.7",
        comment: "34",
        installmentPayment: "2 640 so'm/oyiga",
        old__price: "26 000 so'm",
        new__price: "22 000 so'm"
    },
    {
        imge: './images/mashxur mahsulotlar/popular5.png',
        image__alt: "Zam Zam suv",
        product__content: "Zam Zam mineral suvi 200 ml",
        degree: "5.0",
        comment: "1",
        installmentPayment: "960 so'm/oyiga",
        old__price: "10 000 so'm",
        new__price: "8 000 so'm"
    },
    {
        imge: './images/mashxur mahsulotlar/popular6.png',
        image__alt: "Pegas sovun-krem",
        product__content: "Suyuq sovun-krem Pegas, 1 l",
        degree: "4.9",
        comment: "223",
        installmentPayment: "1 680 so'm/oyiga",
        old__price: "25 000 so'm",
        new__price: "14 000 so'm"
    },
    {
        imge: './images/mashxur mahsulotlar/popular7.png',
        image__alt: "Simsiz quloqchin",
        product__content: "Simsiz quloqchinlar",
        degree: "4.1",
        comment: "280",
        installmentPayment: "4 290 so'm/oyiga",
        old__price: "200 000 so'm",
        new__price: "33 000  so'm"
    },
    {
        imge: './images/mashxur mahsulotlar/popular8.png',
        image__alt: "Xurmolar",
        product__content: "Xurmolar Handa Kalootex sanalari, 450 yil",
        degree: "4.7",
        comment: "155",
        installmentPayment: "1 920 so'm/oyiga",
        old__price: "25 000 so'm",
        new__price: "16 000 so'm"
    },
    {
        imge: './images/mashxur mahsulotlar/popular9.png',
        image__alt: "Listlar",
        product__content: "Kompyuter uchun qog'ozlar",
        degree: "5.0",
        comment: "101",
        installmentPayment: "6 600 so'm/oyiga",
        old__price: "58 000 so'm",
        new__price: "55 000 so'm"
    },
    {
        imge: './images/mashxur mahsulotlar/popular10.png',
        image__alt: "Chak chak",
        product__content: `Chak-chak "Bol chak-chak" briketda, 165 g`,
        degree: "5.0",
        comment: "101",
        installmentPayment: "6 600 so'm/oyiga",
        old__price: "58 000 so'm",
        new__price: "55 000 so'm"
    },
    {
        imge: './images/mashxur mahsulotlar/popular11.png',
        image__alt: "Choy to'plami",
        product__content: `Greenfield choy to'plami 200g + krujka`,
        degree: "4.7",
        comment: "63",
        installmentPayment: "9 840 so'm/oyiga",
        old__price: "",
        new__price: "82 000 so'm"
    },
    {
        imge: './images/mashxur mahsulotlar/popular12.png',
        image__alt: "Parfyum",
        product__content: `Bushra Aqua parfyum, 100 ml`,
        degree: "4.0",
        comment: "150",
        installmentPayment: "10 010 so'm/oyiga",
        old__price: "150 000 so'm",
        new__price: "77 000 so'm"
    },
    {
        imge: './images/mashxur mahsulotlar/popular13.png',
        image__alt: "Nomoz uchun kiyim",
        product__content: `Namoz uchun erkaklar kiyimi`,
        degree: "5.0",
        comment: "1",
        installmentPayment: "21 000 so'm/oyiga",
        old__price: "273 000 so'm",
        new__price: "175 000 so'm"
    },
    {
        imge: './images/mashxur mahsulotlar/popular14.png',
        image__alt: "Qog'oz salfetkalar",
        product__content: `Qog'oz salfetkalar Esty, 23x24 sm, 100 dona`,
        degree: "5.0",
        comment: "61",
        installmentPayment: "360 so'm/oyiga",
        old__price: "4 000 so'm",
        new__price: "3 000 so'm"
    },
    {
        imge: './images/mashxur mahsulotlar/popular15.png',
        image__alt: "Bayram bezaklari",
        product__content: `Ramazon Karrem bayrami bezaklari`,
        degree: "5.0",
        comment: "6",
        installmentPayment: "6 890 so'm/oyiga",
        old__price: "85 000 so'm",
        new__price: "53 000 so'm"
    },
    {
        imge: './images/mashxur mahsulotlar/popular16.png',
        image__alt: "tish cho'tkasi",
        product__content: `tish cho'tkasi to'plamidagi bambuk tish cho'tkalari / 4 dona`,
        degree: "4.9",
        comment: "27",
        installmentPayment: "3 250 so'm/oyiga",
        old__price: "60 000 so'm",
        new__price: "25 000 so'm"
    },
    {
        imge: './images/mashxur mahsulotlar/popular17.png',
        image__alt: "tualet qog'ozi",
        product__content: `Esty hojatxona qog'ozi, 8 dona`,
        degree: "4.9",
        comment: "77",
        installmentPayment: "2 520 so'm/oyiga",
        old__price: "25 000 so'm",
        new__price: "21 000 so'm"
    },
    {
        imge: './images/mashxur mahsulotlar/popular18.png',
        image__alt: "Krem",
        product__content: `krem`,
        degree: "5.0",
        comment: "2",
        installmentPayment: "4 680 so'm/oyiga",
        old__price: "46 000 so'm",
        new__price: "39 000 so'm"
    },
    {
        imge: './images/mashxur mahsulotlar/popular19.png',
        image__alt: "Aqua prfyum",
        product__content: `Naseem Lamsa Aqua parfyumeriya spreyi, 30 ml`,
        degree: "4.8",
        comment: "8",
        installmentPayment: "6 370 so'm/oyiga",
        old__price: "90 000 so'm",
        new__price: "49 000 so'm"
    },
    {
        imge: './images/mashxur mahsulotlar/popular20.png',
        image__alt: "Krem",
        product__content: `Chang yutgich Bosch BGC21X300`,
        degree: "4.9",
        comment: "17",
        installmentPayment: "211 440 so'm/oyiga",
        old__price: "2 181 000 so'm",
        new__price: "1 762 000 so'm"
    },
]

function pressLike() {
    document.querySelectorAll('.product__item').forEach((item) => {
        const heart = item.querySelector('.bx-heart');
        const heartLike = item.querySelector('.bxs-heart');

        heart.addEventListener('click', () => {
            heart.classList.add('heart__hidden');
            heartLike.classList.remove('heart__hidden');
        });

        heartLike.addEventListener('click', () => {
            heartLike.classList.add('heart__hidden');
            heart.classList.remove('heart__hidden');
        });
    });
}


let product__list = document.querySelector('.product__list')

popular__product__data.forEach((product__item) => {
    product__list.innerHTML += `
     <div class="product__item">
                    <div class="product__image">
                        <div class="image__cover"></div>
                        <div class="image__box">
                            <img src="${product__item.imge}" alt="${product__item.image__alt}">
                        </div>
                        <div class="heart__box" onclick="pressLike()">
                            <i class='bx bx-heart heart'></i>
                            <i class='bx bxs-heart heart heart__hidden'></i>
                        </div>
                    </div>
                    <div class="product__content__box">
                        <div class="product__about__box">
                            <p class="conten__text">${product__item.product__content}</p>
                        </div>
                        <div class="degree__box">
                            <div class="degree__value__box">
                                <i class='bx bxs-star'></i>
                                <span class="degree__value">${product__item.degree}</span>
                            </div>
                            <div class="comment__box">
                                <span class="comment__number">
                                    (${product__item.comment} sharhlar)
                                </span>
                            </div>
                        </div>
                        <div class="installment__payment__box">
                            <span class="installment__payment">${product__item.installmentPayment}</span>
                        </div>
                        <div class="price__box">
                            <div class="product__price">
                                <span class="old__price">
                                    <del>${product__item.old__price}</del>
                                </span>
                                <span class="new__price">${product__item.new__price}</span>
                            </div>
                            <div class="shop__box">
                                <button class="shop__btn">
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8 10.3401V8.34009H6V12.8401C6 13.1162 5.77614 13.3401 5.5 13.3401C5.22386 13.3401 5 13.1162 5 12.8401V7.34009H8C8 4.93637 9.95227 3.34009 12 3.34009C14.0575 3.34009 16 5.04565 16 7.34009H19V19.8401C19 20.6685 18.3284 21.3401 17.5 21.3401H12.5C12.2239 21.3401 12 21.1162 12 20.8401C12 20.564 12.2239 20.3401 12.5 20.3401H17.5C17.7761 20.3401 18 20.1162 18 19.8401V8.34009H16V10.3401H15V8.34009H9V10.3401H8ZM12 4.34009C10.4477 4.34009 9 5.54381 9 7.34009H15C15 5.63453 13.5425 4.34009 12 4.34009Z"
                                            fill="#15151A" />
                                        <path
                                            d="M7.5 14.3401C7.77614 14.3401 8 14.564 8 14.8401V17.3401H10.5C10.7761 17.3401 11 17.564 11 17.8401C11 18.1162 10.7761 18.3401 10.5 18.3401H8V20.8401C8 21.1162 7.77614 21.3401 7.5 21.3401C7.22386 21.3401 7 21.1162 7 20.8401V18.3401H4.5C4.22386 18.3401 4 18.1162 4 17.8401C4 17.564 4.22386 17.3401 4.5 17.3401H7V14.8401C7 14.564 7.22386 14.3401 7.5 14.3401Z"
                                            fill="#15151A" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
  `
})

