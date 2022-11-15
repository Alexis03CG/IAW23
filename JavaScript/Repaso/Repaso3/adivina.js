function adv() {
var numA = parseInt(Math.random()* 5)+1;
var num = document.getElementById('res').value;;
console.log(numA);
      if (numA == num){
        document.getElementById('sol').innerHTML = "Acertaste";
      }else{
        document.getElementById('sol').innerHTML = "Otra vez será";
      }
}

