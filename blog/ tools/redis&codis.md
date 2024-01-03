---
title: redis&codis
date: 2021-09-02
description: redis&codis部署连接等
disabled: false
readMins: 15
tags:
  - Github
---

# codis集群部署教程

## 第一步：zk部署

- [zk部署](https://blog.csdn.net/A_Little_Fish_/article/details/117384614)

## 第二步：安装go环境

- [go环境安装](https://www.cnblogs.com/yiyi20120822/p/11652612.html)

## 第三步：codis部署

- [codis部署教程](https://www.cnblogs.com/zhoujinyi/p/9249873.html)

## 启动命令

```shell
#### zk启动：
cd /usr/local/zookeeper/bin
zkServer.sh start //zk启动
zkServer.sh status //zk状态查询
zkServer.sh stop  //zk停止

### codis-server启动
cd /etc/codis/codis-server
codis-server /etc/codis/codis-server/redis7021.conf  //启动7021端口的codis-server
codis-server /etc/codis/codis-server/redis7022.conf  //启动7022端口的codis-server

### codis-dashboard启动：
codis-dashboard --ncpu=1 --config=/etc/codis/codis-dashboard/dashboard.toml --log=/usr/local/codis/logs/dashboard.log --log-level=warn &
//关闭codis-dashboard服务：
codis-admin --dashboard=192.168.10.25:18080 --shutdown

### codis-proxy启动：
codis-proxy --ncpu=1 --config=/etc/codis/codis-proxy/proxy.toml --log=/usr/local/codis/logs/proxy.log --log-level=warn &
//停止codis-proxy服务：
 codis-admin --proxy=192.168.10.25:11080 --shutdown

 ### codis-fe启动
 codis-fe --ncpu=1 --dashboard-list=/etc/codis/codis-fe/codis.json --listen=192.168.10.25:18090 --log=/usr/local/codis/logs/fe.log --log-level=warn --assets-dir=/usr/local/codis/bin/assets/ &
//关闭codis-fe：
ps -ef|grep codis-fe|grep -v grep|awk '{print $2}'|xargs kill
```

## codis集群部署遇到的一些问题

- [codis部署问题总结](https://note.youdao.com/s/CB2d2pIR)
