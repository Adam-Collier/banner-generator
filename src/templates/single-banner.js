export default (state) => {
  return `
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
    <picture>
      <source
        type="image/webp"
        media="(max-width: 767px)"
        sizes="(max-width: 767px) 100vw"
        data-srcset="${
          state.mobileImage
        }.webp?bg=rgb(254,245,240)&w=300&qlt=60&fmt.jpeg.interlaced=true&upscale=false 300w,
              ${
                state.mobileImage
              }.webp?bg=rgb(254,245,240)&w=402&qlt=60&fmt.jpeg.interlaced=true&upscale=false 402w,
              ${
                state.mobileImage
              }.webp?bg=rgb(254,245,240)&w=491&qlt=60&fmt.jpeg.interlaced=true&upscale=false 491w,
              ${
                state.mobileImage
              }.webp?bg=rgb(254,245,240)&w=569&qlt=60&fmt.jpeg.interlaced=true&upscale=false 569w,
              ${
                state.mobileImage
              }.webp?bg=rgb(254,245,240)&w=639&qlt=60&fmt.jpeg.interlaced=true&upscale=false 639w,
              ${
                state.mobileImage
              }.webp?bg=rgb(254,245,240)&w=711&qlt=60&fmt.jpeg.interlaced=true&upscale=false 711w,
              ${
                state.mobileImage
              }.webp?bg=rgb(254,245,240)&w=756&qlt=60&fmt.jpeg.interlaced=true&upscale=false 756w,
              ${
                state.mobileImage
              }.webp?bg=rgb(254,245,240)&w=767&qlt=60&fmt.jpeg.interlaced=true&upscale=false 767w"
      />
      <source
        media="(max-width: 767px)"
        sizes="(max-width: 767px) 100vw"
        data-srcset="${
          state.mobileImage
        }?bg=rgb(254,245,240)&w=300&qlt=60&fmt.jpeg.interlaced=true&upscale=false 300w,
              ${
                state.mobileImage
              }?bg=rgb(254,245,240)&w=402&qlt=60&fmt.jpeg.interlaced=true&upscale=false 402w,
              ${
                state.mobileImage
              }?bg=rgb(254,245,240)&w=491&qlt=60&fmt.jpeg.interlaced=true&upscale=false 491w,
              ${
                state.mobileImage
              }?bg=rgb(254,245,240)&w=569&qlt=60&fmt.jpeg.interlaced=true&upscale=false 569w,
              ${
                state.mobileImage
              }?bg=rgb(254,245,240)&w=639&qlt=60&fmt.jpeg.interlaced=true&upscale=false 639w,
              ${
                state.mobileImage
              }?bg=rgb(254,245,240)&w=711&qlt=60&fmt.jpeg.interlaced=true&upscale=false 711w,
              ${
                state.mobileImage
              }?bg=rgb(254,245,240)&w=756&qlt=60&fmt.jpeg.interlaced=true&upscale=false 756w,
              ${
                state.mobileImage
              }?bg=rgb(254,245,240)&w=767&qlt=60&fmt.jpeg.interlaced=true&upscale=false 767w"
      />
      <source
        type="image/webp"
        sizes="(min-width: 768px) 100vw"
        data-srcset="${
          state.desktopImage
        }.webp?bg=rgb(254,245,240)&w=768&qlt=60&fmt.jpeg.interlaced=true&upscale=false 768w,
              ${
                state.desktopImage
              }.webp?bg=rgb(254,245,240)&w=937&qlt=60&fmt.jpeg.interlaced=true&upscale=false 937w,
              ${
                state.desktopImage
              }.webp?bg=rgb(254,245,240)&w=1086&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1086w,
              ${
                state.desktopImage
              }.webp?bg=rgb(254,245,240)&w=1226&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1226w,
              ${
                state.desktopImage
              }.webp?bg=rgb(254,245,240)&w=1353&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1353w,
              ${
                state.desktopImage
              }.webp?bg=rgb(254,245,240)&w=1474&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1474w,
              ${
                state.desktopImage
              }.webp?bg=rgb(254,245,240)&w=1582&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1582w,
              ${
                state.desktopImage
              }.webp?bg=rgb(254,245,240)&w=1686&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1686w,
              ${
                state.desktopImage
              }.webp?bg=rgb(254,245,240)&w=1792&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1792w,
              ${
                state.desktopImage
              }.webp?bg=rgb(254,245,240)&w=1905&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1905w"
        alt="image failed"
      />
      <source
        media="(min-width: 768px)"
        sizes="(min-width: 768px) 100vw"
        data-srcset="${
          state.desktopImage
        }?bg=rgb(254,245,240)&w=768&qlt=60&fmt.jpeg.interlaced=true&upscale=false 768w,
              ${
                state.desktopImage
              }?bg=rgb(254,245,240)&w=937&qlt=60&fmt.jpeg.interlaced=true&upscale=false 937w,
              ${
                state.desktopImage
              }?bg=rgb(254,245,240)&w=1086&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1086w,
              ${
                state.desktopImage
              }?bg=rgb(254,245,240)&w=1226&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1226w,
              ${
                state.desktopImage
              }?bg=rgb(254,245,240)&w=1353&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1353w,
              ${
                state.desktopImage
              }?bg=rgb(254,245,240)&w=1474&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1474w,
              ${
                state.desktopImage
              }?bg=rgb(254,245,240)&w=1582&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1582w,
              ${
                state.desktopImage
              }?bg=rgb(254,245,240)&w=1686&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1686w,
              ${
                state.desktopImage
              }?bg=rgb(254,245,240)&w=1792&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1792w,
              ${
                state.desktopImage
              }?bg=rgb(254,245,240)&w=1905&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1905w"
        alt="image failed"
      />
      <img
        class="lazyload"
        data-expand="-50"
        data-src="${
          state.desktopImage
        }?bg=rgb(254,245,240)&w=1920&qlt=60&fmt.jpeg.interlaced=true&upscale=false"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMTM0Ij48ZGVmcy8+PGZpbHRlciBpZD0icHJlZml4X19hIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI1NSIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiM2NjY5NTUiLz48ZyBmaWx0ZXI9InVybCgjcHJlZml4X19hKSI+PGcgZmlsbC1vcGFjaXR5PSIuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjYgLjYpIHNjYWxlKDEuMTcxODgpIj48ZWxsaXBzZSBmaWxsPSIjZWNmZjVlIiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KDI1Ljk5MDE4IC0yNi41NDU5IDMyLjQxNzMgMzEuNzM4NjUgMTMyIDY1LjkpIi8+PGVsbGlwc2UgZmlsbD0iIzEzMTAyMiIgcng9IjEiIHJ5PSIxIiB0cmFuc2Zvcm09Im1hdHJpeCg1OS44OTUyMiAtMTQuMjY5MDUgOS4yMzE3MiAzOC43NTA3MiAyMTguNSAzMS45KSIvPjxlbGxpcHNlIGZpbGw9IiNmZmYiIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJyb3RhdGUoMTUuMiAtMjI0IDEwMDEuNikgc2NhbGUoMTMuMjc1MDggMTA1LjQ4MjgzKSIvPjxlbGxpcHNlIGZpbGw9IiMwMDAwMDUiIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJtYXRyaXgoLTI0LjUyMTE1IDE2LjYxMDk3IC05Ljg4Mzg2IC0xNC41OTA1OCAzNy4xIDkpIi8+PHBhdGggZmlsbD0iIzE4MTYyOCIgZD0iTTQxIDYwbDExMyA2Ni0xNzAtMjl6Ii8+PGVsbGlwc2UgY3k9IjIwIiBmaWxsPSIjZWZlY2ZmIiByeD0iMTAiIHJ5PSIzMSIvPjxlbGxpcHNlIGZpbGw9IiM5ZTljYWUiIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJtYXRyaXgoMjcuODA0MTMgNDQuNjY5MiAtMTcuNDM2OCAxMC44NTM0NSAyMTguNyAxMTMuMSkiLz48ZWxsaXBzZSBmaWxsPSIjMDkwNzE3IiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KC0xMS4xMTE0NiAxNC40ODA3NCAtMjcuMjk1MiAtMjAuOTQ0MzQgOTkuMSAxLjEpIi8+PC9nPjwvZz48L3N2Zz4="
        alt="backup"
      />
    </picture>
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
