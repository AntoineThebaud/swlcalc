var swlcalc = swlcalc || {};

/**
* Defines logic for theme switch
*/
swlcalc.themeSwitch = function () {

    var el = {};

    var elInit = function() {
        return {
            btnThemeClassic: $('#btn-theme-classic'),
            btnThemeSw:      $('#btn-theme-sw')
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
        el.btnThemeClassic.on('click', switchTheme);
        el.btnThemeSw.on('click', switchTheme);
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
