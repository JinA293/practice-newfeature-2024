export const relativeColor = {
  title: "relativecolor",
  htmlCode: `
    <div class="origin-color">
      <code>origin</code>
    </div>
    <div class="relative-color">
      <code>relative</code>
    </div>
  `,
  cssCode: `
    :root {
      --originColor: blue;
    }
    @layer demo {
      .origin-color {
        background: var(--originColor);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .relative-color {
        background: oklch(from var(--originColor) calc(l - .25) c h);
        display: flex;
        align-items: center;
        justify-content: center;
      }
    } 
    .origin-color {
      color: white;
      height: 75px;
      font-size: 5em;
    }
    
    .relative-color {
      color: white;
      height: 75px;
      font-size: 5em;
    }
  `,
};