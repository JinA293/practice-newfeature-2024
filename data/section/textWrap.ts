export const textWrap = {
  title: "Text Wrap",
  htmlCode: `
    <div class="text-wrap">
      <p>
        Text-wrap property to use:
        <select name="color-scheme" id="text-wrap">
          <option value="wrap">wrap</option>
          <option value="nowrap">nowrap</option>
          <option value="balance">balance</option>
          <option value="pretty">pretty</option>
          <option value="stable">stable</option>
        </select>
      </p>
      <div id="demo">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </div>
    </div>
  `,
  cssCode: `
    .text-wrap {
      width: 100%;
      font-size: 1rem;
    }

    .text-wrap #demo {
      font-size: 1.2rem;
    }

    .text-wrap body {
      display: grid;
      place-content: center;
      height: 100vh;
      margin: 0;
    }

    body:has(#text-wrap option[value="wrap"]:checked) #demo {
      text-wrap: wrap;
    }
    
    body:has(#text-wrap option[value="nowrap"]:checked) #demo {
      text-wrap: nowrap;
    }

    body:has(#text-wrap option[value="balance"]:checked) #demo {
      text-wrap: balance;
    }

    body:has(#text-wrap option[value="pretty"]:checked) #demo {
      text-wrap: pretty;
    }

    body:has(#text-wrap option[value="stable"]:checked) #demo {
      text-wrap: stable;
    }
  `,
};