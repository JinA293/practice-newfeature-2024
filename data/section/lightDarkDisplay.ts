export const lightdark = {
  title: "light-dark()",
  htmlCode: `
    <div class="light-dark">
      <div class="row gap align-top">
        Dark Mode Setting:
        <label><input name="color-scheme" type="radio" value="light dark"> System</label>
        <label><input name="color-scheme" type="radio" value="light" checked> Forced Light</label>
        <label><input name="color-scheme" type="radio" value="dark"> Forced Dark</label>
      </div>
    </div>
  `,
  cssCode: `
    :root {
      color-scheme: light dark;
      --primary-color: light-dark(#333, #fafafa);
      --primary-background: light-dark(#fefefe, #121212);
    }

    :root {
      &:has(input[name="color-scheme"][value="light dark"]:checked) {
        color-scheme: light dark;
      }
      &:has(input[name="color-scheme"][value="light"]:checked) {
        color-scheme: light;
      }
      &:has(input[name="color-scheme"][value="dark"]:checked) {
        color-scheme: dark;
      }
    }

    body {
      color: var(--primary-color);
      background-color: var(--primary-background);
      transition: color 0.4s, background-color 0.4s;
    }
  `,
};