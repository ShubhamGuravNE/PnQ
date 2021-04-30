// ----====Number CountTo====----
(function ($) {
    $.fn.countTo = function (options) {
        return this.each(function () {
            //-- Arrange
            var FRAME_RATE = 60; // Predefine default frame rate to be 60fps
            var $el = $(this);
            var countFrom = parseInt($el.attr("data-count-from"));
            var countTo = parseInt($el.attr("data-count-to"));
            var countSpeed = $el.attr("data-count-speed"); // Number increment per second

            //-- Action
            var rafId;
            var increment;
            var currentCount = countFrom;
            var countAction = function () {
                // Self looping local function via requestAnimationFrame
                if (currentCount < countTo) {
                    // Perform number incremeant
                    $el.text(Math.floor(currentCount)); // Update HTML display
                    increment = countSpeed / FRAME_RATE; // Calculate increment step
                    currentCount += increment; // Increment counter
                    rafId = requestAnimationFrame(countAction);
                } else {
                    // Terminate animation once it reaches the target count number
                    $el.text(countTo); // Set to the final value before everything stops
                    //cancelAnimationFrame(rafId);
                }
            };
            rafId = requestAnimationFrame(countAction); // Initiates the looping function
        });
    };
})(jQuery);

//----====Number CountTo====
$(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 1400) {
        $("").countTo();

    } else {
        $(".number-counter").countTo();

    }
});
// Animation End

// Add Product to cart
var addBtn = document.getElementsByClassName('cartBtn');
var addCount = document.getElementById('add-count');
var price = document.getElementsByClassName('shopping-card-price');
let count = 0;
var na = document.getElementsByClassName('name')[0];
var x = na.childNodes[0].nodeValue;

function product(event){
    
    
    alert( event.target.name + " is Selected");

    count += 1;
    document.getElementById('add-count').innerHTML = count;


    /*-------To Show Product-------*/
    var li = document.createElement("li");         
    li.setAttribute("class", "show-product");
    var node = document.createTextNode(x);
   var node = document.getElementsByClassName("show-product").innerHTML = x;

    

    li.appendChild(node);
    var drop = document.getElementById("drop");
    drop.appendChild(li);

    console.log(event);

}

// --------------------------------------------

// var li = document.createElement("li");
// li.setAttribute("class", "show-product");
// var node = document.createTextNode("selcted");

// // function dropD() {
// //     document.getElementsByName(selcted).innerHTML = 
// // }

// li.appendChild(node);
// var drop = document.getElementById("drop");
// drop.appendChild(li);


// -----------------------------------------