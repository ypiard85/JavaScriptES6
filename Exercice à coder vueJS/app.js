var app = new Vue ({
    el: '#app',
    data: {
     texte1: '',
     drapeau: '',
     count: 0,
     tableau: ["Bonjour", "Hello", "Hallo", "Hola"],
     tableauImages: ["france.png", "united-kingdom.png", "germany.png", "spain.png"],
     choix: 0,     
    },
    methods: {
       transform: function () {
            this.texte1 = this.tableau[this.choix];
            this.drapeau = this.tableauImages[this.choix]
       },
       increaseCount: function () {
              if (this.count < 5)
              {
                  this.count++;
              }
              else
              {
                  this.count = 0
              }
        },
       decreaseCount: function () {
              if (this.count > 0)
              {
                  this.count--;
             }
        },
      },
     mounted() {
           this.transform();
      },
      computed: {
         texte2: function() {
            let texte2 = '';
            for (let i = 0; i < this.texte1.length; i++) {
              texte2 += String.fromCharCode(this.texte1[i].charCodeAt() + this.count)
            }
            return texte2
           }
      }

})