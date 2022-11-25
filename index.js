// code your solution here
function saturdayFun(x) {
if (typeof x === "undefined") {
        x = "roller-skate"}
return `This Saturday, I want to ${x}!`
}
let mondayWork = function(x) {
    if (typeof x === "undefined") {
            x = "go to the office"}
    return `This Monday, I will ${x}.`
    }
    function wrapAdjective (style="*") {
        return function(stringOne="special"){
          return `You are ${style}${stringOne}${style}!`
        }
      }
