export default (state) => {
  return `
<div class="row fullwidth row-split-banner">
  <style>
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
    <picture>
      <source
        type="image/webp"
        media="(max-width: 767px)"
        sizes="(max-width: 767px) 100vw"
        data-srcset="${state.mobileImage}.webp?bg=rgb(254,245,240)&w=300&qlt=60&fmt.jpeg.interlaced=true&upscale=false 300w,
              ${state.mobileImage}.webp?bg=rgb(254,245,240)&w=402&qlt=60&fmt.jpeg.interlaced=true&upscale=false 402w,
              ${state.mobileImage}.webp?bg=rgb(254,245,240)&w=491&qlt=60&fmt.jpeg.interlaced=true&upscale=false 491w,
              ${state.mobileImage}.webp?bg=rgb(254,245,240)&w=569&qlt=60&fmt.jpeg.interlaced=true&upscale=false 569w,
              ${state.mobileImage}.webp?bg=rgb(254,245,240)&w=639&qlt=60&fmt.jpeg.interlaced=true&upscale=false 639w,
              ${state.mobileImage}.webp?bg=rgb(254,245,240)&w=711&qlt=60&fmt.jpeg.interlaced=true&upscale=false 711w,
              ${state.mobileImage}.webp?bg=rgb(254,245,240)&w=756&qlt=60&fmt.jpeg.interlaced=true&upscale=false 756w,
              ${state.mobileImage}.webp?bg=rgb(254,245,240)&w=767&qlt=60&fmt.jpeg.interlaced=true&upscale=false 767w"
      />
      <source
        media="(max-width: 767px)"
        sizes="(max-width: 767px) 100vw"
        data-srcset="${state.mobileImage}?bg=rgb(254,245,240)&w=300&qlt=60&fmt.jpeg.interlaced=true&upscale=false 300w,
              ${state.mobileImage}?bg=rgb(254,245,240)&w=402&qlt=60&fmt.jpeg.interlaced=true&upscale=false 402w,
              ${state.mobileImage}?bg=rgb(254,245,240)&w=491&qlt=60&fmt.jpeg.interlaced=true&upscale=false 491w,
              ${state.mobileImage}?bg=rgb(254,245,240)&w=569&qlt=60&fmt.jpeg.interlaced=true&upscale=false 569w,
              ${state.mobileImage}?bg=rgb(254,245,240)&w=639&qlt=60&fmt.jpeg.interlaced=true&upscale=false 639w,
              ${state.mobileImage}?bg=rgb(254,245,240)&w=711&qlt=60&fmt.jpeg.interlaced=true&upscale=false 711w,
              ${state.mobileImage}?bg=rgb(254,245,240)&w=756&qlt=60&fmt.jpeg.interlaced=true&upscale=false 756w,
              ${state.mobileImage}?bg=rgb(254,245,240)&w=767&qlt=60&fmt.jpeg.interlaced=true&upscale=false 767w"
      />
      <source
        type="image/webp"
        sizes="(min-width: 768px) 100vw"
        data-srcset="${state.desktopImage}.webp?bg=rgb(254,245,240)&w=768&qlt=60&fmt.jpeg.interlaced=true&upscale=false 768w,
              ${state.desktopImage}.webp?bg=rgb(254,245,240)&w=937&qlt=60&fmt.jpeg.interlaced=true&upscale=false 937w,
              ${state.desktopImage}.webp?bg=rgb(254,245,240)&w=1086&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1086w,
              ${state.desktopImage}.webp?bg=rgb(254,245,240)&w=1226&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1226w,
              ${state.desktopImage}.webp?bg=rgb(254,245,240)&w=1353&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1353w,
              ${state.desktopImage}.webp?bg=rgb(254,245,240)&w=1474&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1474w,
              ${state.desktopImage}.webp?bg=rgb(254,245,240)&w=1582&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1582w,
              ${state.desktopImage}.webp?bg=rgb(254,245,240)&w=1686&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1686w,
              ${state.desktopImage}.webp?bg=rgb(254,245,240)&w=1792&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1792w,
              ${state.desktopImage}.webp?bg=rgb(254,245,240)&w=1905&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1905w"
        alt="image failed"
      />
      <source
        media="(min-width: 768px)"
        sizes="(min-width: 768px) 100vw"
        data-srcset="${state.desktopImage}?bg=rgb(254,245,240)&w=768&qlt=60&fmt.jpeg.interlaced=true&upscale=false 768w,
              ${state.desktopImage}?bg=rgb(254,245,240)&w=937&qlt=60&fmt.jpeg.interlaced=true&upscale=false 937w,
              ${state.desktopImage}?bg=rgb(254,245,240)&w=1086&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1086w,
              ${state.desktopImage}?bg=rgb(254,245,240)&w=1226&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1226w,
              ${state.desktopImage}?bg=rgb(254,245,240)&w=1353&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1353w,
              ${state.desktopImage}?bg=rgb(254,245,240)&w=1474&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1474w,
              ${state.desktopImage}?bg=rgb(254,245,240)&w=1582&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1582w,
              ${state.desktopImage}?bg=rgb(254,245,240)&w=1686&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1686w,
              ${state.desktopImage}?bg=rgb(254,245,240)&w=1792&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1792w,
              ${state.desktopImage}?bg=rgb(254,245,240)&w=1905&qlt=60&fmt.jpeg.interlaced=true&upscale=false 1905w"
        alt="image failed"
      />
      <img
        class="lazyload"
        data-expand="-50"
        data-src="${state.desktopImage}?bg=rgb(254,245,240)&w=1920&qlt=60&fmt.jpeg.interlaced=true&upscale=false"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMTM0Ij48ZGVmcy8+PGZpbHRlciBpZD0icHJlZml4X19hIj48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI1NSIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiM2YTY3NWYiLz48ZyBmaWx0ZXI9InVybCgjcHJlZml4X19hKSI+PGcgZmlsbC1vcGFjaXR5PSIuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjYgLjYpIHNjYWxlKDEuMTcxODgpIj48ZWxsaXBzZSBmaWxsPSIjZmZjN2UxIiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KDEyLjUzNSAxNy43Njk0OSAtMjcuODU0NzQgMTkuNjQ5MzYgNTYuOSA1My41KSIvPjxlbGxpcHNlIGN4PSIxODkiIGN5PSI1NSIgZmlsbD0iI2U0ZmYzZCIgcng9IjIzIiByeT0iMjgiLz48cGF0aCBmaWxsPSIjY2FjY2Q0IiBkPSJNMjcxIDEyMEwxNDAgOTFsMTMxLTEzeiIvPjxlbGxpcHNlIGZpbGw9IiMwNjA4MTAiIHJ4PSIxIiByeT0iMSIgdHJhbnNmb3JtPSJtYXRyaXgoLTQuMjY5ODIgLTk3LjQzNDM3IDE0LjE4MjE4IC0uNjIxNSAxMTMgMzEuOCkiLz48cGF0aCBmaWxsPSIjMTExNjEyIiBkPSJNMjcxLjUgNTEuM0wyMjIgNzUuNSAxODYuNSAyLjcgMjM2LTIxLjV6Ii8+PGVsbGlwc2Ugcng9IjEiIHJ5PSIxIiB0cmFuc2Zvcm09Im1hdHJpeCgtMjQuMzIyOTEgMTYuMzg3NCAtMTAuNzM5NTIgLTE1Ljk0MDA3IDM1LjMgNy42KSIvPjxwYXRoIGZpbGw9IiNmZmI2Y2IiIGQ9Ik0yMiA1Nmg3OXYyMkgyMnoiLz48ZWxsaXBzZSBmaWxsPSIjMTMxNTFhIiByeD0iMSIgcnk9IjEiIHRyYW5zZm9ybT0ibWF0cml4KC0xNy4zOTc2IDI2Ljk5NTc5IC0yMy41NzYyMiAtMTUuMTkzODQgOTUgMTEwKSIvPjwvZz48L2c+PC9zdmc+"
        alt="backup"
      />
    </picture>
    <a href="${state.url}"></a>
    <a href="${state.url2}"></a>
  </div>
</div>
    `;
};
