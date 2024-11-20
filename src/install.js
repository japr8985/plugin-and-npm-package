import TextViewer from './components/TextViewer.vue'

const install = {
  install(app, options) {
    app.component(TextViewer.name, TextViewer)

    // app.config.globalProperties.$customFunction = () => {
    //     // code
    // }
  },
}

export default install
