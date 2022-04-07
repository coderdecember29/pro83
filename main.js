var mouseEvent = "empty";
var last_position_of_X, last_position_of_Y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 2;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    mouseEvent = "mouseDown";
}
{
    

    canvas.addEventListener("mousemove", my_mousemove);
     function my_mousemove(e)
       {
         current_position_of_mouse_x = e.clientX - canvas.offLeft;
         current_position_of_mouse_y = e.clientY - canvas.offTop;

         if (mouseEvent == "mouseDown"){
             ctx.beginPath();
             ctx.strokeStyle = color;
             ctx.lineWidth = width_of_line;
             ctx.moveTo(last_position_of_X, last_position_of_Y);
             ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
             ctx.stroke()
         }
         last_position_of_X = current_position_of_mouse_x;
         last_position_of_Y = current_position_of_mouse_y;
     
     

     
        }
        canvas.addEventListener("mouseup", my_mouseup)
        function my_mouseup(e){
            mouseEvent = "mouseUP";
        }

            canvas.addEventListener("mouseleave", my_mouseleave)
        function my_mouseleave(e){
            mouseEvent = "mouseleave";
        }

        var   last_position_of_touch_X, last_position_of_touch_Y;
        var width = screen.width - 70;
        var height = screen.height - 300;

        if(width < 992){
            document.getElementById("myCanvas").width = new_width;
            document.getElementById("myCanvas").height = new_height;
            document.body.style.overflow = "hidden";
    
        }
        canvas.addEventListener("touchmove", my_touchmove);

        function my_touchmove(e)
        {
              current_position_of_touch_X = e.touches[0].clientX - canvas.offsetLeft;
              current_position_of_touch_Y = e.touches[0].clientY - canvas.offsetTop;
     
             
             ctx.beginPath();
             ctx.strokeStyle = color;
     
             ctx.lineWidth = width_of_line;
             ctx.moveTo(last_position_of_touch_X, last_position_of_touch_Y);
             ctx.lineTo(current_position_of_touch_X, current_position_of_touch_Y);
             ctx.stroke();
             
     
             last_position_of_X = current_position_of_touch_X; 
             last_position_of_Y = current_position_of_touch_Y;
     
     
    
    
    }
   
}