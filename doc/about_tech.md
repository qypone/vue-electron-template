# 相关技术说明

## yarn

```
// 添加依赖
yarn add lowdb
// 移除依赖
yarn remove lowdb
// 更新依赖
yarn install
```

## Element

### 安装element

```
yarn add element-plus
```
### 使用element
* main.js中引入
```
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

app.use(ElementPlus)
```
* .vue文件中使用
```
<el-button type="success">Success</el-button>
```
### 参考文档
> https://element-plus.gitee.io/zh-CN/

参考文档即可开发

## Electron

### 根据屏幕尺寸设置尺寸

```
const size = screen.getPrimaryDisplay().workAreaSize
const width = parseInt(size.width * 0.9)
const height = parseInt(size.height * 0.9)

const mainWindow = new BrowserWindow({
  width: width,
  height: height,
})
```

## 其它参考文文档

> https://zhuanlan.zhihu.com/p/421460116