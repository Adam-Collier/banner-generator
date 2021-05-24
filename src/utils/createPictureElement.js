import {MOBILE_SIZES, DESKTOP_SIZES, IMAGE_TYPES} from "../constants"

export default (state) => {
    let addTransformation = (size, type) => {
        let quality = 70

        if (type === 'jpeg') {
        return `w=${size}&qlt=${quality}&fmt.jpeg.interlaced=true&upscale=false`
        } else if (type === 'webp') {
        return `w=${size}&qlt=${quality}`
        }
    }

    return /*HTML*/ `
    <div class="img-placeholder">
        <picture>
            ${IMAGE_TYPES.map(
            (type) => `
                <source
                type="image/${type}"
                data-srcset="${MOBILE_SIZES.map(
                (size) => `${state.mobileImage}.${type}?${addTransformation(size, type)} ${size}w`
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
                    `${state.desktopImage}.${type}?${addTransformation(size, type)} ${size}w`
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