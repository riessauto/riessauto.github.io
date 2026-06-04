
function toggleLang(){const b=document.body; b.classList.toggle('en'); b.classList.toggle('ar'); document.documentElement.lang=b.classList.contains('ar')?'ar':'en'; document.documentElement.dir=b.classList.contains('ar')?'rtl':'ltr'; localStorage.setItem('riess_lang', b.classList.contains('ar')?'ar':'en');}
(function(){const l=localStorage.getItem('riess_lang')||'ar'; document.body.className=l; document.documentElement.lang=l; document.documentElement.dir=l==='ar'?'rtl':'ltr';})();
function menu(){document.querySelector('.navlinks').classList.toggle('open')}
