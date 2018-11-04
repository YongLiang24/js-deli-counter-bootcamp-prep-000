function takeANumber(num, name){
  num.push(name);//push the names to the array num
  //use variables to dynamically output names and positions
  var string = `Welcome, ${name}. You are number ${num.length} in line.`;
  return string;
}
