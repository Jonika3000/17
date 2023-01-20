$(document).keydown(function (e) {
    var pos = $(".player").first();
    switch (e.keyCode) {
        case 37:
            {
                let tmp = pos.css("left");
                tmp = tmp.replace("px", "");

                if (tmp > 40)
                    pos.css("left", parseInt(tmp) - 15);
                pos.css("background-image", "url(Images/snake.png)");
                break;
            }
        case 39:
            {
                let tmp = pos.css("left");
                tmp = tmp.replace("px", "");
                if (tmp < 480)
                    pos.css("left", parseInt(tmp) + 15);
                pos.css("background-image", "url(Images/snakeLeft.png)");
                break;
            }
        case 38: {
            let tmp = pos.css("top");
            tmp = tmp.replace("px", "");
            if (tmp > 22)
                pos.css("top", parseInt(tmp) - 15);
            pos.css("background-image", "url(Images/snakeUp.png)");
            break;
        }
        case 40: {
            let tmp = pos.css("top");
            tmp = tmp.replace("px", "");
            if (tmp < 462)
                pos.css("top", parseInt(tmp) + 15);
            pos.css("background-image", "url(Images/snake.png)");
            break;
        }
    }
    cheakTouch();
});
function cheakTouch() {
    var apples = $(".apple").first();
    var pos = $(".player").first();
    let tmp = pos.css("left");
    tmp = tmp.replace("px", "");
    let num = parseInt(tmp);
    let tmp1 = $(apples).css("left");
    tmp1 = tmp1.replace("px", "");
    let num1 = parseInt(tmp1);
    console.log(num1 + 50, num1 - 50);
    if (num <= num1 + 40 && num >= num1 - 40) {
        console.log("left true");
        tmp = pos.css("top");
        tmp = tmp.replace("px", "");
        num = parseInt(tmp);
        tmp1 = $(apples).css("top");
        tmp1 = tmp1.replace("px", "");
        num1 = parseInt(tmp1);
        console.log(num1 + 50, num1 - 50);
        if (num <= num1 + 40 && num >= num1 - 40) {
            console.log("top true");
            $(apples).css("visibility", "hidden");
            upd();
        }
    }
}
function upd() {
    var apples = $(".apple");
    $(apples).css("visibility", "visible");
    rnd();
}
$(window).on('load', function () {
    rnd();
});
function rnd() {
    var apples = $(".apple");
    $(apples).css("left", randomInteger(50, 460));
    $(apples).css("top", randomInteger(50, 460));
}
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}