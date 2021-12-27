
- Svg 正常在组件里import
  - import尽量少用相对路径
  - 解决方案： 在tsconfig.json里的compilerOptions加入baseurl
- 模拟后端
  - mockjs，更改http ajax， 动态模拟数据，不支持fetch
  - swagger 配置麻烦,但会自动按着后端api更改
  - Json-server 轻量级后端模拟 restapi
- \__文件夹名__ 
  - 代表该文件夹与项目无关，开发辅助用
decodeURI vs decodeURIComponent
带Component字眼会处理特殊字符，例如 ：、/？#