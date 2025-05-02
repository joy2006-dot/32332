let capture;
let overlayGraphics;

function setup() {
  createCanvas(windowWidth, windowHeight); // 全螢幕畫布
  capture = createCapture(VIDEO); // 啟用攝影機
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定攝影機影像大小
  capture.hide(); // 隱藏攝影機原始影像

  // 建立與攝影機影像相同大小的圖形緩衝區
  overlayGraphics = createGraphics(capture.width, capture.height);
}

function draw() {
  background('#ffe6a7'); // 設定背景顏色

  // 將攝影機畫面繪製到 overlayGraphics
  overlayGraphics.clear(); // 清除之前的內容
  let unitSize = 20; // 單位大小
  let circleSize = 15; // 圓的大小
  for (let x = 0; x < overlayGraphics.width; x += unitSize) {
    for (let y = 0; y < overlayGraphics.height; y += unitSize) {
      // 擷取攝影機畫面的一部分作為圓圈的內容
      overlayGraphics.copy(
        capture,
        x, y, unitSize, unitSize, // 從攝影機畫面擷取的區域
        x + (unitSize - circleSize) / 2, y + (unitSize - circleSize) / 2, circleSize, circleSize // 繪製到圓圈內
      );
    }
  }

  // 顯示攝影機影像
  image(
    capture,
    (width - capture.width) / 2, // 將影像置中
    (height - capture.height) / 2,
    capture.width,
    capture.height
  );

  // 顯示 overlayGraphics 在視訊畫面上方
  image(
    overlayGraphics,
    (width - capture.width) / 2, // 與視訊畫面對齊
    (height - capture.height) / 2,
    capture.width,
    capture.height
  );
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布
}
