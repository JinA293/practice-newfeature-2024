export const CustomScrollbars = {
  title: "Custom Scrollbars",
  htmlCode: `
    <div class="CustomScrollbars">
      <main>
        <div class="scroller">
          <div class="content">
            <p>CSS, short for Cascading Style Sheets, is a programming language that is used to describe the presentation or visual layout of a document written in HTML. It acts as a styling tool and enables web developers to control the appearance of their websites or web pages by specifying how different elements should be displayed on the screen. CSS allows designers to define various aspects such as font styles, colors, spacing between elements, background images, and much more.</p>
            <p>The term "cascading" in CSS refers to its ability to apply multiple stylesheets simultaneously and prioritize them based on their importance or specificity. This feature allows developers to create consistent designs across multiple web pages by defining common styles in an external stylesheet which can then be linked to all relevant HTML documents. Additionally, CSS makes it easy to update the design of an entire website by simply modifying one central stylesheet rather than having to manually edit each individual webpage.</p>
            <p>CSS can be applied directly within an HTML document using inline stylesheets or internally through embedded stylesheets within the head section of a page. However, it is considered best practice and more efficient from both maintenance and performance perspectives to use external style sheets stored separately in .css files which are then referenced within HTML documents.</p>
            <p>One important concept in CSS is selectors. Selectors allow you to target specific elements within your HTML markup so that you can apply different styles only where needed. Selectors can target tags (e.g., p, div), classes (e.g., .header), IDs (e.g., #main), attributes (e.g., [type="submit"]), pseudo-classes (e.g., :hover) and many other properties of DOM elements.</p>
            <p>Overall, CSS plays a crucial role in modern web development as it provides great flexibility and control over how content looks on websites. By separating style from structure with this powerful language, developers are able to create visually appealing websites while maintaining clean code that adheres to best practices for web accessibility and user experience.</p>
          </div>
        </div>
        <div id="controls">
          <label for="scrollbar-color-thumb">Thumb Color:</label>
          <input type="color" id="scrollbar-color-thumb" value="#FF69B4">
          <label for="scrollbar-color-track">Track Color:</label>
          <input type="color" id="scrollbar-color-track" value="#0000FF">
        </div>
      </main>
    </div>
  `,
  cssCode: `
    .CustomScrollbars .scroller {
      --scrollbar-color-thumb: #ff69b4;
      --scrollbar-color-track: #00f;
      --scrollbar-width: thin;
      --scrollbar-width-legacy: 0.5rem;
      border: 1px solid #000;
      width: 100%;
      height: 50vh;
      position: relative;
      overflow-y: auto;
      overscroll-behavior: contain;
    }

    .CustomScrollbars .scroller::-webkit-scrollbar-thumb {
      background: var(--scrollbar-color-thumb);
    }

    .CustomScrollbars .scroller::-webkit-scrollbar-track {
      background: var(--scrollbar-color-track);
    }

    .CustomScrollbars .scroller::-webkit-scrollbar {
      max-width: var(--scrollbar-width-legacy);
      max-height: var(--scrollbar-width-legacy);
    }

    .CustomScrollbars .content {
      min-height: 75vh;
      padding: 1rem;
    }

    .CustomScrollbars #controls {
      display: flex;
      gap: 1rem;
      padding: 1rem;
      justify-content: center;
    }

    .CustomScrollbars html,
    .CustomScrollbars body {
      height: 100%;
      margin: 0;
      padding: 0;
      font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-size: 20px;
      background: white;
    }

    .CustomScrollbars body {
      display: grid;
      place-content: center;
    }

    .CustomScrollbars main {
      max-width: 40em;
      width: 90vw;
    }

    .CustomScrollbars h1 {
      text-align: center;
    }
  `,
};