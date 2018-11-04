var temp=[];
function takeANumber(num, name){

  num.push(name);
  var string = `Welcome, ${name}. You are number ${num.length} in line.`;
  return string;
}
