const app = Vue.createApp({
    data() {
        return {
            // id: '0X 1001',
            id: null,
            name: 'nibiiro yurushi',
            n: 1,
            value: 'yahoo',
            arg: 'id'
        }
    }
})

const vm = app.mount('#app')

setTimeout(() => {
    vm.name = 'sahiro'
    vm.arg = 'href'
    vm.value = 'https://www.baidu.com'
}, 1500);

setInterval(() => {
    vm.n += 1
}, 2000);