import{c as e,n as t,o as n}from"./mathEngine.w7sD2_Nu.js";var r=`math-universe-calc-tape-v1`,i=[{id:`demo-1`,expr:`\\frac{2}{3}+\\frac{5}{6}`,exactHtml:`<span class="m-frac"><span class="m-num">3</span><span class="m-bar"></span><span class="m-den">2</span></span>`,decimalPlain:`1.5`,angleMode:`DEG`,timestamp:`Ejemplo`},{id:`demo-2`,expr:`sin(60)`,exactHtml:`<span class="m-frac"><span class="m-num"><span class="m-sqrt"><span class="m-sqrt-sym">√</span><span class="m-sqrt-body">3</span></span></span><span class="m-bar"></span><span class="m-den">2</span></span>`,decimalPlain:`0.86602540378`,angleMode:`DEG`,timestamp:`Ejemplo`},{id:`demo-3`,expr:`\\sqrt{50}+\\sqrt{8}`,exactHtml:`7<span class="m-sqrt"><span class="m-sqrt-sym">√</span><span class="m-sqrt-body">2</span></span>`,decimalPlain:`9.8994949366`,angleMode:`DEG`,timestamp:`Ejemplo`}];document.querySelectorAll(`[data-calc-root]`).forEach(a=>{let o=`\\frac{2}{3}+\\frac{5}{6}¦`,s=`DEG`,c=!1,l=1.5,u=0,d=null,f=0,p=a.querySelector(`[data-natural-expr]`),m=a.querySelector(`[data-raw-input]`),h=a.querySelector(`[data-main-result]`),g=a.querySelector(`[data-rep-pills]`),_=a.querySelector(`[data-extra-info]`),ee=a.querySelector(`[data-angle-toggle]`),v=a.querySelector(`[data-angle-label]`),y=a.querySelector(`[data-shift-indicator]`),b=a.querySelector(`[data-mem-indicator]`),x=a.querySelector(`[data-slot-hint]`),S=a.querySelector(`[data-tape-list]`),te=a.querySelector(`[data-clear-tape]`),C=a.querySelector(`[data-copy-result]`),w=a.querySelector(`[data-copy-label]`),ne=e=>e.includes(`¦`)?e:`${e}¦`,T=e=>e.replace(/¦/g,``),E=e=>{c=e,y&&(y.hidden=!c),a.classList.toggle(`is-shift`,c)},re=()=>{if(!x)return;let e=o.indexOf(`¦`),t=o.slice(0,e);/\\frac\{[^{}]*$/.test(t)?x.innerHTML=`Editando <strong>NUMERADOR</strong> · Pulsa <kbd>▶</kbd> o <kbd>Tab</kbd> para bajar al denominador`:/\\frac\{[^{}]*\}\{[^{}]*$/.test(t)?x.innerHTML=`Editando <strong>DENOMINADOR</strong> · Pulsa <kbd>▶</kbd> o <kbd>Tab</kbd> para salir de la fracción`:/\\(?:sqrt|cbrt)\{[^{}]*$/.test(t)?x.innerHTML=`Dentro de la <strong>RAÍZ</strong> · Pulsa <kbd>▶</kbd> o <kbd>Tab</kbd> para salir del radical`:/\^\{[^{}]*$/.test(t)?x.innerHTML=`Editando <strong>EXPONENTE</strong> · Pulsa <kbd>▶</kbd> o <kbd>Tab</kbd> para bajar a la línea base`:x.innerHTML=`Escribe con el teclado o usa los botones · <strong>a/b</strong> crea fracción vertical`},D=()=>{if(!h||!g||!_)return;if(!d){h.innerHTML=`0`,g.innerHTML=``,_.hidden=!0;return}if(!d.ok){h.innerHTML=`<span class="res-error">${d.error||`Error`}</span>`,g.innerHTML=``,_.hidden=!0;return}let e=d.representations;if(!e.length){h.innerHTML=`0`,g.innerHTML=``;return}let t=(f%e.length+e.length)%e.length,n=e[t];if(h.innerHTML=n.html,g.innerHTML=e.map((e,n)=>`<button type="button" class="rep-pill ${n===t?`is-active`:``}" data-rep-idx="${n}">${e.label}</button>`).join(``),g.querySelectorAll(`[data-rep-idx]`).forEach(e=>{e.addEventListener(`click`,()=>{f=Number(e.dataset.repIdx||0),D()})}),d.factors&&d.factors.length>0){_.hidden=!1;let t=d.isPrime?`<span class="prime-tag is-prime">NÚMERO PRIMO</span>`:`<span class="prime-tag">COMPUESTO · ${d.divisorsCount} divisores</span>`,n=e.find(e=>e.id===`factors`);_.innerHTML=`${t} <span class="fact-preview">Factores: ${n?n.html:``}</span>`}else _.hidden=!0},O=(e=!0)=>{if(o=ne(o),p&&(p.innerHTML=n(o)),m&&m.ownerDocument.activeElement!==m&&(m.value=T(o)),re(),e){let e=T(o);if(!e.trim()){d=null,D();return}let n=t(e,{angleMode:s,ans:l});n.ok&&(d=n,f=0,D())}},k=e=>{let t=o.indexOf(`¦`),n=o.slice(0,t),r=o.slice(t+1);o=e.includes(`¦`)?n+e+r:n+e+`¦`+r,E(!1),O(!0)},A=()=>{let e=o.indexOf(`¦`),t=o.slice(0,e),n=o.slice(e+1),r=t.match(/(\d+(?:\.\d+)?|Ans|π|e)$/);if(r){let e=r[1];o=`${t.slice(0,t.length-e.length)}\\frac{${e}}{¦}${n}`}else o=`${t}\\frac{¦}{}${n}`;E(!1),O(!0)},j=()=>{let e=o.indexOf(`¦`);if(e===-1||e>=o.length-1)return;let t=o.slice(0,e),n=o.slice(e+1);o=n.startsWith(`}{`)?t+`}{¦`+n.slice(2):t+n[0]+`¦`+n.slice(1),O(!1)},M=()=>{let e=o.indexOf(`¦`);if(e<=0)return;let t=o.slice(0,e),n=o.slice(e+1);o=t.endsWith(`}{`)?t.slice(0,-2)+`¦}{`+n:t.endsWith(`\\frac{`)?t.slice(0,-6)+`¦\\frac{`+n:t.endsWith(`\\sqrt{`)||t.endsWith(`\\cbrt{`)?t.slice(0,-6)+`¦`+t.slice(-6)+n:t.endsWith(`^{`)?t.slice(0,-2)+`¦^{`+n:t.slice(0,-1)+`¦`+t.slice(-1)+n,O(!1)},N=()=>{let e=o.indexOf(`¦`);if(e<=0)return;let t=o.slice(0,e),n=o.slice(e+1);if(t.endsWith(`\\frac{`)&&n.startsWith(`}{}`))o=t.slice(0,-6)+`¦`+n.slice(3);else if(t.endsWith(`\\frac{`)&&n.startsWith(`}{`))o=t.slice(0,-6)+`¦`+n.slice(2).replace(/^\}/,``);else if((t.endsWith(`\\sqrt{`)||t.endsWith(`\\cbrt{`))&&n.startsWith(`}`))o=t.slice(0,-6)+`¦`+n.slice(1);else if(t.endsWith(`^{`)&&n.startsWith(`}`))o=t.slice(0,-2)+`¦`+n.slice(1);else if(t.endsWith(`}{`))o=t.slice(0,-2)+`¦}{`+n;else if(t.endsWith(`}`))o=t.slice(0,-1)+`¦}`+n;else{let e=t.match(/(?:asin|acos|atan|sin|cos|tan|sqrt|cbrt|log|ln|abs|nCr|nPr)\($|Ans$/);o=e?t.slice(0,t.length-e[0].length)+`¦`+n:t.slice(0,-1)+`¦`+n}O(!0)},P=(()=>{try{let e=localStorage.getItem(r);if(!e)return i;let t=JSON.parse(e);return Array.isArray(t)&&t.length?t:i}catch{return i}})(),F=()=>{try{localStorage.setItem(r,JSON.stringify(P.slice(0,25)))}catch{}},I=()=>{S&&(P.length?(S.innerHTML=P.map((e,t)=>`
          <div class="tape-item" data-tape-idx="${t}">
            <div class="tape-item-meta">
              <span class="tape-badge">${e.angleMode}</span>
              <span class="tape-time">${e.timestamp}</span>
            </div>
            <div class="tape-item-body">
              <div class="tape-expr">${n(e.expr)}</div>
              <div class="tape-eq">=</div>
              <div class="tape-res">${e.exactHtml}</div>
            </div>
            <div class="tape-item-actions">
              <button type="button" data-use-expr="${t}">Cargar fórmula</button>
              <button type="button" data-use-res="${t}">Insertar ${e.decimalPlain}</button>
            </div>
          </div>
        `).join(``),S.querySelectorAll(`[data-use-expr]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=P[Number(e.dataset.useExpr)];t&&(o=`${t.expr}¦`,O(!0))})}),S.querySelectorAll(`[data-use-res]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=P[Number(e.dataset.useRes)];t&&k(t.decimalPlain)})})):S.innerHTML=`<p class="tape-empty">Aún no hay cálculos guardados. Pulsa <strong>=</strong> para registrar una operación.</p>`)},L=()=>{let e=T(o);if(!e.trim())return;let n=t(e,{angleMode:s,ans:l});if(d=n,f=0,D(),n.ok){l=n.value;let t=n.representations[0],r=n.representations.find(e=>e.id===`decimal`)||t,i=new Date().toLocaleTimeString(`es-ES`,{hour:`2-digit`,minute:`2-digit`});P[0]?.expr!==e&&(P.unshift({id:String(Date.now()),expr:e,exactHtml:t?.html||String(n.value),decimalPlain:r?.plain||String(n.value),angleMode:s,timestamp:i}),P=P.slice(0,25),F(),I())}},R=e=>{switch(e){case`SHIFT`:E(!c);return;case`LEFT`:M();return;case`RIGHT`:j();return;case`AC`:o=`¦`,d=null,E(!1),O(!1);return;case`DEL`:N();return;case`SD`:!d||!d.ok?L():d.representations.length>1&&(f=(f+1)%d.representations.length,D());return;case`FACT`:if(d&&d.ok||L(),d&&d.ok){let e=d.representations.findIndex(e=>e.id===`factors`);e>=0?(f=e,D()):_&&(_.hidden=!1,_.innerHTML=`<span class="prime-tag">FACT requiere un número entero ≥ 2</span>`)}return;case`FRAC`:A();return;case`SQRT`:k(c?`\\cbrt{¦}`:`\\sqrt{¦}`);return;case`POW2`:k(c?`^{3}¦`:`^{2}¦`);return;case`POW`:k(`^{¦}`);return;case`INV`:k(`^{-1}¦`);return;case`SIN`:k(c?`asin(`:`sin(`);return;case`COS`:k(c?`acos(`:`cos(`);return;case`TAN`:k(c?`atan(`:`tan(`);return;case`LN`:k(c?`e^{¦}`:`ln(`);return;case`LOG`:k(c?`10^{¦}`:`log(`);return;case`NCR`:k(c?`nPr(`:`nCr(`);return;case`FACTORIAL`:k(c?`abs(`:`!`);return;case`π`:k(c?`e`:`π`);return;case`%`:k(c?`,`:`%`);return;case`EXP`:k(`*10^{¦}`);return;case`=`:L();return;default:k(e)}};a.querySelectorAll(`[data-key]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.key;t&&R(t)})}),ee?.addEventListener(`click`,()=>{let e=[`DEG`,`RAD`,`GRAD`];s=e[(e.indexOf(s)+1)%e.length],v&&(v.textContent=s),O(!0)}),a.querySelectorAll(`[data-mem-action]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.memAction;t===`MC`?u=0:t===`MR`?k(String(u)):t===`M+`?(d?.ok||L(),d?.ok&&(u+=d.value)):t===`M-`&&(d?.ok||L(),d?.ok&&(u-=d.value)),b&&(b.hidden=Math.abs(u)<1e-12)})}),m?.addEventListener(`input`,()=>{o=`${m.value}¦`,O(!0)}),m?.addEventListener(`keydown`,e=>{e.key===`Enter`?(e.preventDefault(),L()):e.key===`Escape`&&(e.preventDefault(),R(`AC`))});let z=e=>{let t=(m?.ownerDocument||document).activeElement;t&&(t.tagName===`INPUT`||t.tagName===`TEXTAREA`||t.tagName===`SELECT`)||e.metaKey||e.ctrlKey||e.altKey||(e.key>=`0`&&e.key<=`9`?(e.preventDefault(),k(e.key)):[`+`,`-`,`*`,`(`,`)`,`.`,`,`,`%`,`!`].includes(e.key)?(e.preventDefault(),k(e.key===`*`?`×`:e.key)):e.key===`/`?(e.preventDefault(),A()):e.key===`^`?(e.preventDefault(),k(`^{¦}`)):e.key===`ArrowLeft`?(e.preventDefault(),M()):e.key===`ArrowRight`||e.key===`Tab`?(e.preventDefault(),j()):e.key===`Backspace`?(e.preventDefault(),N()):e.key===`Escape`?(e.preventDefault(),R(`AC`)):(e.key===`Enter`||e.key===`=`)&&(e.preventDefault(),L()))};a.querySelector(`[data-calc-screen]`)?.addEventListener(`keydown`,z),C?.addEventListener(`click`,async()=>{if(!d?.ok)return;let e=d.representations[f]||d.representations[0];if(e)try{await((C.ownerDocument.defaultView||window).navigator?.clipboard||navigator.clipboard).writeText(e.plain),w&&(w.textContent=`¡COPIADO!`,window.setTimeout(()=>{w.textContent=`COPIAR`},1400))}catch{}});let B=a.querySelector(`[data-calc-chassis]`),ie=a.querySelector(`[data-calc-pip-toggle]`),V=a.querySelector(`[data-pip-label]`),H=a.querySelector(`[data-pip-dock-notice]`),ae=a.querySelector(`[data-pip-restore]`),U=null,W=new URLSearchParams(window.location.search).get(`pip`)===`1`;W&&V&&(V.textContent=`CERRAR ✕`);let G=()=>{if(B){if(H&&H.parentNode===a?(a.insertBefore(B,H.nextSibling),H.hidden=!0):a.prepend(B),B.classList.remove(`is-in-pip`),V&&(V.textContent=`FLOTANTE (PiP)`),U&&!U.closed)try{U.close()}catch{}U=null}},K=async()=>{if(!B)return;if(W&&!(`documentPictureInPicture`in window)){window.close();return}if(U&&!U.closed){G();return}let e=window.documentPictureInPicture;if(e)try{let t=await e.requestWindow({width:440,height:675});U=t,t.document.title=`Calculadora Científica — Math Universe`,t.document.documentElement.dataset.theme=document.documentElement.dataset.theme||`dark`,Array.from(document.querySelectorAll(`style, link[rel="stylesheet"]`)).forEach(e=>{t.document.head.appendChild(e.cloneNode(!0))});let n=t.document.createElement(`style`);n.textContent=`
            html, body {
              margin: 0;
              padding: 0;
              background: var(--bg-raised, #14161d);
              color: var(--ink, #f4f3ef);
              height: 100%;
              overflow-x: hidden;
            }
            .calc-chassis.is-in-pip {
              border: 0 !important;
              box-shadow: none !important;
              min-height: 100vh;
              display: flex;
              flex-direction: column;
            }
            .calc-chassis.is-in-pip .vpam-badge {
              display: none;
            }
            .calc-chassis.is-in-pip .calc-hud-bar {
              padding: 0.45rem 0.65rem;
              position: sticky;
              top: 0;
              z-index: 10;
            }
            .calc-chassis.is-in-pip .calc-screen {
              margin: 0.55rem;
              padding: 0.65rem 0.8rem;
            }
            .calc-chassis.is-in-pip .screen-natural-expr {
              min-height: 3.1rem;
              font-size: 1.25rem;
            }
            .calc-chassis.is-in-pip .screen-main-result {
              font-size: 1.55rem;
            }
            .calc-chassis.is-in-pip .calc-keypad {
              padding: 0 0.55rem 0.65rem;
              gap: 0.4rem;
            }
            .calc-chassis.is-in-pip .key {
              min-height: 2.35rem;
            }
          `,t.document.head.appendChild(n),B.classList.add(`is-in-pip`),t.document.body.appendChild(B),H&&(H.hidden=!1),V&&(V.textContent=`ACOPLAR ↙`),t.document.addEventListener(`keydown`,z);let r=new MutationObserver(()=>{U&&!U.closed&&(U.document.documentElement.dataset.theme=document.documentElement.dataset.theme||`dark`)});r.observe(document.documentElement,{attributes:!0,attributeFilter:[`data-theme`]}),t.addEventListener(`pagehide`,()=>{r.disconnect(),G()}),window.dispatchEvent(new CustomEvent(`calc-pip-opened`));return}catch{}let t=Math.max(20,window.screen.availWidth-440-40);window.open(`/herramientas?pip=1`,`MathUniverseCalculatorPiP`,`popup=yes,width=440,height=680,left=${t},top=60,resizable=yes,scrollbars=yes`)};ie?.addEventListener(`click`,K),ae?.addEventListener(`click`,G),window.addEventListener(`request-calc-pip`,()=>{K()}),te?.addEventListener(`click`,()=>{P=[],F(),I()});let q=a.querySelectorAll(`[data-calc-mode]`),oe=a.querySelectorAll(`[data-view]`);q.forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.calcMode;q.forEach(e=>{let n=e.dataset.calcMode===t;e.classList.toggle(`is-active`,n),e.setAttribute(`aria-selected`,String(n))}),oe.forEach(e=>{e.classList.toggle(`is-active`,e.dataset.view===t)})})});let J=a.querySelector(`[data-quad-a]`),Y=a.querySelector(`[data-quad-b]`),X=a.querySelector(`[data-quad-c]`),se=a.querySelector(`[data-quad-solve]`),Z=a.querySelector(`[data-quad-output]`),Q=e=>{let n=t(e||`0`);return n.ok?n.value:NaN},$=()=>{if(!J||!Y||!X||!Z)return;let t=Q(J.value),n=Q(Y.value),r=Q(X.value),i=e(t,n,r);i.ok?Z.innerHTML=`
        <div class="quad-nature-banner ${i.nature}">
          <span>${i.natureLabel}</span>
          <span>Δ = ${i.discriminant}</span>
        </div>

        <div class="quad-roots-grid">
          <div class="quad-root-card">
            <span class="root-label">Solución x₁ (Exacta)</span>
            <div class="root-exact">${i.x1ExactHtml}</div>
            <span class="root-dec">Decimal: ${i.x1Decimal}</span>
          </div>
          <div class="quad-root-card">
            <span class="root-label">Solución x₂ (Exacta)</span>
            <div class="root-exact">${i.x2ExactHtml}</div>
            <span class="root-dec">Decimal: ${i.x2Decimal}</span>
          </div>
        </div>

        <div class="quad-meta-grid">
          <div class="quad-meta-cell">
            <span class="meta-label">Vértice de la parábola V(xᵥ, yᵥ)</span>
            <div class="meta-val">(${i.vertexXHtml} , ${i.vertexYHtml})</div>
            <span class="meta-sub">Decimal: (${i.vertexXDec}, ${i.vertexYDec})</span>
          </div>
          <div class="quad-meta-cell">
            <span class="meta-label">Forma factorizada</span>
            <div class="meta-val">${i.factoredHtml}</div>
          </div>
        </div>

        <div class="quad-steps">
          <p class="steps-title">DESARROLLO PASO A PASO</p>
          ${i.stepsHtml.map(e=>`<div class="step-line">${e}</div>`).join(``)}
        </div>
      `:Z.innerHTML=`<p class="quad-error">${i.error}</p>`};se?.addEventListener(`click`,$),[J,Y,X].forEach(e=>{e?.addEventListener(`input`,$)}),a.querySelectorAll(`[data-quad-preset]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=(e.dataset.quadPreset||``).split(`,`);t.length===3&&J&&Y&&X&&(J.value=t[0],Y.value=t[1],X.value=t[2],$())})}),O(!0),I(),$()});