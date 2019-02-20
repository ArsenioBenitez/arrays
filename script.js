var animals = ["penguin","snake","red panda","big-foot"];
var list1 = "<ol>";
animals.forEach(loop);
list1 += "</ol>";
document.getElementById("txt").innerHTML = list1;
function loop(d)
{
  list1 += "<li>"+d+"</li>";
}
