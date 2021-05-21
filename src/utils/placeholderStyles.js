export default () => /*CSS*/ `
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
`;