import createPictureElement from '../utils/createPictureElement';
import placeholderStyles from '../utils/placeholderStyles';

export default (state) => {
  return /*HTML*/ `
<div class="row fullwidth row-split-banner">
  <style>
    ${placeholderStyles()}

    @media (min-width: 768px) {
      .row-split-banner {
        position: relative;
      }

      .row-split-banner .banner_content {
        width: 100%;
        max-width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        position: relative;
      }

      .row-split-banner a:first-of-type {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 50%;
      }

      .row-split-banner a:last-of-type {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 50%;
      }
    }

    @media (max-width: 767px) {
      #homeSlider .row-split-banner {
        margin-bottom: 15vw !important;
      }

      .row-split-banner a:first-of-type {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: auto;
        height: 50%;
      }

      .row-split-banner a:last-of-type {
        position: absolute;
        top: auto;
        right: 0;
        left: 0;
        bottom: 0;
        height: 50%;
      }
    }
  </style>
  <div>
    ${createPictureElement(state)}
    <a href="${state.url1}"></a>
    <a href="${state.url2}"></a>
  </div>
</div>
    `;
};
