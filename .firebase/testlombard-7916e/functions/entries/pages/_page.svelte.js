import { c as create_ssr_component, e as escape, n as null_to_empty, d as add_attribute, v as validate_component } from "../../chunks/index2.js";
import "firebase/auth";
import "../../chunks/firebase.js";
const Authenticate_svelte_svelte_type_style_lang = "";
const css = {
  code: '.authContainer.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;padding:24px}form.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p{display:flex;flex-direction:column;gap:14px}form.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p,.options.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p{width:400px;max-width:100%;margin:0 auto}form.s-GrBPrfD7xd3p input.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p{width:100%}h1.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p{text-align:center;font-size:3rem}form.s-GrBPrfD7xd3p label.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p{position:relative;border:1px solid navy;border-radius:5px}form.s-GrBPrfD7xd3p input.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p{border:none;background:transparent;color:white;padding:14px}form.s-GrBPrfD7xd3p input.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p:focus{border:none;outline:none}form.s-GrBPrfD7xd3p label.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p:focus-within{border-color:blue}form.s-GrBPrfD7xd3p button.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p{background:navy;color:white;border:none;padding:14px 0;border-radius:5px;cursor:pointer;font-size:1rem;display:grid;place-items:center}form.s-GrBPrfD7xd3p button.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p:hover{background:blue}.above.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p,.center.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p{position:absolute;transform:translateY(-50%);pointer-events:none;color:white;border-radius:4px;padding:0 6px;font-size:0.8rem}.above.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p{top:0;left:24px;background:navy;border:1px solid blue;font-size:0.7rem}.center.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p{top:50%;left:6px;border:1px solid transparent;opacity:0}.error.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p{color:coral;font-size:0.9rem;text-align:center}.options.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p{padding:14px 0;overflow:hidden;font-size:0.9rem;display:flex;flex-direction:column;gap:4px}.options.s-GrBPrfD7xd3p>p.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p{position:relative;text-align:center;width:fit-content;margin:0 auto;padding:0 8px}.options.s-GrBPrfD7xd3p>p.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p::after,.options.s-GrBPrfD7xd3p>p.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p::before{position:absolute;content:"";top:50%;transform:translateY(-50%);width:100vw;height:1.5px;background:white}.options.s-GrBPrfD7xd3p>p.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p::after{right:100%}.options.s-GrBPrfD7xd3p>p.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p::before{left:100%}.options.s-GrBPrfD7xd3p div.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p{display:flex;align-items:center;gap:8px;justify-content:center}.options.s-GrBPrfD7xd3p div.s-GrBPrfD7xd3p p.s-GrBPrfD7xd3p:last-of-type{color:cyan;cursor:pointer}.loadingSpinner.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p.s-GrBPrfD7xd3p{animation:s-GrBPrfD7xd3p-spin 1s linear infinite}@keyframes s-GrBPrfD7xd3p-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}',
  map: null
};
const Authenticate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  $$result.css.add(css);
  return `<div class="authContainer s-GrBPrfD7xd3p"><form class="s-GrBPrfD7xd3p"><h1 class="s-GrBPrfD7xd3p">${escape("Login")}</h1>
        ${``}
        <label class="s-GrBPrfD7xd3p"><p class="${escape(null_to_empty(" center"), true) + " s-GrBPrfD7xd3p"}">Email</p>
            <input type="email" placeholder="Email" class="s-GrBPrfD7xd3p"${add_attribute("value", email, 0)}></label>
        <label class="s-GrBPrfD7xd3p"><p class="${escape(null_to_empty(" center"), true) + " s-GrBPrfD7xd3p"}">Password</p>
            <input type="password" placeholder="Password" class="s-GrBPrfD7xd3p"${add_attribute("value", password, 0)}></label>
        ${``}

        <button type="button" class="submitBtn s-GrBPrfD7xd3p">${`Submit`}</button></form>
    <div class="options s-GrBPrfD7xd3p"><p class="s-GrBPrfD7xd3p">Or</p>
        ${`<div class="s-GrBPrfD7xd3p"><p class="s-GrBPrfD7xd3p">Don&#39;t have an account?</p>
                <p class="s-GrBPrfD7xd3p">Register</p></div>`}</div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Authenticate, "Authenticate").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
