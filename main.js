const data = [ 
    { title: "Crack Com Mussilon", url: "https://www.youtube.com/watch?v=nXswujXzMnk&list=PLEd-urvJlSm89c-7UkUT2jN2vZMhJ1Jfb&index=1&pp=iAQB8AUB" },
    { title: "Imagina esse Cenário", url: "https://www.youtube.com/watch?v=Leep9KouXMo&list=PLEd-urvJlSm89c-7UkUT2jN2vZMhJ1Jfb&index=2&pp=iAQB8AUB" },
    { title: "Isso é sério", url: "https://www.youtube.com/watch?v=d-6DzlhlBxA&list=PLEd-urvJlSm89c-7UkUT2jN2vZMhJ1Jfb&index=3&pp=iAQB8AUB" },
    { title: "1993", url: "https://www.youtube.com/watch?v=gyVmdwtvKwg&list=PLEd-urvJlSm89c-7UkUT2jN2vZMhJ1Jfb&index=4&pp=iAQB8AUB" },
    { title: "4Tal", url: "https://www.youtube.com/watch?v=mr_AunTy2pk&list=PLEd-urvJlSm89c-7UkUT2jN2vZMhJ1Jfb&index=5&pp=iAQB8AUB" },
    { title: "O Som", url: "https://www.youtube.com/watch?v=T-h3O3djG9U&list=PLEd-urvJlSm89c-7UkUT2jN2vZMhJ1Jfb&index=6&pp=iAQB8AUB" },
    { title: "04AM", url: "https://www.youtube.com/watch?v=lcA7Pu9W_y0&list=PLEd-urvJlSm89c-7UkUT2jN2vZMhJ1Jfb&index=7&pp=iAQB8AUB" },
    { title: "Castlevania", url: "https://www.youtube.com/watch?v=9Zs5sA3FPbM&list=PLEd-urvJlSm89c-7UkUT2jN2vZMhJ1Jfb&index=8&pp=iAQB8AUB" },
    { title: "V de Vilão", url: "https://www.youtube.com/watch?v=G2i2419OHwY&list=PLEd-urvJlSm89c-7UkUT2jN2vZMhJ1Jfb&index=9&pp=iAQB8AUB" },
    { title: "Maria", url: "https://www.youtube.com/watch?v=-x2cE--r3L8&list=PLEd-urvJlSm89c-7UkUT2jN2vZMhJ1Jfb&index=10&pp=iAQB8AUB" },
    { title: "333", url: "https://www.youtube.com/watch?v=aq-DH4iwviE&list=PLEd-urvJlSm89c-7UkUT2jN2vZMhJ1Jfb&index=11&pp=iAQB8AUB" },
    { title: "Like This!", url: "https://www.youtube.com/watch?v=81z0TwCVyfs&list=PLEd-urvJlSm89c-7UkUT2jN2vZMhJ1Jfb&index=12&pp=iAQB8AUB" }
];

const cardContainer = document.querySelector(".card-container");
const searchInput = document.querySelector("#searchInput");

const displayData = (data) => {
    cardContainer.innerHTML = "";
    data.forEach((e) => {
        cardContainer.innerHTML += `
        <div class="card">
            <a href="${e.url}" target="_blank">
                <h3>${e.title}</h3>
            </a>
        </div>
        `;
    });
};

searchInput.addEventListener("keyup", (e) => {
    const search = data.filter((i) => i.title.toLowerCase().includes(e.target.value.toLowerCase()));
    displayData(search);
});

window.addEventListener("load", () => displayData(data));