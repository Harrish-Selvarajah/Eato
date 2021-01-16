$(document).on('pageinit', '#qr-scanner', function () {
  // debugger
  const qrcode = window.qrcode;

  var video = document.createElement("video");
  var canvasElement = document.getElementById("qr-canvas");
  var canvas = canvasElement.getContext("2d");

  const qrResult = document.getElementById("qr-result");
  var outputData = document.getElementById("outputData");
  //   var btnScanQR = document.getElementById("btn-scan-qr");
  var loyaltyPoints = JSON.parse(sessionStorage.getItem('loyaltyPoints'));

  let scanning = false;

  qrcode.callback = res => {
    // debugger;
    if (res) {
      outputData.innerText = 'Hooray!! You have recieved' + ' ' + res + ' ' + 'points.';
      scanning = false;
      console.log( res);
      video.srcObject.getTracks().forEach(track => {
        track.stop();
      });
      loyaltyPoints = loyaltyPoints + Number(res);
      qrResult.hidden = false;
      canvasElement.hidden = true;
      //   btnScanQR.hidden = false;
      $('#popup-modal').popup('open');
      sessionStorage.setItem('loyaltyPoints', loyaltyPoints);
    }
  };


  navigator.mediaDevices
    .getUserMedia({ video: { facingMode: "environment" } })
    .then(function (stream) {
      scanning = true;
      // qrResult.hidden = true;
      // btnScanQR.hidden = true;
      canvasElement.hidden = false;
      video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
      video.srcObject = stream;
      video.play();
      tick();
      scan();
    });


  function tick() {
    canvasElement.height = video.videoHeight;
    canvasElement.width = video.videoWidth;
    canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);

    scanning && requestAnimationFrame(tick);
  }

  function scan() {
    try {
      qrcode.decode();
    } catch (e) {
      setTimeout(scan, 300);
    }
  }
});