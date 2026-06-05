document.addEventListener('DOMContentLoaded',()=>{let b=document.querySelector('.menu'),l=document.querySelector('.links');if(b&&l)b.onclick=()=>l.classList.toggle('open')});document.addEventListener('click', function(e) {
  var link = e.target.closest('a[href^="tel:"]');
  if (!link) return;

  var phone = link.getAttribute('href');

  if (phone !== 'tel:0525877378') {
    return;
  }

  e.preventDefault();
  return gtag_report_conversion(link.href);
});
