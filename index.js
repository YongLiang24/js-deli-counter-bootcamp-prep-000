var temp=[];
function takeANumber(num, name){

  temp = num.push(name);
  var string = `Welcome, ${temp[0]}. You are number 1 in line.`;
  return string;
}
