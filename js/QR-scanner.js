$(document).on('pageinit', '#qr-scanner', function () {
  const qrcode = window.qrcode;

  var video = document.createElement("video");
  var canvasElement = document.getElementById("qr-canvas");
  var canvas = canvasElement.getContext("2d");

  const qrResult = document.getElementById("qr-result");
  var outputData = document.getElementById("outputData");
  //   var btnScanQR = document.getElementById("btn-scan-qr");
  var loyaltyPoints = JSON.parse(sessionStorage.getItem('loyaltyPoints'));
  var loyaltyPointsArray = [];
  let scanning = false;

  qrcode.callback = res => {
    if (res) {
      outputData.innerText = res;
      scanning = false;

      video.srcObject.getTracks().forEach(track => {
        track.stop();
      });
      loyaltyPoints = loyaltyPoints + Number(res);
      qrResult.hidden = false;
      canvasElement.hidden = true;
      //   btnScanQR.hidden = false;
      var vendorId = JSON.parse(sessionStorage.getItem('vendorID'));
      loyaltyPointsArray = JSON.parse(sessionStorage.getItem('loyaltyPointsArray'))
      var vendorName = "";
      if (vendorId === 1) {
        vendorName = 'Melt House';
      } else {
        if (vendorId === 2) {
          vendorName = 'Suburban Kithcen'
      }
    };
      loyaltyPointsArray.push({points: res, via: vendorName, method: 'QR', price: 0});
      sessionStorage.setItem('loyaltyPointsArray', JSON.stringify(loyaltyPointsArray));
      sessionStorage.setItem('loyaltyPoints', loyaltyPoints);

    }
  };


  navigator.mediaDevices
    .getUserMedia({ video: { facingMode: "environment" } })
    .then(function (stream) {
      scanning = true;
      qrResult.hidden = true;
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