function takeANumber(num, name){

  num = num.push(name);
  var position = num[].length+1;
  var string = `Welcome, ${num[]}. You are number ${position} in line.`;
  return string;
}
