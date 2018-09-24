// module.exports = function solveEquation(equation) {
module.exports = function solveEquation(equation) {
  
  var arr = equation.split(" ");
  var a = Number(arr[0]); 
  var b = Number(arr[3] + arr[4]);
  var c = Number(arr[7] + arr[8]);  
  var D, x1, x2;
 
  var D = b * b - 4 * a * c;

  if (D > 0) {
    x1 = Math.round((-b + Math.sqrt(D)) / (2 * a));
    x2 = Math.round((-b - Math.sqrt(D)) / (2 * a));
  }

  rootsOfEquation = [x1, x2];
  function sortFunction(x1, x2){
   return x1-x2;
  }

  return rootsOfEquation.sort(sortFunction);
}
