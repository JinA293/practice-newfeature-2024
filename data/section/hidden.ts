export const hidden = {
  title: "hidden",
  htmlCode: `
  <div class="hidden">
    Click into this demo (without opening any sections) then use in-page-find to search for a word, such as "ginger":
    <div class="section collapsed">
      <h2 class="title">Introduction</h1>
        <div hidden="until-found" class="details">Green tea ginger lemongrass agave green tea guacamole summer fruit salad fruit smash pumpkin orange zesty tofu pad thai roasted butternut squash blueberry chia seed jam green papaya salad.</div>
    </div>

    <div class="section collapsed">
      <h2 class="title">Thesis</h1>
        <div hidden="until-found" class="details">Picnic chia seeds kale caesar salad elderberry fall Thai curry mocha chocolate appetizer mediterranean vegetables cranberry chickpea spritzer potato mediterranean luxury bowl edamame lemongrass citrusy crumbled lentils.</div>
    </div>

    <div class="section collapsed">
      <h2 class="title">Conclusion</h1>
        <div hidden="until-found" class="details">Oranges chili pepper delightful blueberry scones chickpea crust pizza cozy cinnamon oatmeal second course crispy iceberg lettuce tempeh. Quinoa flatbread arugula salad with earl grey latte strawberries leek blueberry pops golden cayenne pepper Italian pepperoncini shaved almonds salted picnic salad hemp seeds cilantro tahini drizzle cherry bomb mangos alfalfa sprouts spring.</div>
    </div>
  </div>
  `,
  cssCode: `
    .hidden body {
      font-family: system-ui, sans-serif;
      margin: 1em auto;
      max-width: 60em;
      padding: 1em;
    }

    .title {
      cursor: pointer;
    }
    .title::before {
      content: "⬇️ ";
    }
    .collapsed > .title::before {
      content: "➡️ ";
    }

    .details {
      max-width: 40em;
    }
  `,
};