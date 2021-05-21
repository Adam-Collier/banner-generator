import {MOBILE_SIZES, DESKTOP_SIZES, IMAGE_TYPES} from "../constants"

export default (state) => {
    return /*HTML*/ `
    <div class="row-placeholder">
        <picture>
            ${IMAGE_TYPES.map(
            (type) => `
                <source
                type="image/${type}"
                data-srcset="${MOBILE_SIZES.map(
                (size) => `${state.mobileImage}.${type}?w=${size}&qlt=70 ${size}w`
                ).join(',')}"
                sizes="100vw"
                media="(max-width: 767px)"
                />
            `
            ).join('')}

            ${IMAGE_TYPES.map(
            (type) => `
                <source
                type="image/${type}"
                data-srcset="${DESKTOP_SIZES.map(
                (size) =>
                    `${state.desktopImage}.${type}?w=${size}&qlt=70 ${size}w`
                ).join(',')}"
                sizes="100vw"
                />
            `
            ).join('')}
            <img class="lazyload" data-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" alt="backup">
        </picture>
    </div>
    `;
}