var katzDeliLine = []


function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  var myString
  myString = `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
  return myString
}

function nowServing(katzDeliLine){


  if(katzDeliLine.length === 0){
    var noPeople = "There is nobody waiting to be served!"
    return noPeople
  }
  var first = katzDeliLine.shift()
  var nowServing = "Currently serving " + first +"."
  return nowServing

}
function currentLine(line){
  var currentLineInString = `The line is currently: `

  if (line.length === 0){
    return "The line is currently empty."
  }  else{
    for (let i = 0; i < line.length; i++){

      currentLineInString +=  `${[i+1]}. ${line[i]}` + `, `
      }
  }
    //currentLineInString.charAt(currentLineInString.length - 1) = ''
   var fixedLine = currentLineInString.substring(currentLineInString.length - 2,currentLineInString-1)
    return currentLineInString
}
