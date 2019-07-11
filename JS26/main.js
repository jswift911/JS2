const app = new Vue({
    el: '#app',
    data: {
      text: 'Hello',
      num: 0,
        currentTab: 'two',
        tabs: ['one', 'two', 'three']
    },
    computed:{
        createComp(){
          return `comp-${this.currentTab}`
        }
    },
    methods: {
        some(){
            console.log('global vue');
        }
    }
});