/**
 * @activeName Delog 
 * 功能:弹出弹窗
 * 
 * @callback active  显示提示消息,共有三个参数
 *      @param head string 主标题内容可传空
 *      @param tit  string 副标题
 *      @param name string 跳转路由的name名
 * 
 * @instance $delogBus delog组件专用的全局bus
 * 
 *  @event toast 显示提示信息可以是templace
 * 
 */

import './delog.css'
//import DelogItem from './delog.vue'

let delog = {
  install(Vue, options) {
    const delogBus = new Vue({});
    Object.defineProperty(Vue.prototype, "$delogBus", {
      value: delogBus
    })
    //全局组件
    Vue.component('Delog', {
      template: `
                 <div class="Delog" v-if="isActive">
                    <transition name="Delog">
                            <div class='tips'>
                            <div class="top">
                                <h2>{{headers}}</h2>
                            </div>
                                <span class="del" @click="delClick">X</span>
                                <h2>{{title}}</h2>
                                <div class="btn">
                                    <button class="correct" @click="sureClick">是</button>
                                    <button class="negate" @click="remClick">否</button>
                                </div>
                            </div>
                    </transition>                
                </div>
            `,
      data() {
        return {
          isActive: false,
          headers: `付款详情`,
          title: `是否却确认退货`,
          name:''
        }
      },
      components: {
       // DelogItem
      },
      methods: {
        active(head,tit,name) {
          this.isActive = true;
          if(head || head === ''){
            this.headers = head
          }else{
            this.headers = this.headers
          };
          if(tit){
            this.title = tit
          }else{
            this.title = this.title
          }
          this.name = name
        },
        delClick() {
          this.isActive = false;
        },
        remClick(){
          this.isActive = false;
        },
        sureClick(){
          this.$router.push(this.name)
        }
      },
      mounted() {
      }
    })
  }
}
export default delog;
