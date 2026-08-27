import {loadComponent,toast} from './ui.js';
import {initRouter} from './router.js';
/** Boots shared disclosure, accessibility controls and the hash router. */
async function boot(){await loadComponent('#demo-banner','components/demo-banner.html');document.querySelector('[data-dismiss-demo]')?.addEventListener('click',()=>document.querySelector('.demo-banner').remove());document.querySelectorAll('[data-font]').forEach(button=>button.addEventListener('click',()=>{const scale=button.dataset.font==='larger'?1.1:button.dataset.font==='smaller'?.95:1;document.documentElement.style.fontSize=`${16*scale}px`;toast('Text size updated for this demo.') }));initRouter()}
boot();
