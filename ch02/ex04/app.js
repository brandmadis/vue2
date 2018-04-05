new Vue({
  el: '#exercise',
  data: {
    effectClasses:{
      highlight: false,
      shrink: true
    }

  },
  methods: {
    startEffect: function() {
      console.log(this.highlight)
    },
    startProgress: function(){
      console.log("start progress")
    }
  }
});
