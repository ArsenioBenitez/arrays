var animals = ["penguin","snake","red panda","big-foot"];
var list1 = "<ol>";
var animals.forEach(function(i,d,arr))
{
  list1 += "<li>"+d+"</li>";
}
list1 += "</ol>";
document.getElementById("txt").innerHTML = list1;
