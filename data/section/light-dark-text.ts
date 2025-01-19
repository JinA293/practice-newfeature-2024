// sectionData.ts
export const lightdark = 
  {
    title: "light-dark()",
    htmlCode: `
      <p>
        Color-scheme to use:
        <select name="color-scheme" id="color-scheme">
          <option value="light">light</option>
          <option value="dark">dark</option>
        </select>
      </p>

<div id="demo">Use the dropdown to control the <code>color-scheme</code> applied to this element. The system colors adapt themselves to the chosen value.</div>


    `,
// <div class="row gap align-top">
//   Dark Mode Setting:
//   <label><input name="color-scheme" type="radio" value="light dark" checked> System</label>
//   <label><input name="color-scheme" type="radio" value="light"> Forced Light</label>
//   <label><input name="color-scheme" type="radio" value="dark"> Forced Dark</label>
// </div>

// <p>Use your operating system’s preferences to <mark>switch between light and dark mode</mark>, or use one of the options to force a mode</p>
    cssCode: `
          html {
            color-scheme: light dark;
          }

          #demo {
            color: CanvasText;
            background: canvas;
          }

          body:has(#color-scheme option[value="light"]:checked) #demo {
            color-scheme: light;
          }
          body:has(#color-scheme option[value="dark"]:checked) #demo{
            color-scheme: dark;
          }
    `,
  };