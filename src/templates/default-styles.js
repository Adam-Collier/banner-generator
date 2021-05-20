export default () => {
  return `
<style>
  @font-face{
    font-family:"Missguided";
    font-weight:700;
    src: url("https://static.missguided.co.uk/skin/frontend/mgresponsive/default/fonts/missguided/missguided-bold.woff2") 
    format("woff2");
  }
  body {
    font-family: "Missguided",Arial,sans-serif;
    font-weight: 700;
    margin: 0;
   }
   a:hover,
   a:visited {
    text-decoration:none
   }
   #homeSlider {
    position:relative
   }
   #homeSlider-nav {
    font-weight:700;
    z-index:5;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
    -ms-flex-direction:column;
    flex-direction:column;
    -webkit-box-align:start;
    -ms-flex-align:start;
    align-items:flex-start
   }
   .row {
    position:relative;
    width:100%;
    overflow:hidden;
    height:auto
   }
   .row img,
   .row picture {
    width:100%;
    height:auto
   }
   .banner_content {
    position:absolute;
    width:80%;
    top:50%;
    left:50%;
    -webkit-transform:translate(-50%, -50%);
    transform:translate(-50%, -50%)
   }
   .banner_content svg {
    display:block;
    margin:0 auto
   }
   @media (min-width: 768px) {
    .row .button {
     background:#ffffff;
     color:#323232;
     border-color:#ffffff;
     margin-top:45px
    }
    #homeSlider-nav {
     position:absolute;
     top:6%;
     left:2%;
     font-size:5vw
    }
    #homeSlider-nav a {
     color:#fff;
     text-shadow:0 0 8px rgba(0,0,0,0.15);
     font-size:calc(12px + 1vw);
     -webkit-transition:all ease 300ms;
     transition:all ease 300ms
    }
    #homeSlider-nav a:hover {
     color:rgba(250,250,250,0.8);
     text-shadow:0 0 8px rgba(0,0,0,0.1)
    }
    .subtitle1 {
     margin:35px auto 0
    }
   }
   @media only screen and (max-width: 767px) {
    .row {
     margin-bottom:18vw
    }
    #homeSlider {
     display:-webkit-box;
     display:-ms-flexbox;
     display:flex;
     -webkit-box-orient:vertical;
     -webkit-box-direction:normal;
     -ms-flex-direction:column;
     flex-direction:column
    }
    #homeSlider div:nth-child(n+3) {
     -webkit-box-ordinal-group:3;
     -ms-flex-order:2;
     order:2
    }
    #homeSlider-nav:not(:empty) {
     position:relative;
     -webkit-box-align:center;
     -ms-flex-align:center;
     align-items:center;
     font-size:30px;
     -webkit-box-ordinal-group:2;
     -ms-flex-order:1;
     order:1
    }
    #homeSlider-nav:not(:empty) a:not(:empty) {
     padding-bottom:6px;
     display:block
    }
    #homeSlider-nav:not(:empty) a:not(:empty):nth-last-child() {
     margin-bottom:18vw
    }
    .row img,
    .row picture {
     width:100%;
     height:auto;
     min-height:100vw
    }
    .row img {
     margin-bottom:3%
    }
    .banner_content {
     margin:0;
     position:relative;
     width:100%;
     background:0 0
    }
    .banner_content {
     left:0;
     height:auto;
     background:transparent;
     -webkit-transform:none;
     transform:none;
     -webkit-transform:translate(0, 0);
     transform:translate(0, 0)
    }
    .banner_content * {
     color:#333232
    }
   }
   .imgContainer {
    width:100%
   }
   @media (min-width: 960px) {
    .slick-three .slick-slide {
     padding:0 20px
    }
    .slick-three a {
     display:-webkit-box;
     display:-ms-flexbox;
     display:flex;
     -webkit-box-orient:vertical;
     -webkit-box-direction:normal;
     -ms-flex-direction:column;
     flex-direction:column;
     -webkit-box-align:center;
     -ms-flex-align:center;
     align-items:center
    }
    .imgContainer {
     margin-bottom:1.5em
    }
   }
   @media (min-width: 768px) and (max-width: 960px) {
    .slick-three {
     width:95%
    }
    .slick-three .slick-slide {
     padding:0 10px
    }
    .slick-three .imgContainer {
     margin-bottom:1.2em
    }
    .slick-three .title3 {
     font-size:1.6em
    }
    .slick-three .subtitle3 {
     font-size:1em
    }
   }
   @media (max-width: 767px) {
    .slick-three {
     padding:0 0 18vw 0
    }
    .slick-three img {
     width:100%;
     -ms-flex-item-align:start;
     align-self:flex-start;
     max-width:75%;
     margin:0 auto 1em
    }
    .slick-three .slick-slide a {
     max-width:500px;
     margin:0 auto
    }
    .title-below {
     max-width:1000px;
     -webkit-transform:none;
     transform:none
    }
   }
   .slick-dotted.slick-slider {
    margin-bottom:0
   }
   .slick-next,
   .slick-prev {
    height:30px;
    top:37%
   }
   .slick-next:before,
   .slick-prev:before {
    content:""
   }
   .slick-next,
   .slick-next:focus,
   .slick-next:hover {
    background:url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 31 52' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;'%3e%3cpath d='M25.852,25.852l-21.089,-21.089l21.089,21.089Z' style='fill:none;stroke-width:5.5px;stroke:%23000;'/%3e%3cpath d='M25.852,25.852l-21.089,21.09' style='fill:none;stroke-width:5.5px;stroke:%23000;'/%3e%3c/svg%3e") no-repeat
   }
   .slick-prev,
   .slick-prev:focus,
   .slick-prev:hover {
    background:url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 31 52' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;'%3e%3cpath d='M4.763,25.852l21.089,-21.089l-21.089,21.089Z' style='fill:none;stroke-width:5.5px;stroke:%23000;'/%3e%3cpath d='M4.763,25.852l21.089,21.09' style='fill:none;stroke-width:5.5px;stroke:%23000;'/%3e%3c/svg%3e") no-repeat
   }
   .slick-slide,
   .slick-slide * {
    outline:0 !important
   }
   @media only screen and (min-width: 768px) {
    #homeSlider,
    .slick-three {
     visibility:hidden
    }
    #homeSlider.slick-initialized,
    .slick-three.slick-initialized {
     visibility:visible
    }
    .slick-dots {
     bottom:25px
    }
    .slick-dots li button {
     font-family:"slick"
    }
    .slick-dots li button:before {
     font-size:14px;
     line-height:14px;
     color:#404040;
     opacity:1
    }
    .slick-dots li.slick-active button:before {
     color:white
    }
    .slick-three {
     max-width:1000px;
     display:block;
     margin:0 auto;
     padding:60px 0
    }
   }
   @media only screen and (max-width: 767px) {
    .blocker {
     position:absolute;
     top:0;
     bottom:0;
     left:0;
     right:0;
     z-index:100
    }
    .slick-next,
    .slick-prev {
     top:37.5vw
    }
    .slick-next:before,
    .slick-prev:before {
     content:"";
     position:absolute;
     width:60px;
     height:100px;
     -webkit-transform:translateY(-50%);
     transform:translateY(-50%);
     background:transparent
    }
    .slick-next:before {
     top:50%;
     bottom:0;
     right:-10px
    }
    .slick-prev:before {
     top:50%;
     bottom:0;
     left:-10px
    }
    .slick-next {
     right:13px;
     z-index:2
    }
    .slick-prev {
     left:13px;
     z-index:2
    }
    .banner_content,
    .title-below {
     position:relative;
     width:100%
    }
    @-webkit-keyframes swipe {
     0% {
      -webkit-transform:translateX(0);
      transform:translateX(0)
     }
     40%,
     70% {
      -webkit-transform:translateX(-80px);
      transform:translateX(-80px)
     }
    }
    @keyframes swipe {
     0% {
      -webkit-transform:translateX(0);
      transform:translateX(0)
     }
     40%,
     70% {
      -webkit-transform:translateX(-80px);
      transform:translateX(-80px)
     }
    }
   }
   .cms-home .top-promos-wrapper,
   .flexslider--home-promos,
   .tracking {
    margin-bottom:0
   }
   .main-container,
   .top-promos-wrapper {
    max-width:100vw;
    padding-left:0;
    padding-right:0;
    margin-left:0;
    margin-right:0
   }
   .breadcrumbs {
    display:none
   }
   .main {
    padding-top:0
   }
   .footer-container {
    margin-top:0
   }
   a:hover,
   a:visited {
    text-decoration:none
   }
   img,
   video {
    -webkit-user-drag:none;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    max-width:100%
   }
   video::-webkit-media-controls {
    display:none !important
   }
   @media only screen and (max-width: 767px) {
    .main-container .main>:not(.toolbar-container) {
     -webkit-box-sizing:border-box;
     box-sizing:border-box;
     max-width:100vw;
     margin-left:auto;
     margin-right:auto;
     padding-left:0;
     padding-right:0
    }
    main {
     padding-top:0
    }
   }
   .container {
    line-height:1.45;
    text-align:center
   }
   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none
   }
   .capz {
    text-transform:uppercase
   }
   .longword {
    word-wrap:break-word
   }
   .title1 {
    font-size:48px;
    font-size:2em
   }
   .title2 {
    font-size:35px;
    font-size:1.44em
   }
   .title3 {
    font-size:24px;
    font-size:1.8em;
    margin-bottom:0.6em
   }
   .title3+.button {
    margin-top:25px
   }
   .title-below>.subtitle3:first-child {
    margin-top:8px
   }
   div+.subtitle3 {
    margin-top:50px
   }
   .subtitle1 {
    font-size:16px;
    display:block;
    margin:2% auto 0;
    max-width:700px;
    text-transform:none
   }
   .subtitle2 {
    font-size:14px;
    text-transform:none
   }
   .subtitle3 {
    font-size:1.2em;
    margin:0 0 0 0;
    text-transform:none
   }
   .container button.button {
    background:transparent;
    border:#323232 2px solid;
    color:#323232;
    -webkit-transition:all ease 300ms;
    transition:all ease 300ms;
    display:block;
    margin:20px auto 0 auto
   }
   .container button.button:hover {
    background:#323232;
    border:2px solid #323232;
    color:#ffffff
   }
   .container button.button.alt {
    background:#323232;
    border:2px solid #323232;
    color:#fff
   }
   .container button.button.alt:hover {
    background:white;
    border:2px solid white;
    color:#323232
   }
   .container button.button.alt2 {
    background:white;
    border:2px solid white;
    color:#323232
   }
   .container button.button.alt2:hover {
    background:#323232;
    border:2px solid #323232;
    color:#fff
   }
   .more-buttons {
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-pack:center;
    -ms-flex-pack:center;
    justify-content:center;
    -ms-flex-wrap:wrap;
    flex-wrap:wrap
   }
   @media only screen and (min-width: 768px) {
    .white {
     color:white
    }
    .hide-on-desk,
    .show-on-mob {
     display:none
    }
   }
   @media only screen and (max-width: 767px) {
    .title1 {
     font-size:1.9em;
     line-height:1.5em;
     margin:2% auto 0
    }
    .title2 {
     font-size:1.4em;
     line-height:1.4em
    }
    .title3 {
     font-size:1.8em;
     line-height:1.3em
    }
    .title3+.button {
     margin-top:20px
    }
    .title-below>.subtitle3:first-child {
     margin-top:18px
    }
    .title-below>.button:first-child {
     margin-top:26px
    }
    .title3,
    .subtitle1,
    .subtitle3 {
     max-width:80%;
     margin-left:auto;
     margin-right:auto;
     display:block
    }
    .title3 {
     margin-bottom:0.5rem
    }
    .hide-on-desk,
    .show-on-mob {
     display:block
    }
    .hide-on-mob,
    .show-on-desk {
     display:none
    }
    .container button.button {
     margin:20px auto 0 auto
    }
    .more-buttons {
     -ms-flex-wrap:nowrap;
     flex-wrap:nowrap
    }
   }
   .title1,
  .title3,
  .subtitle1,
  .subtitle3,
  .container .button {
    text-transform: none;
  }
  .row button.button {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  @media (min-width: 768px) {
    .row button.button {
      background: rgb(255, 255, 255);
      color: rgb(50, 50, 50);
      border-color: rgb(255, 255, 255);
    }
    .row svg {
      margin-bottom: 40px;
      filter: drop-shadow(rgba(0, 0, 0, 0.3) 0px 0px 10px);
    }
    .row .subtitle1 {
      margin-bottom: 20px;
      text-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
    }
    .row .banner_content {
      width: 100%;
    }
    .row1 .title1,
    .row2 .title1,
    .row3 .title1 {
      display: none;
    }
    .row .subtitle1 {
      margin-top: 20px;
    }
  }
  @media (max-width: 767px) {
    .row svg {
      display: none;
    }
    .row .banner_content {
      top: auto;
    }
  }
   </style>
  `;
};
