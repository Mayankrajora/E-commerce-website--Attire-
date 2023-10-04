function addtocart(){
    window.alert("Product is added to cart");
}

function Clock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

// Update the clock per second
setInterval(Clock, 1000);

// Call the function to display the clock on page
Clock();

