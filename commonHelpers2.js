import"./assets/modulepreload-polyfill-3cfb730f.js";const l="feedback-form-state",e=document.querySelector(".feedback-form");e.querySelector("textarea");const a={email:"",message:""};e.addEventListener("input",()=>{a.email=e.elements.email.value.trim(),a.message=e.elements.message.value.trim(),n(l,a)});window.addEventListener("DOMContentLoaded",()=>{const t=o(l);t&&(e.elements.email.value=t.email||"",e.elements.message.value=t.message||"")});e.addEventListener("submit",t=>{if(t.preventDefault(),a.email=e.elements.email.value.trim(),a.message=e.elements.message.value.trim(),a.email===""||a.message===""){alert("Please fill all fields");return}console.log(a),localStorage.removeItem(l),e.reset()});function n(t,s){const m=JSON.stringify(s);localStorage.setItem(t,m)}function o(t){const s=localStorage.getItem(t);try{return JSON.parse(s)}catch{return null}}
//# sourceMappingURL=commonHelpers2.js.map