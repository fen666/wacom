# wacomchina

> 访问地址：<http://www.wacomchina.cn/>
> 通过Gulp构建工具结合NodeJS快速开发前端静态页，提高项目开发效率。

### package.json文件
（1）新建
```
npm init
```
（2）Gulp插件安装：
```
"browser-sync": "^2.18.13",
"gh-pages": "^1.0.0",
"gulp": "^3.9.1",
"gulp-cache": "^0.4.6",
"gulp-cssmin": "^0.2.0",
"gulp-htmlmin": "^3.0.0",
"gulp-imagemin": "^3.3.0",
"gulp-postcss": "^7.0.0",
"gulp-uglify": "^3.0.0",
"imagemin-pngquant": "^5.0.1",
"postcss": "^6.0.11",
"postcss-salad": "^2.0.1"
```

### .gitignore文件
```
node_modules
.idea
*.log
*.zip
dist/
```
### Gulpfile.js任务
开发模式``gulp default``：less文件编译css，浏览器同步。
生产模式``gulp build``：设置输入输出文件，压缩html、css、images、js并输出文件到dist构建目录下。

### 项目开发
开干啦！

---

### 项目运行
```
// 进入开发模式
npm run dev 或者 gulp (gulp default)
// 进入生产模式
npm run build 或者 gulp build
// 部署到github 的 gh-pages 分支
npm run deploy (gh-pages -d dist/ --remote origin)
```

