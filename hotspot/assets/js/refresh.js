document.getElementById("cncl").addEventListener("click",function () {
  var timeoutID = window.setTimeout(function () {
      window.location.reload();
  }, 1000);
});