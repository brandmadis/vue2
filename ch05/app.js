new Vue({
  el: '#app',
  data: {
    title: 'The VueJS Instance'
  },
  beforeCreate: function() {
    console.log('beforeCreate()')
  },
  created: function() {
    console.log('Create()')
  },
    beforeMount: function() {
    console.log('beforeMounted()')
  },
    mounted: function() {
    console.log('Mounted()')
  },
    beforeUpdate: function() {
    console.log('beforeUpdate()')
  },
  updated: function() {
    console.log('Updated()')
  },
    beforeDestroy: function() {
    console.log('beforeDestroy()')
  },
    destroyed: function() {
    console.log('Destroyed()')
  },
  methods:{
    destroy: function() {
      this.$destroy();
    }
  }






})