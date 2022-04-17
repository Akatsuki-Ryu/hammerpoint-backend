
let requesttype = -1;
const apicall = require("./apicall");
// let requesttype = -1;
// exports.requesttypeexp = requesttype;

const requestloop = setInterval(function () {
    console.log("reqeust loop is running " + requesttype);
    if (requesttype === "game") {
        apicall.callgame();
    } else if (requesttype === "bridge") {
        apicall.callbridge();
    }
}, 1000);

//for testing
function paraswitch() {
    if (requesttype === "game") {
        requesttype = "bridge";

    } else {
        requesttype = "game";


    }
    // module.exports.requesttypeexp = requesttype;
}

function getrequesttype() {
    return requesttype;
}

function setrequesttype(_requesttype) {
    requesttype = _requesttype
}

//
// module.exports = {
//     requesttypeexp: requesttype,
//     paraswitchexp: function paraswitch()
//
// }
module.exports.paraswitchexp = paraswitch;
module.exports.getrequesttypeexp = getrequesttype;
module.exports.setrequesttypeexp = setrequesttype;
// module.exports.requesttypeexp = requesttype;
// exports.requesttypeexp = requesttype;