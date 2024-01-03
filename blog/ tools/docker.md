---
title: docker
date: 2023-02-27
description: docker日常使用
disabled: false
readMins: 5
tags:
  - Github
---

# docker 常用命令

## 查看服务：

```shell
docker ps |grep mysql
```

## 拉取镜像：

```shell
docker pull [OPTIONS] NAME[:TAG|@DIGEST]
例：docker pull  tomcat:8
```

## 启动服务：

```shell
docker run --restart always --name mytomcat -p 8082:8080  -v  /home/GuanPlusTest/static/report/tomcat/webapps:/usr/local/tomcat/webapps/ -d  2d2bccf89f53
参数解释：
--restart always 表示不管什么情况退出都自动重启
—name mytomcat 容器重命名mytomcat （这个名称通过docker ps|grep 名称）
-p 8082:8080  容器的8080端口映射到主机的8082端口
-v  /home/GuanPlusTest/static/report/tomcat/webapps:/usr/local/tomcat/webapps/
冒号前面为宿主机的目录，冒号后面为容器的目录。意思是将容器的这个目录挂载到宿主机的/home/.../webapps目录下，这样的话只需要操作宿主机（本机）上的这个目录下的文件，就相当于操作容器的那个目录；
-d 挂后台运行
run命令  冒号左边都是宿主机，冒号右边都是容器内的

```

启动成功后可以查看到服务：
![这是图片](/img/image.png 'Magic Gardens')

## 重启：

```shell
docker restart 进程ID（就是docker ps以后的第一个ID）
```

## 停止服务：

```shell
docker stop 容器名称/容器id
```

## 删除容器：

```shell
docker rm 容器名称/容器id
```

## 查看日志：

```shell
docker  logs 进程ID（就是docker ps以后的那个ID）
```

## 查看本地有哪些镜像：

```shell
docker images  或docker images|grep "镜像名称"
```

## 删除本地镜像：

```shell
docker rmi registry.cn-hangzhou.aliyuncs.com/guandata/jdbc-worker:20221230_3e19305
docker rmi 仓库名:TAG
```

## 拉取远程仓库镜像：

```shell
docker pull  registry.cn-hangzhou.aliyuncs.com/guandata/jdbc-worker:20221230_3e19305
docker pull 仓库名:TAG
```

## 理解：

<p>
镜像-其实就是一个包，跟jar包类似的，可以推到远程仓库，通过docker pull下来进行部署；<br>
容器-可以和一个服务做对比，一个容器就是一个镜像部署run 以后的一个“服务”，容器有容器id和容器名称。就类似于ps -ef|grep “服务名称”后的服务id和服务名称；<br>
所以对应镜像有bulid push pull的操作；<br>
对应容器有 run stop restart rm的操作。<br>
</p>
