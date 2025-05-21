let sale = document.getElementById("sale");
const swiper = new Swiper(".swiper", {
  effect: "coverflow",
  slidesPerView: "auto",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 2.5,
    slideShadows: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
let newPrice = [100, 150, 120, 180, 200, 250, 300, 350];
let oldPrice = [200, 250, 220, 280, 400, 450, 500, 550];
let newCard = "";
for (let i = 0; i < 8; i++) {
  newCard += `
            <div class="card swiper-slide d-flex  align-items-center " >
              <img src="./images/photo_${
                i + 11
              }.png" class="card-img-top"style="height :150px" alt="..." />
              <div class="card-body">
                <h4 class="card-title">New Model</h4>
                <div>
                <b class="card-text " >
                ${newPrice[i]} $
                </b>
                <del>${oldPrice[i]} $</del>
                </div>
                <button class="btn  btn-outline-secondary "style="color:black; ">Shop Now</button>
              </div>
            </div>
        `;
}
sale.innerHTML = newCard;
