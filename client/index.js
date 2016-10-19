$(document).ready(function(){
    $('#getFiles').click(function(){
        $.ajax('server/php').then(function(res){
            JSON.parse(res)['files'].forEach(function(el, i){
                appendToSlider(createImageDiv(el.url));
            });
            $(".regular").slick({
                dots: true,
                infinite: false,
                speed: 300,
                slidesToShow: 5,
                slidesToScroll: 5,
                responsive: [
                    {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                    },
                    {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                    },
                    {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                    }
                ]
            });
        });
    });
});

var createImageDiv = function(url){
    var $newElement = $(document.createElement('div'));
    var $newImage = $(document.createElement('img'));

    $newImage.attr("src", url);

    $newElement.append($newImage);
    return $newElement;

};

var appendToSlider = function(element){
    $('#slider-area').append(element);
};