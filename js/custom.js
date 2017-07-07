var i = 0,j = 0;
function start() {
  	
  	if(i>39) 
  		i = 39;
    if(j>18)
      j = 18;

setTimeout(function() {
  document.getElementById('field1').innerHTML=i;
document.getElementById('field2').innerHTML=j;
  if(i<39)
  	i++;
  if(j<18)
    j++;
  
if(  i!=39	|| j!=18 )
	start();
}, 900);
}