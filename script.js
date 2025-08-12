// --------- For hour string -------------- 

// 12h = 360 deg
// 1h = 30 deg
// nh = 30n 

// 60mins = 30 deg
// 1min = 0.5 deg ---> 1/2

// 30n+n/2 ----- formula 1


// --------- For minutes string -------------- 

// 60mins = 360 deg
// 1min = 6 deg

// nmin = 6n ---------- formula 2

// --------- For seconds string -------------- 

// 60secs = 360 deg
// 1sec = 6 deg

// nsec = 6n ---------- formula 3


let hour_string = document.querySelector(".hour-string")
let min_string = document.querySelector(".min-string")
let sec_string = document.querySelector(".sec-string")

let hr = document.querySelector(".hr")
let min = document.querySelector(".mns")
let sec = document.querySelector(".secs")


setInterval(() => {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    // for digital way
    hr.innerText = `${hours < 10 ? "0" + hours : hours}h`
    min.innerText = `${minutes < 10 ? "0" + minutes : minutes}m`
    sec.innerText = `${seconds < 10 ? "0" + seconds : seconds}s`

    // for strings formulas 
    let hRotation = 30 * hours + hours / 2;
    let mRotation = 6 * minutes;
    let sRotation = 6 * seconds;

    // for rotation
    hour_string.style.transform = `rotate(${hRotation}deg)`
    min_string.style.transform = `rotate(${mRotation}deg)`
    sec_string.style.transform = `rotate(${sRotation}deg)`

}, 1000)




































