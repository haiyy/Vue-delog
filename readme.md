# 说明

    这是一个基于VUE的极简plugin，做提示信息功能，版本0.0.3。
    开发基于移动端布局，如果要支持PC端布局，建议自行修改css样式。
    环境依赖：webpack,babel(ES6),vue(.vue)

    下载：npm install j-toast或者yarn add j-toast

## 使用

    import Vue from 'vue'
    import Delog from 'delog'
    Vue.use(Delog,head,tit,routerName)

    template:

        <Delog ref="deg"></Delog>

    javascript:
        2. this.$refs.deg.active('详情页信息','是否确认','跳转路由的name')

### options

    type:string

