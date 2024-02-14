Vue.createApp({
    data() {
        return {
            channel: 'YouTube'
        }
    },
    template: `<div>nibiiro yurushi - {{ channel }}</div>`
}).mount('#app')