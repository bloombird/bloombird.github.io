$(document).ready(function() {
    $(".series-selector-items > li").click(function() {
        $(this).toggleClass('selected');
        filterItems();
    });
});

function filterItems() {
    var classSelectors = $(".selected").map(function() {
        var cls = this.id.split('-');
        return '.'+cls.splice(2).join('-');
    }).toArray();

    //if no filter, show all
    if(!classSelectors.length){
        $('#items > li').show('slow');
    }

    $('#items > li').filter(classSelectors.join('')).show('slow');

    $('#items > li').not(function() {
        var self = this;
        var showThis = true;
        $.each(classSelectors, function(i,value) {
            if(!$(self).is(value)) {
                showThis = false;
            }
        });
        return showThis;
    }).hide('slow');
}
