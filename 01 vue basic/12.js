const app = Vue.createApp({
    data() {
        return {
            name: 'YouTube',
            num: 1,
            error: ''
        }
    },
    methods: {
        sub() {
            if (this.num > 0) {
                this.num--;
            } else {
                this.error = '不能小于0'
            }
        },
        add() {
            if (this.num < 10) {
                this.num++;
            } else {
                this.error = '不能大于10'
            }
        },
        go(event, title) {
            alert('title: ' + title)
            // event.preventDefault()
        }
    }
})

const vm = app.mount('#app')