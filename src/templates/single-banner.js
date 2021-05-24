import createPictureElement from '../utils/createPictureElement';

export default (state) => {
  return /*HTML*/ `
<div class="row fullwidth row-hero-banner-single">
  <style>
    .row-hero-banner-single a {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
    }

    .row-hero-single-banner-terms{
      position: absolute;
      bottom: 0.5rem;
      right: 0.5rem;
      font-size: 0.75rem;
      font-weight: bold;
      color: #000;
      margin: 0;
    }

    .row-hero-banner-single img {
        vertical-align: middle;
    }

    @media (min-width: 768px) {
      .row-hero-banner-single {
        position: relative;
      }

      .row-hero-banner-single .banner_content {
        display: none;
      }
    }

    @media(max-width: 767px) {
      .row-hero-banner-single img {
        margin-bottom: 0;
      }
    }
  </style>
  <div>
   ${createPictureElement(state)}
    <a href="${state.url1}"></a>
    ${
      state.terms
        ? `<p class="row-hero-single-banner-terms">${state.terms}</p>`
        : ``
    }
  </div>
</div>
    `;
};
