$(document).ready(function(){
    $('#getFiles').click(function(){
        $.ajax('server/php').then(function(res){
            console.log("got response", res);
        });
    });
});