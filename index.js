function takeANumber(num, name){

  num = num.push(name);
  var string = `Welcome, ${num[]}. You are number ${num.length+1} in line.`;
  return string;
}
