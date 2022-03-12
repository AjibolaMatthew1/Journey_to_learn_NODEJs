// const body = document.getElementsByTagName("BODY")[0];

// document.addEventListener("mousemove", action_to_take);

// body.addEventListener("mouseover", (e) => {
//     console.log("mouse is over");
//     action(e);
// });

// var current_x_cord;
// var current_y_cord;
// function action(e) {
//     window.current_x_cord = e.clientX;
//     window.current_y_cord = e.clientY;
// }
// console.log(current_y_cord);
// function action_to_take(e) {
//     var new_x_cord = e.clientX;
//     var new_y_cord = e.clientY;
//     if (new_x_cord - current_x_cord >= 100 || new_y_cord - current_y_cord) {
//         document.getElementById(
//             "eben"
//         ).innerHTML = `The mouse cursor has gone a distance of 100px or more. The new current x coordiante is ${new_x_cord} while the new current y coordinate is ${new_y_cord}`;
//     }
// }

const spanX = document.querySelector("div#eben h3 span#x");
const spanY = document.querySelector("div#eben h3 span#y");

var previousMousePos = { x: null, y: null };
document.addEventListener("mousemove", (e) => {
    let { screenX, screenY } = e;
    let delta_x = Math.abs(screenX - previousMousePos.x)
    let delta_y = Math.abs(previousMousePos.y - screenY)
    if (previousMousePos.x === null && previousMousePos.y === null) {
        previousMousePos = { x: screenX, y: screenY };
    } else if ((delta_x % 100 >= 0 && delta_x > 100) && (delta_x % 100 <= 2)) {
        previousMousePos.x = screenX;
    } else if ((delta_y % 100 >= 0 && delta_y > 100) && (delta_y % 100 <= 2)) {
        previousMousePos.y = screenY;
    }
    console.log(previousMousePos);
    spanX.innerText = previousMousePos.x;
    spanY.innerText = previousMousePos.y;
});
