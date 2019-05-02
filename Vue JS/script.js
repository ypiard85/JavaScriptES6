var app = new Vue ({
    el: '#app',
    data: {
        product: 'Shoes',
        saisie: '',
        saisie2: '',
        active: false,
        show: false,
        texteH2: '',
        checked: false
    },
    methods: {
        updateContent: function () 
          {
            this.texteH2 = this.saisie2
          }
      }
})
