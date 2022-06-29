let cupTag = document.getElementById('cup');




function up(){
  cupTag.style.bottom = '180px';
  
}

function down(){
  cupTag.style.bottom = '50px';
}

document.addEventListener('keydown', up);
document.addEventListener('keyup', down);






