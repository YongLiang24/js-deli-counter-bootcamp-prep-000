function takeANumber(num, name){

  num = num.push(name);
  var position = num.length;
  var string = `Welcome, ${num[]}. You are number ${position+1} in line.`;
  return string;
}
