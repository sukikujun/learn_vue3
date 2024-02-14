const app = Vue.createApp({
    data() {
        return {
            name: 'root component'
        }
    },
    template: `<div>{{ name }} - <yrs /></div>`
})

app.component('yrs', {
    data() {
        return {
            name: 'nibiiro yurushi'
        }
    },
    template: `<h2 style='background-color:red;color:white;'>{{ name}}</h2>`
})

const vm = app.mount('#app')
