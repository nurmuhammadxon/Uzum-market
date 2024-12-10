let main = document.getElementById('main')
let karzinkaBtn = document.getElementById('karzinka')
let swiperBannerBox = document.getElementById('swiper-banner')
let karzinkaBox = document.createElement('div')
let shop__btn = document.getElementById

karzinkaBox.classList.add('karzinka-container')

function BoshQuti() {

    karzinkaBtn.addEventListener('click', () => {
        karzinkaBox.innerHTML = `
        <div class="karzinka-container">
            <img src="./Images/uzumContainer/mushuk.png" alt="Savat bo'sh">
            <h2 class="karzinka-title">
                Savatingiz hozircha bo‘sh
            </h2>
            <p class="karzinka-text">
                Bosh sahifadan boshlang — kerakli tovarni qidiruv orqali topishingiz yoki to‘plamlarni ko‘rishingiz mumkin
            </p>
            <button class="karzinka-btn">
                Bosh sahifa
            </button>
        </div>
    `;
        swiperBannerBox.classList.add('hidden');
        if (!main.contains(karzinkaBox)) {
            main.prepend(karzinkaBox);
        }
    });


    karzinkaBox.addEventListener('click', (e) => {
        if (e.target.classList.contains('karzinka-btn')) {
            swiperBannerBox.classList.remove('hidden');
            karzinkaBox.remove();
        }
    });

}

function shopProduct() {
    karzinkaBox.innerHTML = ''

}

BoshQuti()