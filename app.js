$(function(){
    console.log("Let’s get ready to party with jQuery!")
});

$("article img").addClass("image-center")

const $lastchild = $("article p:last-child")

$lastchild.remove()

let randpx = `${Math.floor(Math.random() * 101)}px`

$("h1#title").css('font-size', randpx)

$("ol").append("<li>Whatever I want</li>")

$("aside ol").remove()

$("aside").append("<p>I apoligize for the list's existense. Sorry</p>")

$(".form-control").on("change blur keyup", function(){

    let red = $(".form-control").eq(0).val()
    let blue = $(".form-control").eq(1).val()
    let green = $(".form-control").eq(2).val()

    $("body").css("background-color", `rgb(${red},${blue},${green})`)    
})


$("img").on("click", function(){
    $(this).remove()
})
