(function() {
  var tabs = Array.prototype.slice.call(document.querySelectorAll('#features > nav a'));
  var tabsContent = Array.prototype.slice.call(document.querySelectorAll('#features > article > section'));
  tabs.forEach(x=>{
    x.addEventListener('click', function(e) {
      e.preventDefault();
      var that = this;
      tabs.forEach(x=> x.className = x.className.replace('is-selected', ''));
      that.className += ' is-selected';
      tabsContent.forEach(x=>x.className = x.className.replace('is-selected', ''));
      tabsContent
        .filter(
          (tab, i) => tab.dataset.id === that.dataset.id
        )
        .forEach(x=>x.className +=' is-selected');
    });
  });
})();
