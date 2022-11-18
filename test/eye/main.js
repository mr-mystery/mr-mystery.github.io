let eyes = document.querySelectorAll(".eye");
let anchor = document.getElementById('anchor');
// let rekt = anchor.getBoundingClientRect(); //Comment this for independent eye follow
// let anchorX = rekt.left + rekt.width/2; //Comment this for independent eye follow
// let anchorY = rekt.top + rekt.height/2; //Comment this for independent eye follow

document.addEventListener("mousemove", (e) => {
    // console.log(e);

    let mouseX = e.clientX;
    let mouseY = e.clientY;

    let angleDeg;

    // angleDeg = angle(mouseX, mouseY, anchorX, anchorY); //Comment this for independent eye follow

    eyes.forEach(eye => {
        let rekt = eye.getBoundingClientRect(); //Uncomment this for independent eye follow
        let anchorX = rekt.left + rekt.width/2; //Uncomment this for independent eye follow
        let anchorY = rekt.top + rekt.height/2; //Uncomment this for independent eye follow
        angleDeg = angle(mouseX, mouseY, anchorX, anchorY); //Uncomment this for independent eye follow

        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
    });

    anchor.style.filter = `hue-rotate(${angleDeg}deg)`;

});

function angle(cx, cy, ex, ey) {
    // let dy = ey - cy;
    // let dx = ex - cx;
    // let rad = Math.atan2(dy, dx);
    // let deg = rad * 180 / Math.PI;
    // return deg;
    return (Math.atan2((ey - cy), (ex - cx))) * 180 / Math.PI;
};