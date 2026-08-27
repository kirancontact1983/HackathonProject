/** Loads a relative HTML component into an existing mount point. */
export async function loadComponent(selector,path){const mount=document.querySelector(selector);if(!mount)return;const response=await fetch(path);if(response.ok)mount.innerHTML=await response.text()}
/** Announces a short-lived, accessible message to the reviewer. */
export function toast(message){const node=document.querySelector('#toast-region');node.textContent=message;node.classList.add('is-visible');setTimeout(()=>node.classList.remove('is-visible'),4200)}
/** Shows a transparent mock service delay before continuing a journey action. */
export function process(message,done){const overlay=document.createElement('div');overlay.className='processing-overlay';overlay.innerHTML=`<div class="processing-card" role="status" aria-live="polite"><span class="spinner"></span><strong>${message}</strong><p>Your demo progress is saved while we wait.</p></div>`;document.body.append(overlay);setTimeout(()=>{overlay.remove();done()},1800)}
