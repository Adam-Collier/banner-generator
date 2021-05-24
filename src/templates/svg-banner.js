import createPictureElement from "../utils/createPictureElement"

export default (state) => {

  return /*HTML*/ `<div class="row fullwidth row-promo">
    <a href="${state.url1}">
        ${createPictureElement(state)}
        <div class="banner_content center">
          ${state.svg && state.svg}
          ${state.title && `<h2 class="title1 white">${state.title}</h2>`}
          ${
            state.subtitle &&
            `<h4 class="subtitle1 white">${state.subtitle}</h4>`
          }
          <div class="more-buttons">
            ${state.cta1 && `<button class="button">${state.cta1}</button>`}
            ${
              state.cta2 &&
              `<a href="${state.url2}">
                <button class="button">${state.cta2}</button>
              </a>`
            }
          </div>
        </div>
      </a>
    </div>`;
};
