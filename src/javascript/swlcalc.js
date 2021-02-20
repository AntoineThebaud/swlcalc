$(document).ready(function() {
    swlcalc.init();
});

var swlcalc = swlcalc || {};

swlcalc = function() {

    /**
     * Init function. Triggered when document is ready.
     */
    var init = function() {
        renderBody();
        startSubModules();
        fillSlots();

        // visual settings :
        adjustPlacement();
        window.addEventListener('resize', adjustPlacement, true);
        adjustSidebar();

        // prevent accidental refreshes
        window.onbeforeunload = function(event) {
            return window.confirm();
        };
    };

    /**
     * Generate html code in the body, based on .dust template files
     */
    var renderBody = function() {
        dust.render('body', {
            slots:    swlcalc.data.templateData.slots,
            passives: swlcalc.data.stats.passives
        },

        function(err, out) {
            if (err) {
                console.log(err);
            }
            $('body').html(out);
        });
    };

    /**
     * Fill the slots : if parameters are present in the URL, import them, otherwise trigger an artificial reset to generate the default values .
     */
    var fillSlots = function() {
        var vars = $.getUrlVars();
        // TODO/REFACTOR : currently we don't check if parameters for each slot are correct !
        if (!$.isEmptyObject(vars) && Object.keys(vars).length >= swlcalc.data.templateData.slots.length) {
            swlcalc.import.start(vars);
            history.pushState("", document.title, window.location.pathname);
        } else {
           $('#btn-reset').trigger('click');
        }
    };

    /**
     * Initialize all sub modules (slots, buttonbar, summary...)
     */
    var startSubModules = function() {
        swlcalc.gear.init();
        // start slots handlers
        for (var i = 0; i < swlcalc.data.templateData.slots.length; i++) {
            startSlotHandler(swlcalc.data.templateData.slots[i]);
        }
        // start handlers for agents slots
        for (var i = 0; i < swlcalc.gear.nbAgents(); i++) {
            startAgentSlotHandler(i);
        }
        startSwapHandler('weapon');
        startSwapHandler('weapon2');
        swlcalc.buttonBar.init();
        swlcalc.animaAllocation.init();
        swlcalc.summary.init();
        swlcalc.passives.init();
        swlcalc.export.init();
        swlcalc.themeSwitch.init();
    };

    /**
     * Create handler for a slot.
     */
    var startSlotHandler = function(slot) {
        swlcalc.handler[slot.id] = new swlcalc.gear.SlotHandler(slot);
        swlcalc.handler[slot.id].init();
    };

    /**
     * Create handler for an agent slot
     */
    var startAgentSlotHandler = function(index) {
        swlcalc.agenthandler[index] = new swlcalc.gear.AgentSlotHandler(index);
        swlcalc.agenthandler[index].init();
    };

    /**
     * Create swap button handler for a slot.
     */
    var startSwapHandler = function(slot) {
        swlcalc.swap[slot] = new swlcalc.swap.SwapHandler(slot);
        swlcalc.swap[slot].init();
    };

    /**
     * Adjusts placement of elements when window is resized.
     */
    var adjustPlacement = function(slot) {
        // makes body top padding equal to navbar height
        var navHeight = $("nav").height();
        $("body").css("padding-top", navHeight + "px");
    };

    /**
     * Adjusts the placement of the sidebar (stick when scrolling).
     * taken from https://stackoverflow.com/a/12577363
     */
    var adjustSidebar = function() {
        var lastScrollTop = $(window).scrollTop();
        var wasScrollingDown = true;
        var sidebar = $("#sidebar");
        var navbarHeight = 50; //TODO : to retrieve real height of element instead

        var initialSidebarTop = sidebar.position().top;

        $(window).scroll(function(event) {
            var windowHeight = $(window).height();
            var sidebarHeight = sidebar.outerHeight();

            var scrollTop = $(window).scrollTop();
            var scrollBottom = scrollTop + windowHeight;

            var sidebarTop = sidebar.position().top;
            var sidebarBottom = sidebarTop + sidebarHeight;

            var heightDelta = Math.abs(windowHeight - sidebarHeight);
            var scrollDelta = lastScrollTop - scrollTop;

            var isScrollingDown = (scrollTop > lastScrollTop);
            // FIX : added 3 more pixels, otherwise it sometimes consider than windowHeight is high enough even if it's not the case
            var isWindowLarger = (windowHeight > sidebarHeight + 3);

            if ((isWindowLarger && scrollTop > initialSidebarTop) || (!isWindowLarger && scrollTop > initialSidebarTop + heightDelta)) {
                sidebar.addClass('fixed');
            } else if (!isScrollingDown && scrollTop <= initialSidebarTop) {
                sidebar.removeClass('fixed');
            }

            var dragBottomDown = (sidebarBottom <= scrollBottom && isScrollingDown);
            var dragTopUp = (sidebarTop >= navbarHeight && !isScrollingDown);

            if (dragBottomDown) {
                // stick to bottom
                if (isWindowLarger) {
                    sidebar.css('top', navbarHeight);
                } else {
                    sidebar.css('top', -heightDelta);
                }
            } else if (dragTopUp) {
                // stick to top
                sidebar.css('top', navbarHeight);
            } else if (sidebar.hasClass('fixed')) {
                // scroll normaly (intermediary position)
                var currentTop = parseInt(sidebar.css('top'), 10);

                var minTop = -heightDelta;
                var scrolledTop = currentTop + scrollDelta

                var isPageAtBottom = (scrollTop + windowHeight >= $(document).height());
                var newTop = (isPageAtBottom) ? minTop : scrolledTop;
                sidebar.css('top', newTop);
            }

            lastScrollTop = scrollTop;
            wasScrollingDown = isScrollingDown;
        });
    }

    var oPublic = {
        init: init
    };

    return oPublic;
}();
