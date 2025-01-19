export const relativeColor = {
  title: "relativecolor",
  htmlCode: `
<div class="origin-color">
  <code>blue</code>
</div>
<div class="relative-color">
  <code>oklch(from var(--originColor) calc(l - .25) c h)</code>
</div>
  `,
  cssCode: `
:root {
  --originColor: blue;
}
@layer demo {
  .origin-color {
    background: var(--originColor);
  }

    .relative-color {
    background: oklch(from var(--originColor) calc(l - .25) c h);
  }
} 
  .origin-color {
    color: white;
  }
  
  .relative-color {
    color: black;
    
    & > code {
      background: white;
      border-radius: 100px;
    }
  }
}
  `,
};