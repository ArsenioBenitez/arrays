var animals = ["penguin","snake","red panda","big-foot"];
document.getElementById("txt").innerHTML = list1;
var list1 = "<ol>";
var animals.forEach(loop);
var loop = function(d)
{
  list1 += "<li>"+d+"</li>";
}
list1 += "</ol>";
