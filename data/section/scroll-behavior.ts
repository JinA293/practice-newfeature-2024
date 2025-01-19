// sectionData.ts
export const scrollbehavior = {
  title: "scrollbehavior",
  htmlCode: `
    <div class="row gap align-top">
      scroll Mode Setting:
      <label><input name="scroll" type="radio" value="auto"> auto</label>
      <label><input name="scroll" type="radio" value="smooth" checked> smooth</label>
    </div>
    <nav class="navclass">
      <a href="#demo1">1</a>
      <a href="#demo2">2</a>
      <a href="#demo3">3</a>
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

    .row {
      display: flex;
      gap: 10px;
      align-items: flex-start;
    }

    .navclass {
      display: flex;
      gap: 10px;
      margin-top: 20px;
    }

    .scroll-container {
      height: 150px;
      overflow-y: scroll;
      border: 1px solid #ccc;
      scroll-snap-type: x mandatory;
    }

    .scroll-page {
      height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
      font-size: 3em;
      scroll-snap-align: start;
    }
  `,
};
