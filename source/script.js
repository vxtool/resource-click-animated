(function() {

    var $body = document.body;
    var $button = $body.getElementsByClassName('button')[0];

    var element = {
        hasClass: function (el, className) {
            if (el.classList) { return el.classList.contains(className); }
            else { return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className); }
        },
        addClass: function (el, className) {
            if(el.classList) { el.classList.add(className); }
            else { el.className += ' ' + className; }
        },
        removeClass: function (el, className) {
            if(el.classList){ el.classList.remove(className); } 
            else { el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' '); }
        }
    }

    var animation = function () {
        var el = $button;
        var className = 'animation';

        if(element.hasClass(el, className)) { element.removeClass(el, className); }
        else { element.addClass(el, className); }            
    }

    if ( typeof $button !== 'undefined' ) {
        $button.addEventListener('click', animation);
    }

}).call(this);
