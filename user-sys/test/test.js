const autocannon = require("autocannon");
const url = "localhost:3000"; // route
const duration = "10"; // 10 SECONDS

const instance = autocannon({
    url,
    duration,
}, (err, result) => {
    if (err) {
      console.log("server test fail: ", err);  
    } else {
        console.log("Server test result:");
        console.log(result);
    }
},
);

autocannon.track(instance);