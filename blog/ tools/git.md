---
title: git
date: 2021-09-30
description: git日常使用记录
disabled: false
readMins: 5
tags:
  - Github
---

# Git日常使用

## 拉取代码

```shell
### 拉取指定分支的代码：
git clone -b 分支名 仓库地址
示例：
git clone -b performance ssh://git@gitlab.mayidata.com:2222/testing.git
```

## 提交代码到一个新项目

```shell
首次提交代码到一个新项目：
1、（先进入项目文件夹）通过命令 git init 把这个目录变成git可以管理的仓库
git init
2、把文件添加到版本库中，使用命令 git add .添加到暂存区里面去，不要忘记后面的小数点“.”，意为添加文件夹下的所有文件
git add .
3、用命令 git commit告诉Git，把文件提交到仓库。引号内为提交说明
git commit -m 'first commit'
4、关联到远程库
git remote add origin 你的远程库地址
如：
git remote add origin https://github.com/githubusername/demo.git
5、获取远程库与本地同步合并（如果远程库不为空必须做这一步，否则后面的提交会失败）
git pull --rebase origin master
6、把本地库的内容推送到远程，使用 git push命令，实际上是把当前分支master推送到远程。执行此命令后会要求输入用户名、密码，验证通过后即开始上传。
git push -u origin master
*、状态查询命令
git status
```

## 重新建立远程仓库

```shell
首先查看
git remote -v 查看是否正确
然后更改之前先移除
git remote rm origin
最后加入地址
git remote add origin [地址]
最后查看是否更正
git remote -v
就ok了
```

## 提交代码流程

```shell
### 查看所在分支
git branch -a
### 查看修改了哪些文件
git status
### 提交所需提交的文件
git add xxx.java
1、这里需要注意：git add某个文件需要填写绝对路径，就把上面需要modified的文件路径copy过来即可：
如：git add src/test/java/hbase/insert/MsgUserToHbase.java
2、如果想要忽略某个文件，上传其他文件
git restore <file>
示例：git restore src/test/java/hbase/insert/MsgUserToHbase.java
3、如果想上传所有改动的文件：
git add .
### commit
git commit -m "描述"
示例：git commit -m “修改插入HBASE数据value为"time|code"格式”
### 提交代码到对应的分支
git push -u origin 分支
示例：
git push -u origin test
```

## 删除远程分支的内容

```shell
例如 git删除远程分支 .idea 目录
1、进入项目根目录：(项目的文件夹)
$ cd /c/users/john/blog/
2.删除缓存区.idea（保留工作区.idea）
$ git rm --cached -r .idea
3.提交.gitiginore文件，将.idea从源代码仓库中删除（-m 表示注解）
$ git commit -m “commit and remove .idea”
4.推送到远程端
$ git push
```

## 其他资料

- [git教程](https://www.liaoxuefeng.com/wiki/896043488029600)
- [git基础操作](https://segmentfault.com/a/1190000002612680)
