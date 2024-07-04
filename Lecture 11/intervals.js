// setTimeout(() => {
//     console.log('Hi');
// }, 2000);

// setInterval(() => {
//     console.log('Interval');
// }, 2000);

// How to make time in milliseconds be updated in real time 

// function updateTime() {
//     let currentTime = new Date();
//     let currentTimeinMilli = currentTime.getTime();
//     const utc = currentTime.toUTCString();
//     console.log('Time in Milliseconds: ' + currentTimeinMilli);
//     console.log('Time in UTC: ' + utc);
// }

// setInterval(() => {
//     updateTime();
// }, 1000);

// Create a countdown timer that starts from 10 and logs the countdown every second until it reaches 0 at which point it logs "Happy New Year".

// let countdown = 10;
// const intervalId = setInterval(() => {
//     console.log(countdown);
//     countdown--;
//     if (countdown < 0) {
//         clearInterval(intervalId);
//         console.log("Happy New Year");
//     }
// }, 1000);

// Write a code for a clock that will tell the current time and integrate with html

// setInterval(() => {
//     let CurrentTime = new Date()
//     let Time = CurrentTime.toLocaleString()
//     document.getElementById("time").innerHTML = Time
//     console.log(Time);
// }, 1000);

// Simulate a progress bar that fills up over 10 seconds by logging a new percentage every second

let progress = 0;
const interval = setInterval(() => {
    progress += 10;
    console.log(`Progress: ${progress}%`);

    if (progress >= 100) {
        clearInterval(interval);
        console.log('Progress Complete');
    }
}, 1000);

// Implement a start and stop control for an interval that  logs the current time to console every second. Use buttons to start and stop the interval.