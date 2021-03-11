// ripple event
function createRipple(event) {
	const button = event.currentTarget;
	const circle = document.createElement("span");
	const diameter = Math.max(button.clientWidth, button.clientHeight);
	circle.style.width = circle.style.height = `${diameter}px`;
	circle.style.left = `${event.clientX - button.offsetLeft - diameter/2}px`;
	circle.style.top = `${event.clientY - button.offsetTop - diameter/2}px`;
	circle.classList.add("ripple");

	const ripple = button.getElementsByClassName("ripple")[0];
	if (ripple) ripple.remove();
	button.appendChild(circle);
}
const buttons = document.querySelectorAll("a");
for (const button of buttons) {
  button.addEventListener("click", createRipple);
}

// delay link click
function delay(URL) {
	setTimeout( function() { window.location = URL }, 400 );
}