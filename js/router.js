import {renderView} from './views.js';
/** Returns the current hash route, defaulting to home. */
export function getRoute(){const route=location.hash.replace('#/','')||'home';return route==='dashboard'?'tax-info':route}
/** Navigates with a GitHub Pages-safe hash route. */
export function go(route){location.hash=`#/${route}`}
/** Starts route rendering and focuses the main content after changes. */
export function initRouter(){const render=()=>{const route=getRoute();renderView(route);if(route==='verify'||route==='login')document.querySelector('.journey-bar')?.remove();document.querySelector('#main')?.focus()};addEventListener('hashchange',render);render()}
