---
title: allure
date: 2020-07-02
description: allure常用命令
disabled: false
readMins: 2
tags:
  - Github
---

# allure常用命令

```shell
#先执行这个生成report
allure generate ./allure-results -o allure-report --clean

#生成测试报告指定ip和端口
allure serve allure-results -h ip -p port---(ip直接在本地ifconfig选择en0即可，端口随便指定一个没有被占用的即可)
例如：
allure serve allure-results -h 192.168.130.111 -p 8088
不指定ip端口--可能会导致访问不了的情况
allure serve allure-results
```
