## server端
1. 完成一次get请求 
    > 完成
2. 完成一次post请求  
    > 完成
3. 完成一次访问数据库请求 
    > 完成
4. 增加静态资源的访问
    > 完成
5. session的设置
6. 由axios再试试post请求
7. 鉴权登录是放在后端还是前端，后端，由后端控制前端页面的返回
    > 完成
8. 解析请求体的设置
9. 用JWT做鉴权登录
   1.  刚做到一半，走通了JWT设置
   2.  下午开始用鉴权登录做页面控制
10. 容错设置
11. 检查是否登录
12. 完成登录的api
13. 完善添加用户，
14. 删除用户，
15. 修改用户，
16. 查找用户的功能
17. 完善添加list，
18. 删除list
19. 修改list
20. 查找list


## client端

1. 开始编写登录界面
2. 编写list界面

## 两端交互
1. 仅仅访问域名，就会默认去查找index.html,而这恰好是静态资源的路径
2. 看看前端路由改变之后，location如何变化，我将会根据url变化来设计登录界面，和登录鉴权
   1. 后端可以控制前端的url，并且给到对应的文件
   2. index.html会根据url，来渲染对应的组件
   3. 后端要做的是更改url，而文件不做改变，仅此而已
   4. 登录鉴权步骤
      1. 前端编写好登录界面，并且设好路由
      2. 后端用JWT做鉴权登录，如果登录通过，就改变url到主页面
      3. 刷新页面的时候，主页面token过期，就重定向到登录界面
      4. 请求接口的时候，token过期的话，就重定向到登录界面
