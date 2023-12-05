# 前言

> 更新时间：2023-12-04

## 简介

[Skylark](https://github.com/delav/skylark-doc) 是一个以功能组件的方式编写测试用例的开源分布式自动化测试平台。理论上可支持任何类型的自动化测试，包括接口测试、
集成测试、UI测试、数据库测试等。

### 特点
* `独特的用例编写方式。`功能组件是组成自动化测试用例的基本单元，通过拖拽移动+填写参数即可编写用例。
* `高可扩展性。`业务和平台分离，如需任何功能，开发相应的功能组件（python函数）即可，可用于复杂的业务。
* `高可读性。`用例可视化，所见即所得，无论任何人都可以清晰的看到用例的实现内容，利于团队协作。
* `低门槛，易使用。`无任何编程基础知识，关注的是你的自动化测试设计过程，而非脚本或者代码实现。
* `分布式运行。`支持一个项目分多个批次同时执行（多机器、多进程），可大大降低自动化执行所需的时间。

## 架构
### 整体框架
![](public/icons/framework.png)

### 组成部分
综合多种因素考虑后，组成大概分为四个部分：
* [skylark-web](https://github.com/delav/skylark-web)：基于Vue开发的用户交互界面
* [skylark](https://github.com/delav/skylark)：基于Django开发的后端服务
* [skylarkwork](https://github.com/delav/skylarkworker)：专门用于执行测试任务
* [skylarklibrary](https://github.com/delav/skylarklibrary)：用于开发和迭代功能组件

::: tip 说明
仓库暂时未开放
:::






