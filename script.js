var animals = ["penguin","snake","red panda","big-foot"];
var txt = "<ol>";
var animals.forEach(function(d))
{
  txt += "<li>"+d+"</li>";
}
txt += "</ol>";
document.getElementById("txt").innerHTML = txt;
