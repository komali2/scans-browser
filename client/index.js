$(document).ready(function(){
    $('#getFiles').click(function(){
        $.ajax('server/php').then(function(res){
            console.log("got response", res);
        });
    });
});

var createImageDiv = function(url){
    var $newElement = $(document.createElement('div'));
    var $newImage = $(document.createElement('img'));

    $newImage.attr("src",url);

    $newElement.append($newImage);
    return $newElement;

};

var appendToSlider = function(element){
    $('regular slider').append(element);
};