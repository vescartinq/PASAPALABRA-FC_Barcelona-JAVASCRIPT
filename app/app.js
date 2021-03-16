var totalPlayers = [
  { user: "LEO MESSI", points: 25 },
  { user: "JOHAN CRUYFF", points: 24 },
  { user: "PEP GUARDIOLA", points: 22 },
  { user: "XAVI HERNANDEZ", points: 21 },
  { user: "GERARD PIQUE", points: 19 },
  { user: "LADISLAO KUBALA", points: 18 },
  { user: "RONALDINHO GAUCHO", points: 15 },
  { user: "ANDRES INIESTA", points: 14 },
  { user: "CARLES PUYOL", points: 5 },
  { user: "SERGIO BUSQUETS", points: 1 },
];
var allUserNames = ["TONY STARK", "JOHAN CRUYFF", "PEP GUARDIOLA", "XAVI HERNANDEZ", "GERARD PIQUE", "LADISLAO KUBALA", "RONALDINHO GAUCHO", "ANDRES INIESTA", "CARLES PUYOL", "SERGIO BUSQUETS"];
var questions = [];
var questionIndex = 0;
var correctAnswer = 0;
var incorrectAnswer = 0;
var timeLeft;
var timerGenerate;
var gameAsk = document.getElementById("game_questions");
var userAnswer = document.getElementById("answer");
var userName = document.getElementById("user_name").value;

//Base de datos de preguntas y respuestas
var questionsList = [
  [
    { letter: "a", answer: "ajax", status: 0, question: "CON LA A. Equipo holandés históricamente hermanado con el Barça" },
    { letter: "a", answer: "andres", status: 0, question: "CON LA A. Nombre del genio de Fuentealbilla" },
    { letter: "a", answer: "azulgrana", status: 0, question: "CON LA A. Colores emblemáticos que representan al FC Barcelona" },
  ],
  [
    { letter: "b", answer: "busquets", status: 0, question: "CON LA B. Apellido del centrocampista cuyo padre también jugó como portero en el primer equipo" },
    { letter: "b", answer: "berna", status: 0, question: "CON LA B. Ciudad suiza en la que se jugó la final de Copa de Europa conocida como la final de los postes cuadrados" },
    { letter: "b", answer: "club", status: 0, question: "CONTIENE LA B. El Barça es más que eso" },
  ],
  [
    { letter: "c", answer: "cuatro", status: 0, question: "CON LA C. Número que representa la posición emblema de la cantera del Barça" },
    { letter: "c", answer: "cinco", status: 0, question: "CON LA C. Número de goles que todo buen culé quiere marcar al Madrid" },
    { letter: "c", answer: "cule", status: 0, question: "CON LA C. Mote con el que se conoce al seguidor blaugrana" },
  ],
  [
    { letter: "d", answer: "ronaldo", status: 0, question: "CONTIENE LA D. Su gol al Compostela acabó por convertirse en un anuncio de ropa deportiva" },
    { letter: "d", answer: "dos", status: 0, question: "CON LA D. Número de tripletes (Champions, Liga y Copa del Rey en una misma temporada) ganados por el FC Barcelona" },
    { letter: "d", answer: "diez", status: 0, question: "CON LA D. Número que se suele asignar al mejor jugador del equipo" },
  ],
  [
    { letter: "e", answer: "seis", status: 0, question: "CONTIENE LA E. Número de Balones de Oro en poder de Leo Messi" },
    { letter: "e", answer: "ernesto", status: 0, question: "CON LA E. Nombre del entrenador vasco más aburrido que tuvo Messi" },
    { letter: "e", answer: "belletti", status: 0, question: "CONTIENE LA E. Apellido del autor del gol que dio la segunda Champions al Barça" },
  ],
  [
    { letter: "f", answer: "futbol", status: 0, question: "CON LA F. Primera palabra del nombre del equipo" },
    { letter: "f", answer: "aforo", status: 0, question: "CONTIENE LA F. Palabra que describe la cantidad de público que puede acoger el Camp Nou" },
    { letter: "f", answer: "falta", status: 0, question: "CON LA F. Disparo que se considera medio penalti si lo ejecuta Messi" },
  ],
  [
    { letter: "g", answer: "guardiola", status: 0, question: "CON LA G. Apellido del entrenador que descubrió una posición con la que Messi pudo ganar 6 Balones de Oro'" },
    { letter: "g", answer: "ganar", status: 0, question: "CON LA G. Palabra que define el único resultado que satisface a la afición blaugrana" },
    { letter: "g", answer: "gamper", status: 0, question: "CON LA G. Único presidente suizo de la historia del Barça" },
  ],
  [
    { letter: "h", answer: "hristo", status: 0, question: "CON LA H. Nombre del búlgaro más famoso de la historia azulgrana" },
    { letter: "h", answer: "helenio", status: 0, question: "CON LA H. Nombre del entrenador que era conocido como HH" },
    { letter: "h", answer: "stoichkov", status: 0, question: "CON LA H. Su pisotón a un árbitro dió la vuelta al mundo" },
  ],
  [
    { letter: "i", answer: "madrid", status: 0, question: "CONTIENE LA I. Equipo que se considera el eterno rival del barça" },
    { letter: "i", answer: "champions", status: 0, question: "CONTIENE LA I. Torneo cuya copa es conocida como la orejona" },
    { letter: "i", answer: "iniesta", status: 0, question: "CON LA I. Logró que en todos los estadios de España le aplaudieran durante años hasta su retirada" },
  ],
  [
    { letter: "j", answer: "josep", status: 0, question: "CON LA J. Nombre del entrenador más exitoso de la historia blaugrana" },
    { letter: "j", answer: "jugones", status: 0, question: "CON LA J. Adjetivo con el que se conoce a los jugadores bajitos que controlan el centro del campo, como Xavi o Iniesta" },
    { letter: "j", answer: "Rijkaard", status: 0, question: "CONTIENE LA J. Entrenador holandés que ganó una Champions entrenando a Ronaldinho" },
  ],
  [
    { letter: "k", answer: "kluivert", status: 0, question: "CON LA K. Apellido del gran delantero holandés que triunfó como 9 del barça y actualmente dirige la cantera" },
    { letter: "k", answer: "koeman", status: 0, question: "CON LA K. Apellido del héroe de Wembley" },
    { letter: "k", answer: "bakero", status: 0, question: "CON LA K. Apellido del capitán blaugrana cuyo gol de cabeza al Leverkusen se considera media Copa de Europa" },
  ],
  [
    { letter: "l", answer: "leo", status: 0, question: "CON LA L. Diminutivo con el que se conoce al mejor jugador de todos los tiempos" },
    { letter: "l", answer: "laudrup", status: 0, question: "CON LA L. Apellido del mejor jugador de la historia de Dinamarca" },
    { letter: "l", answer: "lopez", status: 0, question: "CON LA L. Defensa del Atletico de Madrid recordado por sus duras batallas con Stoichkov" },
  ],
  [
    { letter: "m", answer: "masia", status: 0, question: "CON LA M. Tipo de edificación con la que se conoce a la cantera azulgrana" },
    { letter: "m", answer: "maradona", status: 0, question: "CON LA M. Apellido del Pelusa que no logró triunfar en el Camp Nou" },
    { letter: "m", answer: "milan", status: 0, question: "CON LA M. Club italiano que ganó una final de Champions que se considera el final del Dream Team" },
  ],
  [
    { letter: "n", answer: "ansu", status: 0, question: "CONTIENE LA N. Nombre del goleador más joven de la historia del Barça, de la Champions League y de la selección española" },
    { letter: "n", answer: "bojan", status: 0, question: "CONTIENE LA N. Delantero canterano que era conocido como EL NOI DE LINYOLA" },
    { letter: "n", answer: "ganar", status: 0, question: "CONTIENE LA N. Palabra que define el único resultado que satisface a la afición blaugrana" },
  ],
  [
    { letter: "ñ", answer: "caño", status: 0, question: "CONTIENE LA Ñ. Gesto técnico que se caracteriza por pasar el balón entre las piernas del rival" },
    { letter: "ñ", answer: "baño", status: 0, question: "CONTIENE LA Ñ. Forma coloquial para referirse a una goleada" },
    { letter: "ñ", answer: "leña", status: 0, question: "CONTIENE LA Ñ. La repartia Stoichkov cada vez que jugaba contra el Atletico de Madrid" },
  ],
  [
    { letter: "o", answer: "overmars", status: 0, question: "CON LA O. Apellido del extremo holandés fichado del Arsenal que era más rápido que velocistas olímpicos" },
    { letter: "o", answer: "angoy", status: 0, question: "CONTIENE LA O. Apellido del único jugador que ha representado a Barcelona en los primeros equipos de futbol y de futbol americano" },
    { letter: "o", answer: "bartomeu", status: 0, question: "CONTIENE LA O. Presidente blaugrana que era conocido como Nobita" },
  ],
  [
    { letter: "p", answer: "paris", status: 0, question: "CON LA P. Ciudad del equipo que recibió un milagroso 6-1 con 3 goles en los últimos 5 minutos de partido" },
    { letter: "p", answer: "pitu", status: 0, question: "CON LA P. Apodo con el que se conocia al defensa asturiano Abelardo Fernández" },
    { letter: "p", answer: "kappa", status: 0, question: "CONTIENE LA P. Marca de ropa deportiva que generó polémica incluyendo el color blanco en la camiseta del barça" },
  ],
  [
    { letter: "q", answer: "quini", status: 0, question: "CON LA Q. Pichichi asturiano que fue secuestrado mientras jugaba en el primer equipo azulgrana" },
    { letter: "q", answer: "pique", status: 0, question: "CONTIENE LA Q. Apellido de un actual defensa que tarde o temprano será presidente del club" },
    { letter: "q", answer: "enrique", status: 0, question: "CONTIENE LA Q. Segundo nombre del entrenador que logró el segundo triplete de la historia blaugrana" },
  ],
  [
    { letter: "r", answer: "ronaldinho", status: 0, question: "CON LA R. Nombre del brasileño del que se dice que devolvió la sonrisa al FC Barcelona" },
    { letter: "r", answer: "rivaldo", status: 0, question: "CON LA R. Su chilena es el mejor recuerdo de la etapa presidida por Joan Gaspart" },
    { letter: "r", answer: "romario", status: 0, question: "CON LA R. Descubrió al mundo el regate conocido como COLA DE VACA" },
  ],
  [
    { letter: "s", answer: "samuel", status: 0, question: "CON LA S. Nombre del delantero camerunés Eto'o" },
    { letter: "s", answer: "schuster", status: 0, question: "CON LA S. Apellido del único centrocampista alemán que ha liderado el juego del Barça, Madrid y Atlético de Madrid" },
    { letter: "s", answer: "setien", status: 0, question: "CON LA S. Apellido del entrenador cántabro que dejó las vacas para entrenar a Messi" },
  ],
  [
    { letter: "t", answer: "triplete", status: 0, question: "CON LA T. Cúmulo de trofeos en una misma temporada cuyo único equipo en ganarlo 2 veces es el FC Barcelona" },
    { letter: "t", answer: "coutinho", status: 0, question: "CONTIENE LA T. Apellido del fichaje más caro de la historia blaugrana" },
    { letter: "t", answer: "tot", status: 0, question: "CON LA T. Primera palabra del Cant Blaugrana" },
  ],
  [
    { letter: "u", answer: "urruti", status: 0, question: "CON LA U. Portero que dió una liga al barça al detener un penalti,y que para siempre se le dijo 'T ESTIMO' " },
    { letter: "u", answer: "suarez", status: 0, question: "CONTIENE LA U. Apellido del delantero uruguayo famoso por su mordisco a Chiellini" },
    { letter: "u", answer: "mundial", status: 0, question: "CONTIENE LA U. Título de clubs que ganó el Barça por primera vez gracias a un gol de pecho de Messi" },
  ],
  [
    { letter: "v", answer: "alves", status: 0, question: "CONTIENE LA V. Lateral derecho brasileño que brilló por su conexión con Messi" },
    { letter: "v", answer: "valdes", status: 0, question: "CON LA V. Apellido del portero que logró romper la maldición de la porteria tras la salida de Zubizarreta" },
    { letter: "v", answer: "villa", status: 0, question: "CON LA V. Apellido del delantero asturiano del que se decia que era una maravilla" },
  ],
  [
    { letter: "w", answer: "wembley", status: 0, question: "CON LA W. Estadio donde el Barça logró su primera Copa de Europa" },
    { letter: "w", answer: "lewandoski", status: 0, question: "CON LA W. Apellido del delantero polaco que lideró al Bayern del 2-8" },
    { letter: "w", answer: "wembley", status: 0, question: "CON LA W. Estadio donde el Barça logró su primera Copa de Europa" },
  ],
  [
    { letter: "x", answer: "xavi", status: 0, question: "CON LA X. Capitán blaugrana nacido en Terrassa, y de quien se dice que acabará siendo entrenador del primer equipo" },
    { letter: "x", answer: "rexach", status: 0, question: "CONTIENE LA X. Apellido del segundo entrenador más famoso y más perezoso de la historia azulgrana" },
    { letter: "x", answer: "txiki", status: 0, question: "CONTIENE LA X. Mote con el que se conocia a Aitor Beguiristain" },
  ],
  [
    { letter: "y", answer: "puyol", status: 0, question: "CONTIENE LA Y. Apellido del gran capitán conocido como TIBURÓN" },
    { letter: "y", answer: "cruyff", status: 0, question: "CONTIENE LA Y. Apellido del holandés que cambió la historia del Barça primero como jugador y posteriormente como entrenador" },
    { letter: "y", answer: "bayern", status: 0, question: "CONTIENE LA Y. Equipo alemán que endosó un 2-8 al barça en la Champions de 2020" },
  ],
  [
    { letter: "z", answer: "zubizarreta", status: 0, question: "CON LA Z. Portero vasco que llegó a ser capitán del Dream Team" },
    { letter: "z", answer: "unzue", status: 0, question: "CON LA Z. Portero que ganó con el equipo blaugrana una Champions como portero suplente y otra como segundo entrenador" },
    { letter: "z", answer: "nuñez", status: 0, question: "CONTIENE LA Z. Apellido del presidente blaugrana cuya portera fichaba mejor que los entrenadores" },
  ],
];

//Activar botones para respuesta
function activeButtons() {
  document.getElementById("answer").addEventListener("keyup", function (event) {
    event.preventDefault();

    if (event.keyCode === 13) {
      document.getElementById("ok").onclick();
    }

    if (event.keyCode === 32) {
      document.getElementById("pasapalabra").onclick();
    }

    if (event.keyCode === 27) {
      document.getElementById("stop").onclick();
    }
  });
}

activeButtons();

//Seleccionar 27 preguntas aleatorias
function selectQuestions() {
  for (var j = 0; j < 27; j++) {
    var b = Math.floor(Math.random() * 3);
    questions.push(questionsList[j][b]);
    questions[j]["status"] = 0;
  }
  return questions;
}

//Mostrar clasificación desde menú principal
function showBestPlayers() {
  document.getElementById("container_menu").style.visibility = "hidden";
  document.getElementById("container_best_players").style.visibility = "visible";
  document.getElementById("name_intro").style.visibility = "hidden";
}

//Mostrar instrucciones del juego desde menú principal
function showInstructions() {
  document.getElementById("container_menu").style.visibility = "hidden";
  document.getElementById("container_instructions").style.visibility = "visible";
  document.getElementById("name_intro").style.visibility = "hidden";
}

//Botón volver a menú principal
function returnToMenu() {
  document.getElementById("play_menu").style.display = "block";
  document.getElementById("name_intro").style.visibility = "hidden";
  document.getElementById("container_game").style.visibility = "hidden";
  document.getElementById("container_best_players").style.visibility = "hidden";
  document.getElementById("container_menu").style.visibility = "visible";
  document.getElementById("container_instructions").style.visibility = "hidden";
}

//Panel nuevo jugador/a visible
function newUserIntro() {
  document.getElementById("user_name").value = "";
  document.getElementById("name_intro").style.visibility = "visible";
  document.getElementById("alert_user").style.visibility = "hidden";
  document.getElementById("user_name").focus();
}

//Introducción de nuevo jugador/a
function newUser() {
  userName = document.getElementById("user_name").value;
  userName = userName.toUpperCase();
  if (userName === "") {
    //Vacio para evitar que avance el programa
  } else if (allUserNames.indexOf(userName) === -1) {
    allUserNames.push(userName);
    document.getElementById("container_menu").style.visibility = "hidden";
    document.getElementById("play_menu").style.display = "none";
    document.getElementById("container_game").style.visibility = "visible";
    document.getElementById("correct").innerHTML = "Aciertos";
    document.getElementById("incorrect").innerHTML = "Errores";
    document.getElementById("correct").style.color = "white";
    document.getElementById("incorrect").style.color = "white";
    questions = [];
    questionIndex = 0;
    correctAnswer = 0;
    incorrectAnswer = 0;

    selectQuestions();

    for (var i = 0; i < questions.length; i++) {
      questions[i].status = 0;
      document.getElementsByClassName("results")[i].style.backgroundColor = "white";
    }

    gameQuestions();
    timer();
  } else {
    document.getElementById("alert_user").style.visibility = "visible";
    setTimeout(newUserIntro, 2000);
  }
  document.getElementById("answer").focus();
}

//Generador de preguntas
function gameQuestions() {
  userAnswer.value = "";

  if (questions[questionIndex].status === 0) {
    gameAsk.innerHTML = questions[questionIndex].question;
  } else {
    goToList();
  }
}

//Condicionales de respuesta
function answerAnalyzer() {
  userAnswer.value = userAnswer.value.toLowerCase();

  if (userAnswer.value === questions[questionIndex].answer) {
    questions[questionIndex].status = "c";
    document.getElementsByClassName("results")[questionIndex].style.backgroundColor = "green ";
    correctAnswer++;
    document.getElementById("correct").innerHTML = '<span style="color:white">' + "Aciertos: " + "</span>" + correctAnswer;
    document.getElementById("correct").style.color = "green";
    goToList();
  } else {
    questions[questionIndex].status = "f";
    document.getElementsByClassName("results")[questionIndex].style.backgroundColor = "red";
    incorrectAnswer++;
    document.getElementById("incorrect").innerHTML = '<span style="color:white">' + "Errores: " + "</span>" + incorrectAnswer;
    document.getElementById("incorrect").style.color = "red";
    goToList();
  }
}

//Jugador/a pulsa PASAPALABRA
function userPasapalabra() {
  document.getElementsByClassName("results")[questionIndex].style.backgroundColor = "blue";
  goToList();
}

//Incorporar en Ranking jugador/a y puntuación
function userRanked() {
  totalPlayers.push({
    user: userName,
    points: correctAnswer,
  });
}

//Analisis de respuestas
function goToList() {
  if (questionIndex < questions.length - 1) {
    questionIndex++;
    gameQuestions();
    document.getElementById("answer").focus();
  } else if (questionIndex === questions.length - 1 && correctAnswer + incorrectAnswer === questions.length) {
    clearInterval(timerGenerate);
    userRanked();
    rankingBestPlayers();
  } else if (questionIndex === questions.length - 1) {
    questionIndex = 0;
    gameQuestions();
  }
}

//Mostrar Clasificación General de jugadores/as
function rankingBestPlayers() {
  document.getElementById("container_menu").style.visibility = "hidden";
  document.getElementById("container_game").style.visibility = "hidden";
  document.getElementById("container_best_players").style.visibility = "visible";

  function list() {
    function sortRanking() {
      totalPlayers.sort(function (a, b) {
        return b.points - a.points;
      });
    }
    sortRanking();

    var filterUser = totalPlayers.filter(function (value) {
      return value.user;
    });

    for (var i = 0; i < filterUser.length; i++) {
      document.getElementById("first").innerHTML = '<span style="color:orange">' + filterUser[0].user + "</span>" + " con un total de: " + filterUser[0].points + " puntos";
      document.getElementById("second").innerHTML = '<span style="color:orange">' + filterUser[1].user + "</span>" + " con un total de: " + filterUser[1].points + " puntos";
      document.getElementById("third").innerHTML = '<span style="color:orange">' + filterUser[2].user + "</span>" + " con un total de: " + filterUser[2].points + " puntos";
      document.getElementById("fourth").innerHTML = '<span style="color:orange">' + filterUser[3].user + "</span>" + " con un total de: " + filterUser[3].points + " puntos";
      document.getElementById("fifth").innerHTML = '<span style="color:orange">' + filterUser[4].user + "</span>" + " con un total de: " + filterUser[4].points + " puntos";
      document.getElementById("sixth").innerHTML = '<span style="color:orange">' + filterUser[5].user + "</span>" + " con un total de: " + filterUser[5].points + " puntos";
      document.getElementById("seventh").innerHTML = '<span style="color:orange">' + filterUser[6].user + "</span>" + " con un total de: " + filterUser[6].points + " puntos";
      document.getElementById("eighth").innerHTML = '<span style="color:orange">' + filterUser[7].user + "</span>" + " con un total de: " + filterUser[7].points + " puntos";
      document.getElementById("nineth").innerHTML = '<span style="color:orange">' + filterUser[8].user + "</span>" + " con un total de: " + filterUser[8].points + " puntos";
      document.getElementById("tenth").innerHTML = '<span style="color:orange">' + filterUser[9].user + "</span>" + " con un total de: " + filterUser[9].points + " puntos";
    }
  }
  list();
}

//Cuenta atrás
function timer() {
  var timerPanel = document.getElementById("timer");
  timerPanel.innerHTML = "300";
  timeLeft = 300;
  timerGenerate = setInterval(function () {
    timeLeft--;
    if (timeLeft <= 10) {
      timerPanel.style.color = "red";
    }
    if (timeLeft === 0) {
      clearInterval(timerGenerate);
      userRanked();
      rankingBestPlayers();
    }
    timerPanel.innerHTML = timeLeft;
  }, 1000);
}

//Botón salir del juego
function endGame() {
  clearInterval(timerGenerate);
  document.getElementById("play_menu").style.display = "block";
  document.getElementById("name_intro").style.visibility = "hidden";
  document.getElementById("container_game").style.visibility = "hidden";
  document.getElementById("container_menu").style.visibility = "visible";
}
