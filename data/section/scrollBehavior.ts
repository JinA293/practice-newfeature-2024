// sectionData.ts
export const scrollBehavior = {
  title: "scrollbehavior",
  htmlCode: `
    <div class="row gap align-top">
      scroll Mode Setting:
      <label><input name="scroll" type="radio" value="auto"> auto</label>
      <label><input name="scroll" type="radio" value="smooth" checked> smooth</label>
    </div>
    <nav class="navclass">
      <a class="aclass" href="#demo1">1</a>
      <a class="aclass" href="#demo2">2</a>
      <a class="aclass" href="#demo3">3</a>
    </nav>
    <div class="scroll-container">
      <div class="scroll-page" id="demo1">1</div>
      <div class="scroll-page" id="demo2">2</div>
      <div class="scroll-page" id="demo3">3</div>
    </div>
  `,
  cssCode: `
    :root {
      --scroll-behavior: smooth;
    }

    .scroll-container {
      scroll-behavior: var(--scroll-behavior);
    }

    :root:has(input[name="scroll"][value="auto"]:checked) {
      --scroll-behavior: auto;
    }

    :root:has(input[name="scroll"][value="smooth"]:checked) {
      --scroll-behavior: smooth;
    }
    .aclass {
      display: inline-block;
      width: 50px;
      text-decoration: underline;
    }
    .navclass,
    .scroll-container {
      display: block;
      margin: 0 auto;
      text-align: center;
    }
    .navclass {
      width: 339px;
      padding: 5px;
    }
    .scroll-container {
      height: 150px;
      overflow-y: scroll;
      scroll-behavior: var(--scroll-behavior);
    }
    .scroll-page {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      font-size: 5em;
    }
  `,
};
