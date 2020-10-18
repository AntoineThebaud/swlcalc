var swlcalc = swlcalc || {};

/**
 * Defines logic for theme switch
 */
swlcalc.themeSwitch = function () {

      var el = {};

      var elInit = function() {
          return {
              btn_theme_classic: $('#btn-theme-classic'),
              btn_theme_sw:      $('#btn-theme-sw')
          };
      };

      var init = function() {
          el = elInit();
          bindEvents();
      };

      /**
       * Associates the right processing to each trigger.
       */
      var bindEvents = function() {
          el.btn_theme_classic.on('click', switchTheme);
          el.btn_theme_sw.on('click', switchTheme);
      };

      /**
       * Switch theme to the one selected.
       */
      var switchTheme = function(event) {
          var newTheme = event.currentTarget.id.split('-')[2]; //TODO better way to retrieve this value maybe ?

          var htmlTag = $('html')[0];
          htmlTag.setAttribute('theme', newTheme);

          var newNavTheme = (newTheme == "classic" ? "navbar-default" : "navbar-inverse")
          var navTag = $('nav')[0];
          navTag.className = navTag.className.replace(/navbar-(inverse|default)/g, newNavTheme);
      };

      var oPublic = {
          el: el,
          init: init
      };

      return oPublic;
}();
