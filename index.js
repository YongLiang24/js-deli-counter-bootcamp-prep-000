function takeANumber(num, name){
num.push(name);//push the names to the array num
//for loop to iterate the array num
for(var i=0; i<num.length;i++)
{
  if(num[i]===name)//Detect the name in the current array to trace the current position
  {
    //use variables to dynamically output names and positions
    var string = `Welcome, ${name}. You are number ${i+1} in line.`;
    return string;
  }
}
}

function nowServing(serving){
  if(serving.length<0){
    var s ="There is nobody waiting to be served!"
    return s;
  }
}
