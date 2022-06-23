// Esercizi :
// Timeout
// Stampiamo dopo 1,5,10 secondi l'orario corrente in questo formato --> "Ora" : "Minuti"
// possiamo scrivere 3 timeout diversi, oppure come bonus usiamo un array con i tempi [1,5,10].forEach

// Interval
// Fare il console.log analogo a quello mostrato su time.is
// dato un array [42, 23, 1, 7, 12, 99] estraiamo ogni secondo, come se fosse un tombola, un numero. Cancelliamo l'interval quando avremo pescato tutti i numeri possibili. tip: Contiamo quante volte abbiamo fatto parte l'intervallo

// DOM
// Prendiamo l'esercizio 1 di Interval e stampiamo la data nel body usando document.body.innerHTML = "...""

// ----------------------
// ---------------------- Timeout

(function () {
  const now = new Date();
  const currentTime =
    "Ora " + now.getHours() + " : " + "Minuti " + now.getMinutes();

  setTimeout(timeOut, 1000);
  setTimeout(timeOut2, 5_000);
  setTimeout(timeOut3, 10_000);

  function timeOut() {
    console.log(currentTime);
  }

  function timeOut2() {
    console.log(currentTime);
  }

  function timeOut3() {
    console.log(currentTime);
  }
})();

// ----------------------
// ---------------------- Timeout +

(function () {
  const now = new Date();
  const currentTime =
    "Ora " + now.getHours() + " : " + "Minuti " + now.getMinutes();

  const delayedTime = () => {
    console.log(currentTime);
  };

  const array = [1, 5, 10];

  array.forEach((value) => {
    setTimeout(delayedTime, value * 1000);
  });
})();

// ----------------------
// ---------------------- Interval

(function () {
  const now = new Date();
  const currentTime =
    now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

  const myClock = () => {
    console.log();
  };

  console.log(`${currentTime}`);

  setInterval(myClock, 1000);
})();

// ----------------------
// ---------------------- DOM

// (function () {
//   const now = new Date();
//   const currentTime =
//     now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

//   const myClock = () => {
//     console.log();

//     document.body.innerHTML = `<h1> ${currentTime} </h1>`;
//   };

//   setInterval(myClock, 1000);
// })();

// ----------------------
// ---------------------- DOM altra prova

(function () {
  const now = new Date();
  const currentTime =
    now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

  setInterval(function () {
    document.body.innerHTML = `<h1> ${currentTime} </h1>`;
  }, 1000);
})();
