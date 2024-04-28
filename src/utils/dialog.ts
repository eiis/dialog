import { createApp, h } from "vue";
import { Modal } from 'ant-design-vue'

export function dialog(component:any, props={},modalProps={}) {

  const _modal={
    //dev 第一次提交的代码
    //dev 第二次提交的代码
    //dev 第三次提交的代码
    //dev 第四次提交的代码
    //dev 第五次提交的代码
    //master 第一次提交的代码
    //dev 第六次提交的代码
    //dev 第七次提交的代码
    //dev 第八次提交的代码
    //dev 第九次提交的代码
    //dev 第十次提交的代码
    //master 第二次提交的代码
    //dev 第十一次提交的代码
    //dev 第十二次提交的代码
    render() {
      return h(Modal, {
        open: true,
        onCancel(){
          unmount()
        },
        ...modalProps
      }, {
        default: () => h(component, props)
      }) 
    }
  }
  const app = createApp(_modal)
  const div = document.createElement('div')
  document.body.appendChild(div)
  app.mount(div)

  const unmount=()=>{
    app.unmount()
    document.body.removeChild(div)
  }
  return unmount
}
