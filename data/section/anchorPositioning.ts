export const anchorPositioning = {
  title: "Anchor Positioning",
  htmlCode: `
    <div class="AnchorPositioning">
      <div class="anchor">
        <img src="https://assets.codepen.io/2585/image_fx_.jpg" alt="a smiling sunny side up egg made of clay" />
      </div>
      <div class="positioned-element">
        Over-Easy
      </div>
    </div>
  `,
  cssCode: `
    .AnchorPositioning {
      padding: 3em;
      justify-items: center;
    }

    .AnchorPositioning .anchor {
      anchor-name: --over-easy;
      overflow: clip;
      border-radius: 30px;
      outline: 1px solid #0002;
      max-inline-size: min(50vw, 100px);
    }

    .AnchorPositioning .anchor img {
      display: flex;
      max-inline-size: 100%;
    }

    .AnchorPositioning .positioned-element {
      position: fixed;
      position-anchor: --over-easy;
      position-area: block-end;
      font-weight: bold;
      background: Canvas;
      color: CanvasText;
      padding: 1ch 2ch;
      border-radius: 1e3px;
      box-shadow: 0 5px 10px #0003;
    }

    .AnchorPositioning * {
      box-sizing: border-box;
      margin: 0;
    }

    .AnchorPositioning html {
      block-size: 100%;
      background: #eee;
    }

    .AnchorPositioning body {
      min-block-size: 100%;
      font-family: system-ui, sans-serif;
      display: grid;
      place-content: center;
    }
  `,
};