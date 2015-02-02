modules.define('i-bem__dom', function(provide, BEMDOM) {

BEMDOM.decl('dots', {
    onSetMod : {
        'js' : {
            'inited': function() {
                this.bindTo('click', function(e) {
                    var popup = this.domElem.parent().parent().children('.card-popup');
                    popup.css('top', 0);
                });
            }
        }
    }
});

provide(BEMDOM);

});