// sectionData.ts
export const Stylable = 
  {
    title: "Stylable",
    htmlCode: `
    <script>
document.documentElement.dataset.embed = window.location.search.includes('type=embed') ? "yep" : "nope";
</script>
      <div class="Stylable">
       

<main>
  <h1>Styling <code>&lt;details&gt;</code>: Horizontal Accordion</h1>

  <p class="warning">Your browser does not support <code>::details-content</code>, so this demo won’t work as intended. Please use a browser with support – such as Chrome 131 or newer – to check out this page.</p>

  <h2>Demo</h2>
  
  <div id="demo">
    <div class="accordion-wrapper">
      <details name="accordion" id="boating" open>
      <summary>
        <span>🚤</span>
        <img draggable=false src="https://raw.githubusercontent.com/kevin-powell/accordion/8551c559e3e8d9a9cca7a983c9e8903ef533f189/public/assets/boat.webp" alt="">
      </summary>
      <div class="details-content-wrapper">
        <h3>Boating</h3>
        <p>Port mutiny draught handsomely ye furl flogging line shrouds hulk. Spirits Plate Fleet code of conduct.</p>
      </div>
    </details>
    <details name="accordion" id="anchoring">
      <summary>
        <span>⚓️</span>
        <img draggable=false src="https://raw.githubusercontent.com/kevin-powell/accordion/8551c559e3e8d9a9cca7a983c9e8903ef533f189/public/assets/anchor.webp" alt="">
      </summary>
      <div class="details-content-wrapper">
        <h3>Anchoring</h3>
        <p>Ahoy league hands Sea Legs keelhaul salmagundi fire ship crimp Privateer galleon. Booty boom yard boatswain quarter.</p>
      </div>
    </details>
    <details name="accordion" id="fishing">
      <summary>
        <span>🎣</span>
        <img draggable=false src="https://raw.githubusercontent.com/kevin-powell/accordion/8551c559e3e8d9a9cca7a983c9e8903ef533f189/public/assets/fishing.webp" alt="">
      </summary>
      <div class="details-content-wrapper">
        <h3>Fishing</h3>
        <p>No prey, no pay heave down splice the main brace furl cable snow walk the plank chase guns piracy bucko.</p>
      </div>
    </details>
    <details name="accordion" id="lighthouses">
      <summary>
        <span>🔦</span>
        <img draggable=false src="https://raw.githubusercontent.com/kevin-powell/accordion/8551c559e3e8d9a9cca7a983c9e8903ef533f189/public/assets/lighthouse.webp" alt="">
      </summary>
      <div class="details-content-wrapper">
        <h3>Lighthouses</h3>
        <p>Deadlights squiffy salmagundi cable pinnace parrel topsail Corsair Arr mizzenmast.</p>
      </div>
    </details>
    <details name="accordion" id="reefs">
      <summary>
        <span>🪸</span>
        <img draggable=false src="https://raw.githubusercontent.com/kevin-powell/accordion/8551c559e3e8d9a9cca7a983c9e8903ef533f189/public/assets/reef.webp" alt="">
      </summary>
      <div class="details-content-wrapper">
        <h3>Reefs</h3>
        <p>Keel yard poop deck brigantine gaff six pounders bring a spring
          upon her cable interloper lad pink.</p>
      </div>
    </details>
    </div>
  </div>

  <p>Demo for <a href="https://developer.chrome.com/blog/styling-details" target="_top">https://developer.chrome.com/blog/styling-details</a>, built after <a href="https://codepen.io/jakob-e/full/MWzRjNe" target="_top">https://codepen.io/jakob-e/full/MWzRjNe</a></p>

  <h2>The Code</h2>
  
  <h3>UI</h3>
  
  <pre><code>.accordion-wrapper {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

details {
  display: flex;
  flex-direction: row;
  
  height: 30rem;
  border-radius: 2rem;
  overflow: hidden;
  
  /* To make the image positioning work …*/
  position: relative;
  z-index: 1;
  
  /* Hide marker */
  ::marker {
    content: '';
  }
  
  /* The image is tucked in the summary, because otherwise it would be hidden when not [open] as it ends up in the ::details-content pseudo */
  summary img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    transition: filter 0.5s ease;
  }
  /* Animate the image */
  &[open] summary img {
    filter: brightness(0.5);
  }
  
  summary {
    padding: 1rem 1em;
    width: 5rem;
    flex-shrink: 0; /* Prevent shrinking */
    text-align: center;
  }
  
  .details-content-wrapper {
    padding: 1.5rem 1em;
    width: 300px; /* Fixate the width of the content so that the text doesn’t wrap/unwrap when expanding the details */
  }
}

.details-content-wrapper {
  /* Animate-in the text when open */
  p {
    transform: translateY(2rem);
    opacity: 0;
    transition: all 0.5s ease;
    transition-delay: 0.5s;
  }
  
  [open] & p {
    transform: none;
    opacity: 1;
    transition-delay: 0.5s;
  }
}</code></pre>
  
  <h3>Animation</h3>
  <pre><code>/* Animation */
::details-content {
  transition: width 0.5s ease, content-visibility 0.5s ease allow-discrete;
  width: 0;
}

[open]::details-content {
  width: 300px;
}</code></pre>
      </div>
    `,
    cssCode: `
          .Stylable @supports selector(::details-content) {
  .warning {
    display: none;
  }
}

.accordion-wrapper {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: min-content;
  margin: 0 auto;
}

details {
  display: flex;
  flex-direction: row;

  background: transparent;
  color: white;
  
  height: 30rem;
  border-radius: 2rem;
  overflow: hidden;
  
  /* To make the image work …*/
  position: relative;
  z-index: 1;
  
  --open-size: min(30vw, 300px);
  
  /* Hide marker */
  ::marker {
    content: '';
  }
  
  /* The image is tucked in the summary, because otherwise it would be hidden when not [open] as it ends up in the ::details-content pseudo */
  summary img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    transition: filter 0.5s ease;
  }
  /* Animate the image */
  &[open] summary img {
    filter: brightness(0.5);
  }
  
  summary {
    padding: 1rem 1em;
    width: 5rem;
    flex-shrink: 0; /* Prevent shrinking */
    text-align: center;
    
    span {
      display: grid;
      place-content: center;
      width: 100%;
      aspect-ratio: 1;
      border-radius: 50%;
      background: rgb(0 0 0 / 0.25);
    }
    
    &:focus {
      outline: none;
    }
  }
  
  .details-content-wrapper {
    padding: 1.5rem 1em;
    width: var(--open-size);
  }
  
  &:hover, &:has(summary:focus) {
    outline: 3px solid cadetblue;
    outline-offset: 3px;
  }
}

.details-content-wrapper {
  /* We need margin-trim … */
  :first-child { margin-top: 0; }
  :last-child { margin-bottom: 0; }
  
  /* Animate-in the text when open */
  p {
    transform: translateY(2rem);
    opacity: 0;
    transition: all 0.5s ease;
    transition-delay: 0.5s;
  }
  
  [open] & p {
    transform: none;
    opacity: 1;
    transition-delay: 0.5s;
  }
}

/* Animation */
::details-content {
  transition: width 0.5s ease, content-visibility 0.5s ease allow-discrete;
  width: 0;
}

[open]::details-content {
  width: var(--open-size);
}

/* Hide a bunch of stuff when embedded */
:root[data-embed="yep"] {
  main {
    padding: 2em 1em;
    
    :not(p.warning, p.warning *, #demo, #demo *, #demo ~ p, #demo ~ p *) {
      display: none;
    }
  }
  #demo ~ p {
    margin-top: 1em;
    text-align: center;
  }
}
    `,
  };
