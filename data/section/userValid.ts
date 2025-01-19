// sectionData.ts
export const uservalid =
{
  title: "user-valid",
  htmlCode: `
    <section>
      <label class="label1">
        :valid
        <input type="email" required value="test@example.com" />
      </label>

      <label class="label1">
        :invalid
        <input type="email" required />
      </label>
    <section>
    <section>
      <label class="label2">
        :user-valid
        <input type="email" required value="test@example.com" />
      </label>

      <label class="label2">
        :user-invalid
        <input type="email" required />
      </label>
    <section>
    `,
  cssCode: `
    .label1{
      &:has(input:valid) {
        color: green;
        &:before {
          content: "✔";
        }
      }
      &:has(input:invalid) {
        color: tomato;
        &:before {
          content: "❌";
        }
      }
    }

    .label2 {
      &:has(input:user-valid) {
        color: green;
        &:before {
          content: "✔";
        }
      }
      &:has(input:user-invalid) {
        color: tomato;
        &:before {
          content: "❌";
        }
      }
    }
    `,
};
