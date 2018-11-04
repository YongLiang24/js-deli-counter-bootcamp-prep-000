var temp=[];
function takeANumber(num, name){

  num.push(name);
  temp.push(name);
  var string = `Welcome, ${temp[0]}. You are number ${temp.length} in line.`;
  return string;
}
