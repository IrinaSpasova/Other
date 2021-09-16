//Navbar Sticky

//When the user scroll the page, execute myFunction

window.onscroll = function () {
    myFunction();
}

//Get the navbar

var navbar = document.getElementById('navbar');

// Get the offset position of the Navbar

var sticky = navbar.offsetTop;

//Add sticky class to the navbar when reach its scroll position.
//Remove sticky when user leave the scroll position.
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }
}

//Navbar Sticky End

//Smooth Scrolling Start

$(document).ready(function (event) {

    //Add smooth scrolling to all links
    $("a").on('click', function (event) {

        //Make sure that this.hash has a value before overriding default behavior
if (this.hash !==""){
        //prevent default anchor click behavior
        event.preventDefault();

        //Store hash

        var hash =this.hash;

        //Using JQuery's animate() method to add smooth page scroll
        //The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html,body').animate({
            scrollTop:$(hash).offset().top
        },800, function(){
            //Add hash(#) to URL when done scrolling(default click behavior)
            window.location.hash=hash;
        });
        }//End if
    });
});

//Smooth Scrolling End

