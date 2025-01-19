export const ThePopoverAPI = {
  title: "ThePopoverAPI",
  htmlCode: `
    <div class="ThePopoverAPI">
      <button popovertarget="my-popover">Open Popover</button>
      <div id="my-popover" popover>
        <p>I am a popover with more information. Hit <kbd>esc</kbd> or click away to close me.</p>
      </div>
    </div>
  `,
  cssCode: `
    .ThePopoverAPI button {
      font-size: 100%;
      padding: 0.75rem;
      background: white;
      transition-duration: 0.5s;
      border: 2px solid #ccc;
      border-radius: 0.5rem;
    }

    .ThePopoverAPI button:hover,
    .ThePopoverAPI button:focus {
      background: #ccc;
      color: black;
    }

    .ThePopoverAPI [popover] {
      background: #333;
      color: white;
      font-weight: 400;
      padding: 1rem 1.5rem;
      border-radius: 0.5rem;
      max-width: 20ch;
      line-height: 1.4;
      top: 2rem;
      margin: 0 auto;
      transition: translate 0.7s ease-out, display 0.7s ease-out allow-discrete, overlay 0.7s ease-out allow-discrete;
      translate: 0 -22rem;
    }

    .ThePopoverAPI [popover]:popover-open {
      translate: 0 0;
    }

    .ThePopoverAPI * {
      box-sizing: border-box;
    }

    .ThePopoverAPI body {
      display: grid;
      font-size: 1.5rem;
      font-family: system-ui, sans-serif;
      place-items: center;
      height: 100vh;
    }
  `,
};