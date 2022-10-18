
function addUser() {

  player1_name = document.getelemtById("player1_name_input").value;
  player2_name = document.getelemtById("player2_name_input").value;
  
  localstorage.setItem("player1_name", player1_name);
  localstorage.setItem("player2_name", player2_name);
  
  window.location = "game_page.html";
  }

