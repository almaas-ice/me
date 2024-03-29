function createRipple(event) {
    const button = event.currentTarget;
  
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const centerOfCursor = 6;
  
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius + centerOfCursor}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius + centerOfCursor}px`;
    circle.classList.add("ripple");
  
    const ripple = button.getElementsByClassName("ripple")[0];
  
    if (ripple) {
      ripple.remove();
    }
  
    button.appendChild(circle);
}
  
const buttons = document.querySelectorAll(".link");
for (const button of buttons) {
    button.addEventListener("click", createRipple);
}

function delay (URL) {
    setTimeout( function() { window.open(URL , '_blank') }, 400 );
}