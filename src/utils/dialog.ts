import { createApp, h } from "vue";
import { Modal } from 'ant-design-vue'

export function dialog(component:any, props={},modalProps={}) {
  const _modal={
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
