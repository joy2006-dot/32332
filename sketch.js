let capture;

function setup() {
  createCanvas(windowWidth, windowHeight); // 全螢幕畫布
  background('#ffe6a7'); // 設定背景顏色
  capture = createCapture(VIDEO); // 擷取攝影機影像
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定影像大小為視窗的 80%
  capture.hide(); // 隱藏原始影像，僅顯示在畫布上
}

function draw() {
  background('#ffe6a7'); // 每次繪製時重設背景
  image(
    capture,
    (width - capture.width) / 2, // 將影像置中
    (height - capture.height) / 2,
    capture.width,
    capture.height
  );
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布
}
