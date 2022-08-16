const time = document.querySelector(".time");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const clear = document.querySelector("#clear");
let milliseconds = 0,
  seconds = 0,
  minutes = 0,
  t;

function addtime() {
  milliseconds = Date.now() - timenow;
  seconds = Math.floor(milliseconds / 1000);
  minutes = Math.floor(seconds / 60);
  let milli =
    milliseconds.toString().length <= 2
      ? `${format(
          milliseconds.toString().split(" ")[0]
        )}`
      : `${
          milliseconds.toString().split(" ")[0]
        }${
          milliseconds.toString().split(" ")[0]
        }`;
  console.log(milli);
  time.innerHTML = format(minutes) + ":" + format(seconds) + "." + format(milli);
}

function format(data) {
  return data ? (data <= 9 ? "0" + data : data) : "00";
}
function calltimer() {
  timenow = Date.now();
  t = setInterval(addtime, 33);
}
function stoptimer() {
  clearTimeout(t);
  console.log(milliseconds);
  start.disabled = false;
}
function cleartimer() {
  time.textContent = "00:00.0";
  seconds = 0;
  minutes = 0;
}
