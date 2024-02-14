const app = Vue.createApp({
    data() {
        return {
            name: 'nibiiro yurushi',
            html: `<div style='color:red'>yurushi</div>`
        }
    },
    template: ``
})

const vm = app.mount('#app')

setTimeout(() => {
    vm.$data.name = 'mina'
}, 2000);
