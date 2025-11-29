// shared helpers for UTM Greenleaf (vanilla JS)
(function(){
  const current = document.body.dataset.page;
  document.querySelectorAll('nav .navlinks a').forEach(a=>{
    if(a.dataset.page === current){ a.classList.add('active'); }
  });

  // expose a tiny auth using localStorage
  window.GreenleafAuth = {
    getUser(){
      try { return JSON.parse(localStorage.getItem('gl_user')||'null'); } catch(e){ return null; }
    },
    setUser(u){
      localStorage.setItem('gl_user', JSON.stringify(u));
    },
    logout(){ localStorage.removeItem('gl_user'); },
  };
})();
