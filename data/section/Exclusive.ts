// ref: https://coliss.com/articles/build-websites/operation/css/exclusive-accordion.html
// ref: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details

export const Exclusive = {
  title: "Exclusive",
  htmlCode: `
    <div class="Exclusive">
      <div class="course">
        <details name="learn-css">
          <summary>1列目</summary>
          <p>ウェイ</p>
        </details>
        <details name="learn-css">
          <summary>2列目</summary>
          <p>ウェイウェイ</p>
        </details>
        <details name="learn-css">
          <summary>3列目</summary>
          <p>ウェーイ</p>
        </details>
      </div>
    </div>
  `,
  cssCode: `
    .Exclusive,
    .Exclusive * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    .Exclusive {
      line-height: 1.5;
      font-size: 1em;
      background: white;
      padding: 0.5em;
    }

    .Exclusive .course details {
      border: 0.1em solid #000;
      overflow: hidden;
      margin: 0;
    }

    .Exclusive .course details a {
      display: inline-block;
      color: white;
      text-decoration: none;
      padding: 0.5em 0.7em;
      font-size: 0.8em;
      text-transform: uppercase;
    }

    .Exclusive details > summary {
      background: #ccc;
      padding: 0.3em;
      cursor: pointer;
      transition: background 0.25s ease, color 0.25s ease;
    }

    .Exclusive details > *:not(summary) {
      padding: 0.3em;
    }

    .Exclusive details:hover > summary,
    .Exclusive details:focus-visible > summary {
      background: #aaa;
    }

    .Exclusive details:has(+ details) {
      border-bottom: none;
    }

    .Exclusive details + details {
      border-top: none;
    }

    .Exclusive details:first-child {
      border-top-left-radius: 0.5em;
      border-top-right-radius: 0.5em;
    }

    .Exclusive details:not(:has(+ details)) {
      border-bottom-left-radius: 0.5em;
      border-bottom-right-radius: 0.5em;
    }

    .Exclusive details:not([open]) summary {
      border-bottom: 0;
    }
  `,
};