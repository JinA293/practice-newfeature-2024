// sectionData.ts
export const rubyalign = 
  {
    title: "ruby-align",
    htmlCode: `
      <ruby>
        <rb>確認用の長いテキスト</rb>
        <rp>（</rp><rt>短いルビ</rt><rp>）</rp>
      </ruby>
      <select name="color-scheme" id="ruby-align">
        <option value="start">start</option>
        <option value="center">center</option>
        <option value="space-between">space-between</option>
        <option value="space-around">space-around</option>
      </select>
    `,
    cssCode: `
    body:has(#ruby-align option[value="start"]:checked) {
      ruby-align: start;
    }
    
    body:has(#ruby-align option[value="center"]:checked) {
      ruby-align: center;
    }

    body:has(#ruby-align option[value="space-between"]:checked) {
      ruby-align: space-between;
    }

    body:has(#ruby-align option[value="space-around"]:checked) {
      ruby-align: space-around;
    }
      
    `,
  };
