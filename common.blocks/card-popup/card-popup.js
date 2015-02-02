// var dots = document.querySelectorAll('.dots'),
// 		close = document.querySelectorAll('.card-popup__close');

// for (var i = 0; i < dots.length; i++) {
// 	dots[i].addEventListener('click', function(e) {
// 		// console.log(this.parentNode.parentNode.querySelector('.card-popup'));
// 		this.parentNode.parentNode.querySelector('.card-popup').style.top = 0;
// 	}, false);
// }

// for (var i = 0; i < close.length; i++) {
// 	close[i].addEventListener('click', function(e) {
// 		this.parentNode.style.top = 100+'%';
// 	}, false);
// }


modules.define('i-bem__dom', function(provide, BEMDOM) {

BEMDOM.decl('card-popup', {
    _onItemClick : function(e) {
        this.domElem.css('top', '100%');
    }
}, {
    live : function() {
        this.liveBindTo('close', 'click', function() {
            this._onItemClick();
        });
        return false; // если инициализация блока не может быть отложена
    }
});

provide(BEMDOM);

});