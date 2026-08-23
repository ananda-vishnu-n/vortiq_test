/* js/main.js — minimal interactions
   - Mobile navigation toggle
   - Header scroll state
   Keep behavior small and accessible; respect reduced motion
*/
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    var navToggle = document.querySelector('.nav-toggle');
    var mobileNav = document.querySelector('.mobile-nav');
    var siteHeader = document.querySelector('.site-header');
/* Desktop dropdown menus: Services + Industries */

var dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');

dropdownItems.forEach(function(dropdownItem){

  var trigger = dropdownItem.querySelector('.nav-trigger');
  var menu = dropdownItem.querySelector('.mega-menu');

  if(!trigger || !menu){
    return;
  }

  var isHovered = false;
  var isClicked = false;

  function updateDropdown(){
    var shouldOpen = isHovered || isClicked;

    dropdownItem.classList.toggle('is-open', shouldOpen);
    trigger.setAttribute('aria-expanded', String(shouldOpen));
  }

  function closeDropdown(){
    isHovered = false;
    isClicked = false;
    updateDropdown();
  }

  /* Hover opens dropdown */
  dropdownItem.addEventListener('mouseenter', function(){
    isHovered = true;
    updateDropdown();
  });

  /* Leave the entire dropdown area */
  dropdownItem.addEventListener('mouseleave', function(){
    isHovered = false;
    updateDropdown();
  });

  /* Click also opens/toggles dropdown */
  trigger.addEventListener('click', function(event){
    event.stopPropagation();

    isClicked = !isClicked;
    updateDropdown();
  });

  /* Click categories inside mega menu */
  var tabs = menu.querySelectorAll('.mega-menu__item');

  tabs.forEach(function(tab){

    tab.addEventListener('click', function(event){
      event.stopPropagation();

      tabs.forEach(function(item){
        item.classList.remove('is-active');
      });

      menu.querySelectorAll('.mega-menu__panel').forEach(function(panel){
        panel.classList.remove('is-visible');
      });

      tab.classList.add('is-active');

      var targetId = tab.getAttribute('data-target');

      if(targetId){
        var targetPanel = document.getElementById(targetId);

        if(targetPanel){
          targetPanel.classList.add('is-visible');
        }
      }
    });

  });

});

document.addEventListener('click', function(event){

  dropdownItems.forEach(function(dropdownItem){

    if(!dropdownItem.contains(event.target)){
      dropdownItem.classList.remove('is-open');

      var trigger = dropdownItem.querySelector('.nav-trigger');

      if(trigger){
        trigger.setAttribute('aria-expanded', 'false');
      }
    }

  });

});

document.addEventListener('keydown', function(event){

  if(event.key === 'Escape'){

    dropdownItems.forEach(function(dropdownItem){

      dropdownItem.classList.remove('is-open');

      var trigger = dropdownItem.querySelector('.nav-trigger');

      if(trigger){
        trigger.setAttribute('aria-expanded', 'false');
      }

    });

  }

});

    if(navToggle && mobileNav){
      navToggle.addEventListener('click', function(){
        var expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!expanded));
        mobileNav.classList.toggle('open');
      });

      mobileNav.addEventListener('click', function(e){
        if(e.target.tagName === 'A'){
          mobileNav.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    }

    if(siteHeader){
      var ticking = false;

      function onScroll(){
        var sc = window.scrollY || window.pageYOffset;
        if(sc > 10){
          siteHeader.classList.add('is-scrolling');
        } else {
          siteHeader.classList.remove('is-scrolling');
        }
      }

      window.addEventListener('scroll', function(){
        if(!ticking){
          window.requestAnimationFrame(function(){
            onScroll();
            ticking = false;
          });
          ticking = true;
        }
      });

      onScroll();
    }
  });
})();
