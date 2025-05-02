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
}

function draw() {
  background('#ffe6a7'); // 每次繪製時重設背景

  // 將攝影機畫面繪製到 overlayGraphics
  overlayGraphics.background(200); // 設定背景為淺灰色
  let unitSize = 20; // 單位大小
  let circleSize = 15; // 圓的大小
  for (let x = 0; x < overlayGraphics.width; x += unitSize) {
    for (let y = 0; y < overlayGraphics.height; y += unitSize) {
      // 擷取攝影機畫面的一部分作為圓圈的內容
      overlayGraphics.fill(0); // 設定圓圈背景顏色（可選）
      overlayGraphics.noStroke();
      overlayGraphics.ellipse(
        x + unitSize / 2,
        y + unitSize / 2,
        circleSize,
        circleSize
      ); // 繪製圓圈背景

      overlayGraphics.copy(
        capture,
        x, y, unitSize, unitSize, // 從攝影機畫面擷取的區域
        x, y, unitSize, unitSize // 繪製到 overlayGraphics 的對應區域
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
