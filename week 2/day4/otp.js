/*.OTP Countdown Simulator (Console App)
------------------------------------
        
        Simulate OTP sending flow in Node.js:
        
        Show “OTP Sent Successfully”
        
        Start 10-second countdown
        
        Allow resend only after countdown ends*/

let i = 10;
let timeInterval = setInterval(() => {
    console.log(i--);
}, 1000)

setTimeout(() => {
    clearInterval(timeInterval)
    console.log("resend otp?");

}, 11000)



console.log("OTP Sent Successfully");   
