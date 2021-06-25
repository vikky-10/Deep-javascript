document.querySelector(".btn").addEventListener("click", loadText);
function loadText() {
  //object with bunch of propert and methods
  let request = new XMLHttpRequest();
  //OPEN ==> type,url/file async
  request.open("GET", "sample.txt", true);
  //   console.log("Ready state", request.readyState); //1  server connection established

  //optional used for loader
  //   request.onprogress = function () {
  //     console.log("Ready state", request.readyState);
  //   };

  //difference load and readystatechange events

  // A readystatechange event fires every time the readyState changes (which is several times).

  // A load event fires only when the request has completed successfully.

  /*---------------*/
  /*---------------*/
  /*---------------*/
  /*---------------*/
  //new using load even
  request.onload = function () {
    console.log("Ready State", request.readyState); //4
    if (this.status == 200) {
      //   console.log(this.responseText);
    }
  };

  //error
  request.onerror = function () {
    console.log("request error");
  };

  /*---------------*/
  /*---------------*/
  /*---------------*/
  /*---------------*/
  // 2nd way readystate method
  // readyState	Holds the status of the XMLHttpRequest.
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

  //   request.onreadystatechange = function () {
  //     // console.log("Ready state", request.readyState); //2,3,4
  //     if (this.readyState === 4 && this.status == 200) {
  //       //   console.log(this.responseText);
  //     }
  //   };
  //   console.log("Ready state", request.readyState);//1
  //sends request
  request.send();
}
