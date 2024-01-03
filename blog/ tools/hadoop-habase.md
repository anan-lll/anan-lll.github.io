---
title: hadoop-habase
date: 2020-07-02
description: hadoop-habase
disabled: false
readMins: 8
tags:
  - Github
---

# Hbase常用命令

## hbase命令的基本使用

```shell
（1）进入hbase集群（目前我们用的都是236、237、238集群的hbase），命令：hbase shell
（2）查询表，命令：list
（3）读取某一行数据（get  '表名',"rowkey"），命令：get 'gx_rpt:msg_push_taskid_group' ,"7e7ae12f171177601e593f5b6016bb0f,RASA_0518_2495c3fad6c0b9010c1cd5dc0684e1c0"
（4）清空某个表，命令：truncate  'testsurui'
（5）查询某个表全部数据： scan 'testsurui'
（6）注意：建hbase表的时候，有的hbase表，是先见namespace，有的没带。
     建namespace:
     create_namespace 'gx_rpt'
     建表：
     create 'gx_rpt:msg_push_taskid_group','infs'
```

## hdfs命令的基本使用

```shell
hdfs dfs  等同于hadoop fs
（1）查看指定目录下内容 hadoop fs -ls [目录]
（2）查看文件内容 hadoop fs -cat [文件]
（3）hadoop fs -text [文件*] | more
（4）将源文件输出为文本格式 hadoop fs -text [文件]
（5）在hadoop指定目录内创建新目录，
    hdfs dfs –mkdir /user/t
    hdfs  dfs -mkdir - p /user/centos/hadoop
（6）在hadoop指定目录下新建一个空文件，使用touchz命令：
    hdfs dfs  -touchz  /user/new.txt
（7）将hadoop上某个文件down至本地已有目录下：hadoop fs -get [文件目录] [本地目录]
（8）将本地文件存储至hadoop上：hadoop fs –put [本地地址] [hadoop目录]
（9）修改hadoop文件权限：hadoop fs -chmod 777 hdfs://hdp/user/surui/gi
```
