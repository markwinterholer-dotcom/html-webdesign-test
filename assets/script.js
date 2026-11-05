
const toggle=document.querySelector('.menu-toggle');
const menu=document.getElementById('main-menu');
if(toggle&&menu){
const close=()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Menü öffnen');document.body.classList.remove('nav-locked')};
toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Menü schließen':'Menü öffnen');document.body.classList.toggle('nav-locked',open)});
document.addEventListener('click',e=>{if(!menu.contains(e.target)&&!toggle.contains(e.target))close()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
window.addEventListener('resize',()=>{if(innerWidth>850)close()});
}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=String(new Date().getFullYear()));
const modal=document.getElementById('lightbox');
if(modal){
 document.querySelectorAll('[data-lightbox]').forEach(b=>b.addEventListener('click',()=>{const img=b.querySelector('img');if(!img)return;const m=modal.querySelector('img');m.src=img.src;m.alt=img.alt;modal.showModal()}));
 modal.querySelector('.close-modal')?.addEventListener('click',()=>modal.close());
 modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});
}
const form=document.getElementById('message-form');
if(form){
 form.addEventListener('submit',async e=>{
 e.preventDefault();
 if(!form.reportValidity())return;
 const f=new FormData(form);
 const t='Anfrage an Brass di Lovers (noch nicht versendet)\n\nName: '+f.get('name')+'\nKontakt: '+f.get('contact')+'\nNachricht: '+f.get('message');
 let ok=false;
 try{await navigator.clipboard.writeText(t);ok=true}catch(err){const field=document.createElement('textarea');field.value=t;document.body.appendChild(field);field.select();try{ok=document.execCommand('copy')}catch(_err){}field.remove()}
 const status=document.getElementById('message-status');
 if(status)status.textContent=ok?'Dein Nachrichtentext wurde kopiert. Füge ihn in eine E-Mail oder Nachricht ein. Es wurde noch nichts versendet.':'Kopieren nicht möglich. Bitte kopiere deine Nachricht manuell. Es wurde nichts versendet.';
 });
}
