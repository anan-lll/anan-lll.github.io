---
title: kafka
date: 2022-4-13
description: kafka日常使用
disabled: false
readMins: 10
tags:
  - Github
---

# kafka日常使用

```shell
### 后台启动
./kafka-server-start.sh ../config/server.properties 1>/dev/null 2>&1 &创建topic
bin/kafka-topics.sh --create --zookeeper 192.168.10.210:2181 --replication-factor 1 --partitions 1 --topic testsurui

### 描述topic
bin/kafka-topics.sh  --zookeeper localhost:2181 --topic my-replicated-topic --describe

### 查看所有topic信息
bin/kafka-topics.sh --list --zookeeper localhost:2181

### 创建主题（4个分区，2个副本）
bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 2 --partitions 4 --topic test

### 删除topic
 bin/kafka-topics.sh --delete --zookeeper 192.168.10.63:2181  --topic  KT_0703_HG1Qy8S0rZ8zDgmQ7WI4ZA

### 查询集群描述
bin/kafka-topics.sh --describe --zookeeper 192.168.10.63:2181产生消息
bin/kafka-console-producer.sh --broker-list 192.168.18.31:9092 --topic testsurui

###消费消息
./kafka-console-consumer.sh --zookeeper 127.0.0.1:2181/kafka --topic test --from-beginning
返回信息：zookeeper is not a recognized option
原因：由于版本原因0.90版本之后启动消费者的方法有所改变，详细如下：
./kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test --from-beginning

### 新生产者（支持0.9版本+）
bin/kafka-console-producer.sh --broker-list localhost:9092 --topic test --producer.config config/producer.properties

### 新消费者（支持0.9版本+）
bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test --new-consumer --from-beginning --consumer.config config/consumer.properties

### 新消费者列表查询（支持0.9版本+）
bin/kafka-consumer-groups.sh --new-consumer --bootstrap-server localhost:9092 --list

### 显示某个消费组的消费详情（仅支持offset存储在zookeeper上的）
bin/kafka-run-class.sh kafka.tools.ConsumerOffsetChecker --zkconnect localhost:2181 --group test

### 显示某个消费组的消费详情（支持0.9版本+）
bin/kafka-consumer-groups.sh --new-consumer --bootstrap-server localhost:9092 --describe --group test-consumer-group

### 平衡leader
bin/kafka-preferred-replica-election.sh --zookeeper zk_host:port/chroot

### kafka自带压测命令
bin/kafka-producer-perf-test.sh --topic test --num-records 100 --record-size 1 --throughput 100  --producer-props bootstrap.servers=localhost:9092


```
