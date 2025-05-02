##20250502上課筆記
20250502上課筆記
第一個指令
生全螢幕的畫布，畫布顏色為ffe6a7，擷取攝影的影像，正常顯示在螢幕正中間，影像畫面為視窗的80%

說明：
全螢幕畫布：使用 createCanvas(windowWidth, windowHeight)。
背景顏色：使用 background('#ffe6a7') 設定背景顏色。
攝影機影像：
使用 createCapture(VIDEO) 擷取攝影機影像。
設定影像大小為視窗的 80%。
使用 image() 將影像繪製在畫布中央。
視窗大小調整：加入 windowResized() 函式，確保畫布隨視窗大小變化而調整。
將此程式碼儲存後執行即可達成需求。

選擇 Repo
