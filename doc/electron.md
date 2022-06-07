# Electron

* 根据屏幕尺寸设置尺寸

```
const size = screen.getPrimaryDisplay().workAreaSize
const width = parseInt(size.width * 0.9)
const height = parseInt(size.height * 0.9)

const mainWindow = new BrowserWindow({
  width: width,
  height: height,
})
```