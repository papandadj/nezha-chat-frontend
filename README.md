# nezha-chat-frontend

该项目的后端地址在 https://github.com/papandadj/nezha-chat-backend

前端部署我是采用nginx的方式， 没有放在docker里面

##### 下载代码

`git clone git@github.com:papandadj/nezha-chat-frontend.git`

##### 安装依赖

`npm i`

##### 修改配置

因为自己刚学， 不太会组织前端， 我修改配置的方法是在`src/assets/js`文件夹下面有个test.js 文件， 把 baseHost 修改程 "localhost"， 在最下面有个`SocketURL`改成自己本地就可以了。


##### 开启

`npm run dev`


##### 打包部署

打包

`npm run build`

部署

在`/etc/nginx/sites-available/default`里面添加配置， 把root改成打包后的路径即可
```sh
server {

    listen 10000;


    root /root/nezha/frontend/dist;

    index index.html index.htm;

    location / {

        try_files $uri $uri/ /index.html;

        # This will allow you to refresh page in your angular app. Which will not give error 404.

    }
}
```

然后就可以访问本地了 `http://localhost:10000/`