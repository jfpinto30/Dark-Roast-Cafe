let coffeeTag = document.getElementById('coffee-liquid');




function up(){
  coffeeTag.style.top = '110px';
  
}

function down(){
  coffeeTag.style.top = '60px';
}

document.addEventListener('keydown', up);
document.addEventListener('keyup', down);
