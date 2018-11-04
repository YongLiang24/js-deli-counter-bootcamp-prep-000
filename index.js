function takeANumber(num, name){
num.push(name);//push the names to the array num
//for loop to iterate the array num
for(var i=0; i<num.length;i++)
{
  if(num[i]===name)//Detect the name to match the current array so we know the current position
  {
    //use variables to dynamically output names and positions
    var string = `Welcome, ${name}. You are number ${i+1} in line.`;
    return string;
  }
}
}
