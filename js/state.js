const KEY='tax-confidence-review-state';
/** Reads the saved demo journey from localStorage. */
export function getState(){try{return JSON.parse(localStorage.getItem(KEY))||{step:'home',filer:null,feedback:null,verified:false}}catch{return{step:'home',filer:null,feedback:null,verified:false}}}
/** Persists a partial journey update and returns the merged state. */
export function updateState(change){const next={...getState(),...change,savedAt:new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'})};localStorage.setItem(KEY,JSON.stringify(next));return next}
/** Clears only the demo journey when the user explicitly starts over. */
export function resetState(){localStorage.removeItem(KEY)}
