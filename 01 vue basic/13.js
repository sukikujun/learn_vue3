const app = Vue.createApp({
    data() {
        return {
            name: 'YouTube',
            num: 1,
        }
    },
    computed: {
        error() {
            return this.num == 0 ? '不能小于0' : this.num == 10 ? '不能超过10' : ''
        }
    },
    methods: {
        sub() {
            if (this.num > 0) {
                this.num--;
            }
        },
        add() {
            if (this.num < 10) {
                this.num++;
            }
        },
    }
})

const vm = app.mount('#app')