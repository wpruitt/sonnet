var sonnet = document.getElementById("sonnet").innerHTML;

var index = sonnet.indexOf("orphans");
console.log("index of orphans", index);

var length = sonnet.length
console.log("length of sonnet", length);

sonnet = sonnet.replace("winter", "yuletide");
console.log("replace winter", sonnet)

sonnet = sonnet.replace(/the /gi, "a large ");
console.log("replace the", sonnet)

document.getElementById("sonnet").innerHTML = sonnet;
