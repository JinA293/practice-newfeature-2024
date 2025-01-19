export const ScrollSnapEvents = {
  title: "ScrollSnapEvents",
  htmlCode: `
    <div class="ScrollSnapEvents">
      <scrolly-ruler>
        <ruler-indicator></ruler-indicator>
        <ruler-grid>
          <div data-ruler-value="0"></div>
          <span data-ruler-value="0.25"></span>
          <span data-ruler-value="0.5"></span>
          <span data-ruler-value="0.75"></span>
          <div data-ruler-value="1"></div>
          <span data-ruler-value="1.25"></span>
          <span data-ruler-value="1.5"></span>
          <span data-ruler-value="1.75"></span>
          <div data-ruler-value="2"></div>
          <span data-ruler-value="2.25"></span>
          <span data-ruler-value="2.5"></span>
          <span data-ruler-value="2.75"></span>
          <div data-ruler-value="3"></div>
          <span data-ruler-value="3.25"></span>
          <span data-ruler-value="3.5"></span>
          <span data-ruler-value="3.75"></span>
          <div data-ruler-value="4"></div>
          <span data-ruler-value="4.25"></span>
          <span data-ruler-value="4.5"></span>
          <span data-ruler-value="4.75"></span>
          <div data-ruler-value="5"></div>
          <span data-ruler-value="5.25"></span>
          <span data-ruler-value="5.5"></span>
          <span data-ruler-value="5.75"></span>
          <div data-ruler-value="6"></div>
          <span data-ruler-value="6.25"></span>
          <span data-ruler-value="6.5"></span>
          <span data-ruler-value="6.75"></span>
          <div data-ruler-value="7"></div>
          <span data-ruler-value="7.25"></span>
          <span data-ruler-value="7.5"></span>
          <span data-ruler-value="7.75"></span>
          <div data-ruler-value="8"></div>
          <span data-ruler-value="8.25"></span>
          <span data-ruler-value="8.5"></span>
          <span data-ruler-value="8.75"></span>
          <div data-ruler-value="9"></div>
          <span data-ruler-value="9.25"></span>
          <span data-ruler-value="9.5"></span>
          <span data-ruler-value="9.75"></span>
          <div data-ruler-value="10"></div>
          <span data-ruler-value="10.25"></span>
          <span data-ruler-value="10.5"></span>
          <span data-ruler-value="10.75"></span>
          <div data-ruler-value="11"></div>
          <span data-ruler-value="11.25"></span>
          <span data-ruler-value="11.5"></span>
          <span data-ruler-value="11.75"></span>
          <div data-ruler-value="12"></div>
        </ruler-grid>
      </scrolly-ruler> 
      <input type="number" name="ruler" min="0" max="12" step=".25" value="0">
    </div>
  `,
  cssCode: `
    .ScrollSnapEvents scrolly-ruler {
      width: clamp(90vw, 50vw, 12in);
      height: 1in;
      background: var(--surface-2);
      border-radius: var(--radius-3);
      box-shadow: var(--shadow-6);
      display: grid;
      grid-template-rows: auto 1fr;
      position: relative;
      overflow: clip;
      counter-set: --inches;
    }

    .ScrollSnapEvents scrolly-ruler > ruler-indicator {
      content: "";
      place-self: center;
      height: .2in;
      width: .2in;
      border-radius: var(--radius-1);
      background: var(--surface-4);
      place-self: start center;
      transform-origin: center;
      transform: translateX(-50%) rotateZ(.125turn) translateY(-75%);
      transition: background-color .3s ease;
    }

    .ScrollSnapEvents scrolly-ruler > ruler-grid {
      display: grid;
      grid-auto-flow: column;
      place-items: end;
      gap: calc(1in / 5);
      overflow-x: auto;
      overflow-y: hidden;
      overscroll-behavior-x: contain;
      scroll-behavior: smooth;
      touch-action: pan-x;
      scroll-snap-type: x mandatory;
      scrollbar-width: none;
    }

    .ScrollSnapEvents scrolly-ruler > ruler-grid::before,
    .ScrollSnapEvents scrolly-ruler > ruler-grid::after {
      content: "";
      display: inline-block;
      width: 80cqi;
    }

    .ScrollSnapEvents scrolly-ruler > ruler-grid > * {
      background: var(--gray-4);
      inline-size: 1px;
      scroll-snap-align: center;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
    }

    .ScrollSnapEvents scrolly-ruler > ruler-grid > div {
      background: var(--gray-5);
      inline-size: 2px;
      block-size: .25in;
      view-timeline-name: --inch-timeline;
      view-timeline-axis: x;
    }

    .ScrollSnapEvents scrolly-ruler > ruler-grid > div:not(:first-of-type) {
      counter-increment: --inches;
    }

    .ScrollSnapEvents scrolly-ruler > ruler-grid > div::before {
      display: inline-block;
      content: counter(--inches);
      position: relative;
      top: 0;
      left: 0;
      translate: -50% -1lh;
      transform-origin: bottom center;
      color: var(--text-2);
      font-size: var(--font-size-5);
      font-weight: 200;
      text-align: center;
    }

    .ScrollSnapEvents scrolly-ruler > ruler-grid > span {
      block-size: .1in;
      transition: background-color .3s ease, block-size .3s ease;
    }

    .ScrollSnapEvents scrolly-ruler > ruler-grid > span:nth-of-type(3n - 1) {
      block-size: .15in;
    }

    .ScrollSnapEvents scrolly-ruler > ruler-grid > span.has-target {
      block-size: .5in;
      background: var(--link);
    }

    .ScrollSnapEvents body {
      display: grid;
      place-content: center;
      place-items: center;
      padding: var(--size-5);
      gap: var(--size-5);
    }
  `,
};