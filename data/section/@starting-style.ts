// sectionData.ts
export const atstartingstyle = 
  {
    title: "@starting-style",
    htmlCode: `
    <div class="atstartingstyle">
      <p><button>Add div</button></p>
    </div>
    `,
    cssCode: `
          .atstartingstyle div {
  transition: background-color 0.5s;
  background-color: transparent;
  
  display: inline-block;
  height: 2em;
  width: 2em;
  outline: 1px solid #ccc;
  margin: 0.5em;
  
  @starting-style {
    .atstartingstyle background-color: yellow;
  }
}
    `,
  };
