var i = 0,j = 0;
function start() {
  	
  	if(i>35) 
  		i = 35;
    if(j>17)
      j = 17;

setTimeout(function() {
  document.getElementById('field1').innerHTML=i;
document.getElementById('field2').innerHTML=j;
  if(i<35)
  	i++;
  if(j<17)
    j++;
  
if(  i!=35	|| j!=17 )
	start();
}, 1000);
}