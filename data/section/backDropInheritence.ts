// sectionData.ts
export const backDropInheritence = 
  {
    title: "BackDropInheritence",
    htmlCode: `
      <button>Show Dialog</button>

<dialog>
  <h1>I am the dialog!</h1>
  <p>As of Chrome 122 my backdrop is light purple, because from that version on the <code>::backdrop</code> inherits any inheritable properties–including custom properties–from the <code>dialog</code> element.</p>
  <form method="dialog"><button>Close</button></form>
</dialog>
    `,
    cssCode: `
          dialog {
  --border-color: #6300ff;
  --backdrop-color: #6300ff33; /* Could also use relative color syntax here :) */
}

::backdrop {
  background-color: var(--backdrop-color); /* This works as of Chrome 122 */
}

    `,
  };
