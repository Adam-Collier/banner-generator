export default (state) => {
  let mobileSizes = [300, 402, 491, 569, 639, 711, 756, 767];
  let desktopSizes = [768, 937, 1086, 1226, 1353, 1474, 1582, 1686, 1792, 1905];

  let imageTypes = ['webp', 'jpeg'];

  return /*HTML*/ `<div class="row fullwidth row-promo">
    <style>
        .row img.lazyload:not([src]) {
          visibility: hidden;
        }
        .row-placeholder {
            position: relative;
            overflow: hidden;
            height: 0;
            width: 100%;
            background-color: #ECECF2;
            padding-top: 44.79%;
        }

        .row img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            max-width: none;
            transform: translateZ(0);
            transition: opacity 0.5s linear;
            will-change: opacity;
        }

        @media(max-width: 767px){
            .row-placeholder {
                padding-top: 100%;
            }
        }
    </style>
    <a href="${state.url1}">
        <div class="row-placeholder">
        <picture>
            ${imageTypes
              .map(
                (type) => `
              <source
                type="image/${type}"
                data-srcset="${mobileSizes
                  .map(
                    (size) =>
                      `${state.mobileImage}.${type}?w=${size}&qlt=80 ${size}w`
                  )
                  .join(',')}"
                sizes="100vw"
                media="(max-width: 767px)"
              />
            `
              )
              .join('')}

            ${imageTypes
              .map(
                (type) => `
              <source
                type="image/${type}"
                data-srcset="${desktopSizes
                  .map(
                    (size) =>
                      `${state.desktopImage}.${type}?w=${size}&qlt=80 ${size}w`
                  )
                  .join(',')}"
                sizes="100vw"
              />
            `
              )
              .join('')}
            <img class="lazyload" data-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" alt="backup">
        </picture>
        </div>
        
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
