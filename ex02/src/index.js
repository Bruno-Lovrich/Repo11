var myStr = "Paragon is the best!";

function useMethods(str) {

  var myReverse = str.split("").reverse().join("");
  var countCharacters = myReverse.split(" ").map(x=>x.length);

  return { myReverse, countCharacters };
}

console.log(useMethods(myStr));

module.exports = useMethods;