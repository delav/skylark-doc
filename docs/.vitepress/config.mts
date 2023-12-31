import { defineConfig } from 'vitepress'

//命令集：pnpm add -D vitepress vue less sass @mdit-vue/shared vitepress-markdown-timeline medium-zoom vitepress-plugin-comment-with-giscus

import timeline from "vitepress-markdown-timeline";

export default defineConfig({
  lang: 'zh-CN',
  title: "Skylark",
  description: "Skylark平台使用教程",

  // #region fav
  head: [
    ['link',{ rel: 'icon', href: '/logo.png'}],
  ],
  // #endregion fav

  base: '/skylark-doc/', //网站部署到github的vitepress这个仓库里

  //cleanUrls:true, //开启纯净链接无html


  //启用深色模式
  // appearance:'dark',

  //多语言
  locales: {
    root: {
      label: '简体中文',
      lang: 'Zh_CN',
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
    },
  },

  //markdown配置
  markdown: {
    //行号显示
    lineNumbers: true,

    //时间线
    config: (md) => {
      md.use(timeline);
    },

  },


  //主题配置
  themeConfig: {
    //左上角logo
    // logo: '/logo.png',
    // siteTitle: false, //标题隐藏

    //设置站点标题 会覆盖title
    //siteTitle: 'Hello World',

    //导航栏
    nav: [
      { text: '首页', link: '/' },
      // {
      //   text: '🍉指南',
      //   items: [
      //     {
      //       // 分组标题1
      //       text: '介绍',
      //       items: [
      //         { text: '前言', link: '/preface' },
      //       ],
      //     },
      //     {
      //       // 分组标题2
      //       text: '基础设置',
      //       items: [
      //         { text: '快速上手', link: '/getting-started' },
      //         { text: '配置', link: '/configuration' },
      //         { text: '页面', link: '/page' },
      //         { text: 'Frontmatter', link: '/frontmatter' },
      //       ],
      //     },
      //     {
      //       // 分组标题3
      //       text: '进阶玩法',
      //       items: [
      //         { text: 'Markdown', link: '/markdown' },
      //         { text: '团队', link: '/team' },
      //         { text: '静态部署', link: '/assets' },
      //         { text: '样式美化', link: '/style' },
      //         { text: '组件', link: '/components' },
      //         { text: '插件', link: '/plugin' },
      //         { text: '更新及卸载', link: '/update' },
      //         { text: '搭建导航', link: '/nav/step' },
      //       ],
      //     },
      //   ],
      // },
      // { text: 'VitePress', link: 'https://vitepress.dev/' },
      //
      // {
      //   text: '1.0.0-rc.31',
      //   items: [
      //     { text: '更新日志', link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md' },
      //     { text: '贡献', link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md' },
      //   ],
      // },
    ],


    //侧边栏
    sidebar: [
      {
        //分组标题1
        text: '介绍',
        collapsed: false,
        items: [
          { text: '前言', link: '/preface' },
          { text: '简介', link: '/intro' },
          { text: '特点', link: '/feature' },
          { text: '架构', link: '/architecture' },
          { text: '快速上手', link: '/getting-started' },
        ],
      },
      {
        //分组标题2
        text: '功能模块',
        collapsed: false,
        items: [
          { text: '用例设计', link: '/design' },
          { text: '执行计划', link: '/execution' },
          { text: '配置管理', link: '/configuration' },
          { text: '数据统计', link: '/statistics' },
        ],
      },
      {
        //分组标题3
        text: '配置部署',
        collapsed: false,
        items: [
          { text: '配置说明', link: '/setting' },
          { text: '项目部署', link: '/deploy' },
          { text: '平台管理', link: '/manager' },
        ],
      },
      // {
      //   //分组标题3
      //   text: '其他站点',
      //   collapsed: false,
      //   items: [
      //     { text: 'VuePress', link: 'https://vuepress.yiov.top/' },
      //     { text: '劝学录教程', link: 'https://yiov.top/' },
      //     { text: '个人主页', link: 'https://yingyayi.com/' },
      //   ],
      // },
    ],



    // 本地搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                },
              },
            },
          },
        },
      },
    },



    //社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/delav/skylark' },
    ],

    //手机端深浅模式文字修改
    darkModeSwitchLabel: '深浅模式',



    //页脚
    footer: {
      message: 'MIT License | Copyright © 2023-present',
    },


    //侧边栏文字更改(移动端)
    sidebarMenuLabel:'目录',

    //返回顶部文字修改(移动端)
    returnToTopLabel:'返回顶部',


    //大纲显示2-3级标题
    outline:[2,3],
    //大纲顶部标题
    outlineTitle:'当前页大纲',


    //编辑本页
    //editLink: {
    //  pattern: 'https://github.com/账户名/仓库名/edit/main/docs/:path',
    //  text: '在GitHub编辑本页'
    //},



    //上次更新时间
    lastUpdatedText:'Last updated',


    //自定义上下页名
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

  },

})
