import{T as e,e as t,a as r}from"./core-DG139wN3.js";import{notify as n}from"./error-MzpFwTpe.js";const i=[...e.keys()].map((e=>`script[type="${e}"][terminal],${e}-script[terminal]`)).join(","),a=e=>{throw n(e),new Error(e)},o=e=>!l.has(e),s=({attributes:{worker:e}})=>!e,l=new WeakSet;let d=!0;const m=({interpreter:e,io:t,run:r},{sync:n})=>{if(!n.is_pyterminal())return;r("from polyscript.currentScript import terminal as __terminal__");const i=new TextDecoder;let a="";const o={isatty:!0,write:e=>(a=i.decode(e),n.pyterminal_write(a),e.length)};e.setStdout(o),e.setStderr(o),e.setStdin({isatty:!0,stdin:()=>n.pyterminal_read(a)}),t.stderr=e=>{n.pyterminal_write(`${e.message||e}\n`)}},c=async()=>{const e=document.querySelectorAll(i),n=[].filter.call(e,o);if(!n.length)return;n.forEach(l.add,l),[].filter.call(e,s).length>1&&a("You can use at most 1 main terminal"),d&&(d=!1,document.head.append(Object.assign(document.createElement("link"),{rel:"stylesheet",href:new URL("./xterm.css",import.meta.url)})));const[{Terminal:c},{Readline:p},{FitAddon:y}]=await Promise.all([import("./xterm-DqawCVsv.js"),import("./xterm-readline-D247p8vq.js"),import("./xterm_addon-fit--gyF3PcZ.js")]);for(const e of n){e.matches('script[type="mpy"],mpy-script')&&a("Unsupported terminal.");const n=new p,i=t=>{let i=e;const a=e.getAttribute("target");if(a){if(i=document.getElementById(a)||document.querySelector(a),!i)throw new Error(`Unknown target ${a}`)}else i=document.createElement("py-terminal"),i.style.display="block",e.after(i);const o=new c({theme:{background:"#191A19",foreground:"#F5F2E7"},...t}),s=new y;return o.loadAddon(s),o.loadAddon(n),o.open(i),s.fit(),o.focus(),r(e,"terminal",{value:o}),o};e.hasAttribute("worker")?(t.main.onWorker.add((function e(r,a){l.has(a)||(l.add(a),t.main.onWorker.delete(e),i({disableStdin:!1,cursorBlink:!0,cursorStyle:"block"}),a.sync.is_pyterminal=()=>!0,a.sync.pyterminal_read=n.read.bind(n),a.sync.pyterminal_write=n.write.bind(n))})),t.worker.onReady.add(m)):t.main.onReady.add((function e({interpreter:r,io:a,run:o}){console.warn("py-terminal is read only on main thread"),t.main.onReady.delete(e),globalThis.__py_terminal__=i({disableStdin:!0,cursorBlink:!1,cursorStyle:"underline"}),o("from js import __py_terminal__ as __terminal__"),delete globalThis.__py_terminal__;const s=new TextDecoder;let l="";const d={isatty:!0,write:e=>(l=s.decode(e),n.write(l),e.length)};r.setStdout(d),r.setStderr(d),r.setStdin({isatty:!0,stdin:()=>n.read(l)}),a.stderr=e=>{n.write(`${e.message||e}\n`)}}))}};new MutationObserver(c).observe(document,{childList:!0,subtree:!0});var p=c();export{p as default};
//# sourceMappingURL=py-terminal-BMEpK70u.js.map
