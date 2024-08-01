let movietitle = null
let rating = null

$("form").on("submit", function(e){
    e.preventDefault()
    movietitle = $("input").eq(0).val()
    rating = $("input").eq(1).val()
    $("ul").append(`<li>${movietitle}</li>`)
    $("ul").append(`<li>${rating}</li>`)
    $("ul").append(`<button class = "list ${movietitle}">Remove?</button>`)
    $("ul").append("<br>")
});

// Need event delegation here
$("body").on('click', "button.list", function(){
    $(this).prev().prev().remove();
    $(this).prev().remove();
    $(this).remove();
});