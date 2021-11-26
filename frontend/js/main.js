
let app;
let bind;
let forloop;
let ifcond;
let funccall;
let formModel;
let delimiter =  ['[[', ']]'];

$(function() {
    console.log( "ready!" );

  app = new Vue({
    el: '#app',
    data: {
      foo: 'Hello Vue!'
    }
  })
  bind = new Vue({
    el: '#bind',
    data: {
      title: "Hover to show some stuff!!!",
      hover_msg: 'You loaded this page on ' + new Date().toLocaleString()    }
  })
  ifcond = new Vue({
    el: '#ifcond',
    data: {
      foo: false,
      bar: false,
    }
  })


  forloop = new Vue({
    el: '#forloop',
    data: {
      arr: ["foo", "bar", "baz"]
    }
  })

  funccall = new Vue({
    el: '#funccall',
    data: {
      message: "This is reversible - click on me"
    },
    methods: {
    funccall: function () {
      this.message = this.message.split('').reverse().join('')
      }
    }
  })




  formModel = new Vue({
    el: '#formModel',
    data: {
      person: "you"
    }
  })





});

