---
title: Kubernetes
date: 2021-06-15
description: k8s日常使用
disabled: false
readMins: 10
tags:
  - Github
---

# k8s日常使用

## k8s命令列表

- [k8s命令列表](http://docs.kubernetes.org.cn/664.html)

## 其他常用命令

```shell
### 临时修改配置文件：
1.kubectl get deployment
2.kubectl edit deployment guandata-web-deployment

### 重启pod：
kubectl delete po guandata-server-controller-59c67f9df9-htjbv

### 查看日志：
kubectl logs --tail 100 -f spark-job-engine-controller-bb5c979bc-qpml5
kubectl logs -f  etcd-kmaster1 -n kube-system
kubectl logs --tail 200 -f kube-apiserver -n kube-system  #查看最后200行的日志
kubectl logs -l app=frontend # 返回所有标记为 app=frontend 的 pod 的合并日志。
kubectl logs --since=1h nginx#查看名称为nginx这个pod最近一小时的日志

### 查看多节点的机器：
kubectl get pods -o wide|grep 关键词

### 强制删除pod：
kubectl delete pod guandata-server-deployment-7985b6dd56-h5dht --force

### 缩容：
kubectl scale --replicas=x deployment  [your deployment]
kubectl scale --replicas=0 deployment  spark-job-engine-etl-controller

### 部署多节点：
把Deployment改成DaemonSet,把replicas那一行删掉

### 删除pod:
可以直接删除yaml文件，例如
kubectl delete -f server-controller.yaml
```
