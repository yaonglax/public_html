import { bestOffer } from './bestOfferObject.js'
import { sliderObj } from './sliderObject.js';

const bestOfferList = document.querySelector('.best-offer-list')
const slider = document.querySelector('.slider-tasks')
const clientsObj = document.querySelector('.clients-list')

bestOfferList.innerHTML = bestOffer.map((el) => {
    return `<li class="li-mini wow fadeInLeft" ${el.id === 1 ? 'data-wow-delay="0.5s"' : ''}>
          <p class="title">${el.title}</p>
          <img src=${el.src} alt="" />
          <p class="text">${el.text}</p>
        </li>`
}).join('');

slider.innerHTML = sliderObj.map((el) => {
    return `<li>
					<div class="slider">
						<div class="big">
							<img src=${el.src} alt="" />
						</div>
					</div>
					<ul class="inform">
						${el.list.map((index) => {
                          return  `<li>${index}</li>`
                        }).join('')}
					</ul>
				</li>`
}).join('');

let clientsHTML = ''

for (let index = 1; index < 13; index++) {
    clientsHTML += `<li class="wow bounceIn" data-wow-duration="2s">
					<img src="./images/clients/${index}.jpg" alt="" />
				</li>`
    
}
clientsObj.innerHTML = clientsHTML
