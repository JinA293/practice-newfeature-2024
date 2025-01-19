// sectionData.ts
export const uservalid = {
  title: "user-valid",
  htmlCode: `
    <section class="section">
      <label class="label1">
        :valid
        <input type="email" required value="test@example.com" />
      </label>
      <label class="label1">
        :invalid
        <input type="email" required />
      </label>
    </section>
    <hr/>
    <section class="section">
      <label class="label2">
        :user-valid
        <input type="email" required value="test@example.com" />
      </label>
      <label class="label2">
        :user-invalid
        <input type="email" required />
      </label>
    </section>
  `,
  cssCode: `
    .section {
      display: flex;
      align-items: flex-end;
      height: 120px;
      gap: 20px;
    }

    .label1 {
      display: block;
      font-size: 1.5em;
      margin-bottom: 10px;
      &:has(input:valid) {
        color: green;
        &:before {
          content: "✔ ";
          font-size: 1.5em;
        }
      }
      &:has(input:invalid) {
        color: tomato;
        &:before {
          content: "❌ ";
          font-size: 1.1em;
        }
      }
      input {
        display: block;
        margin-top: 5px;
        padding: 10px;
        font-size: 1em;
        width: 100%;
        max-width: 300px;
        box-sizing: border-box;
      }
    }

    .label2 {
      display: block;
      font-size: 1.5em;
      margin-bottom: 10px;

      &:has(input:user-valid) {
        color: green;
        &:before {
          content: "✔ ";
          font-size: 1.5em;
        }
      }
      &:has(input:user-invalid) {
        color: tomato;
        &:before {
          content: "❌ ";
          font-size: 1.1em;
        }
      }
      input {
        display: block;
        margin-top: 5px;
        padding: 10px;
        font-size: 1em;
        width: 100%;
        max-width: 300px;
        box-sizing: border-box;
      }
    }
  `,
};