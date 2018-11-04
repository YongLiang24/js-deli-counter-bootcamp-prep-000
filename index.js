function takeANumber(num, name){
num.push(name);//push the names to the array num

for(var i=0; i<num.length;i++)
{
  if(num[i]===name)
  {
    //use variables to dynamically output names and positions
    var string = `Welcome, ${name}. You are number ${i+1} in line.`;
    return string;
  }
}


}
