export const ThePopoverAPI = {
  title: "ThePopoverAPI",
  htmlCode: `
    <div class="ThePopoverAPI">
      <button popovertarget="my-popover">おしてー</button>
      <div id="my-popover" popover>
        <p>こんにちわー</p>
      </div>
    </div>
  `,
  cssCode: `
    .ThePopoverAPI {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 150px;
    }


    .ThePopoverAPI button {
      font-size: 1.5rem;
      padding: 1rem 2rem;
      background: #ff6f61;
      color: white;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: transform 0.3s;
    }

    .ThePopoverAPI button:hover,
    .ThePopoverAPI button:focus {
      background: #ff6f61;
      transform: scale(1.05);
    }

    .ThePopoverAPI [popover] {
      background:rgb(134, 97, 255);
      color: white;
      font-weight: 400;
      padding: 1rem 1.5rem;
      border-radius: 0.5rem;
      top: 2rem;
      margin: 0 auto;
      transition: translate 0.7s ease-out, display 0.7s ease-out allow-discrete, overlay 0.7s ease-out allow-discrete;
      translate: 0 -22rem;
      max-width: 25ch;
      line-height: 1.6;
      font-size: 1.5rem;
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