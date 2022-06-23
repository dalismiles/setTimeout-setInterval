// Esercizi :
// Timeout
// Stampiamo dopo 1,5,10 secondi l'orario corrente in questo formato --> "Ora" : "Minuti"
// possiamo scrivere 3 timeout diversi, oppure come bonus usiamo un array con i tempi [1,5,10].forEach

// Interval
// Fare il console.log analogo a quello mostrato su time.is
// dato un array [42, 23, 1, 7, 12, 99] estraiamo ogni secondo, come se fosse un tombola, un numero. Cancelliamo l'interval quando avremo pescato tutti i numeri possibili. tip: Contiamo quante volte abbiamo fatto parte l'intervallo

// DOM
// Prendiamo l'esercizio 1 di Interval e stampiamo la data nel body usando document.body.innerHTML = "...""

(function () {
  const myTime = () => {
    const hrs = new Date().getHours();
    const mins = new Date().getMinutes();
    const seconds = new Date().getSeconds();

    console.log(`${hrs} : ${mins} : ${seconds}`);
  };

  setTimeout(myTime, 1000);
  setTimeout(myTime, 5_000);
  setTimeout(myTime, 10_000);

  const displayTime = () => {
    const hrs = new Date().getHours();
    const mins = new Date().getMinutes();
    const seconds = new Date().getSeconds();

    console.log(`${hrs} : ${mins} : ${seconds}`);
  };

  const array = [1, 5, 10];

  array.forEach((value) => {
    setTimeout(() => displayTime(), value * 1000);
  });

  const clock = () => {
    const hrs = new Date().getHours();
    const mins = new Date().getMinutes();
    const seconds = new Date().getSeconds();

    console.log(`${hrs} : ${mins} : ${seconds}`);

    document.body.innerHTML = `<h1> ${hrs}:${mins}:${seconds} </h1>`;
  };
  setInterval(clock, 1000);
})();
