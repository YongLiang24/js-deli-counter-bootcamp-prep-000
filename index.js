//Function 1 start
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
  }}}

//Function 2 start
function nowServing(serving){
  //return this when array is empty
  if(serving.length<1){
    return "There is nobody waiting to be served!"
  }
  else{
    //use shift() to remove the first element and return it.
    return `Currently serving ${serving.shift()}.`;
  }
}

//Function 3 start
/*describe('currentLine(line)', () => {
  it('returns "The line is currently empty." if no one is in line', () => {
    expect(currentLine([])).toEqual("The line is currently empty.");
  });

  it('says who is in line when there are people waiting', () => {
    expect(currentLine(["Bill", "Jane", "Ann"])).toEqual("The line is currently: 1. Bill, 2. Jane, 3. Ann");*/
function currentLine(line){
  if(line.length<1){
    return "The line is currently empty."
  }
  else{
    var upArray = []; //empty array to hold the new elements
    for(var i=0; i<line.length; i++)
    {
      if((i+1)!=line.length){
        upArray.push(`${i+1}. ${line[i]}, `)
      }
      else{
        upArray.push(`${i+1}. ${line[i]}.`)
      }

    }

    return upArray;
  }


}
