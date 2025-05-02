let capture;
let overlayGraphics;

function setup() {
  createCanvas(windowWidth, windowHeight); // 全螢幕畫布
  background('#ffe6a7'); // 設定背景顏色
  capture = createCapture(VIDEO); // 擷取攝影機影像
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定影像大小為視窗的 80%
  capture.hide(); // 隱藏原始影像，僅顯示在畫布上

  // 建立與視訊畫面相同大小的圖形
  overlayGraphics = createGraphics(capture.width, capture.height);

  // 設定 overlayGraphics 的背景為淺灰色，並繪製圓形圖案
  overlayGraphics.background(200); // 淺灰色背景
  let unitSize = 20; // 單位大小
  let circleSize = 15; // 圓的大小
  for (let x = 0; x < overlayGraphics.width; x += unitSize) {
    for (let y = 0; y < overlayGraphics.height; y += unitSize) {
      let colorValue = map(x + y, 0, overlayGraphics.width + overlayGraphics.height, 0, 255);
      overlayGraphics.fill(colorValue, 100, 255 - colorValue, 150); // 設定圓的顏色
      overlayGraphics.noStroke();
      overlayGraphics.ellipse(x + unitSize / 2, y + unitSize / 2, circleSize, circleSize); // 繪製圓
    }
  }
}

function draw() {
  background('#ffe6a7'); // 每次繪製時重設背景

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
