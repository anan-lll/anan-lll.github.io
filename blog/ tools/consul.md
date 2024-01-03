---
title: consul
date: 2020-07-02
description: consul部署和启动
disabled: false
readMins: 8
tags:
  - Github
---

## 启动命令

```shell
我的 Ip地址192.168.18.36
//后台启动(好像不管用了)
consul agent -data-dir /tmp/node0 -node=node0 -bind=192.168.18.36 -datacenter=dc1 -ui -client=192.168.18.36 -server -bootstrap-expect 1
//用这个后台启动
#18.36机器：
#cd /app/consul
nohup ./consul agent -server -ui -bootstrap-expect=1 -data-dir=/tmp/consul -node=agent-one -bind=192.168.18.36 -client=192.168.18.36 &
```

## 参考内容

- [linux consul部署安装](https://blog.csdn.net/wudaoshihun/article/details/83032935)
- [linux安装consul](https://blog.csdn.net/qq_38270106/article/details/83239921)
