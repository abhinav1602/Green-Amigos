var i = 0,j = 0;
function start() {
  	
  	if(i>32) 
  		i = 32;
    if(j>15)
      j = 15;

setTimeout(function() {
  document.getElementById('field1').innerHTML=i;
document.getElementById('field2').innerHTML=j;
  if(i<32)
  	i++;
  if(j<15)
    j++;
  
if(  i!=32	|| j!=15 )
	start();
}, 1000);
}