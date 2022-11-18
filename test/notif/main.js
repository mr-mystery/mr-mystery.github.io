let NotifP;
Notification.requestPermission().then(perm => { NotifP = perm });



function Alert() {
    alert("Hello\nHow are you?");
    confirm("Press a button!");
    prompt("Ello! How are you?","Eh");
};



let x = false;
function pain() {
    if(x === false) {
        x = true;
        y = 'Toggle Pain (Currently On)';
    }
    else {
        x = false;
        y = 'Toggle Pain (Currently Off)';
    };

    document.getElementById('paintxt').innerHTML = y;
};



document.getElementById('note').addEventListener('click', () => {

    if (NotifP === "granted") {

        const Notif = new Notification("Example Notification", {
            body: "Math.random() is cool! " + Math.random(),
            data: { hello: "world" },
            icon: "images/blue-thumbs-up-icon.png",
            image: "images/blue-thumbs-up-icon.png",
            tag: "test",
        });

        Notif.addEventListener("click", e => {
            alert("CLICK!");
        });

    };

});



let Notif2;
let interval;
document.addEventListener("visibilitychange", () => {

    if (NotifP === "granted" && document.visibilityState === "hidden" && x === true) {

        const leave = new Date();

        interval = setInterval(() => {

            Notif2 = new Notification("Come Back Pls", {
                body: `You have been gone for ${Math.round((new Date() - leave) / 1000)}.`,
                tag: "comeback",
            });

        }, 1000);

    }
    else {
        if (interval) clearInterval(interval);
        if (Notif2) Notif2.close();
    };

});