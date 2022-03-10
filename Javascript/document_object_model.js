const body = document.getElementsByTagName("BODY")[0];

document.addEventListener('mousemove', action_to_take);
body.addEventListener('mouseover', action);
var current_x_cord; 
var current_y_cord;
function action(e){
    window.current_x_cord = e.clientX;
    window.current_y_cord = e.clientY;
}
console.log(current_y_cord)
function action_to_take(e){
    var new_x_cord = e.clientX;
    var new_y_cord = e.clientY;
    if (new_x_cord - current_x_cord >= 100 || new_y_cord - current_y_cord){
        document.getElementById("eben").innerHTML = `The mouse cursor has gone a distance of 100px or more. The new current x coordiante is ${new_x_cord} while the new current y coordinate is ${new_y_cord}`
    }
}