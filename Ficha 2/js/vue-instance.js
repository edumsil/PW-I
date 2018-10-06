const vm = new Vue({
    el: "#intro",
    data: {
        numero: 0,
        negativo: false,
        desabilitar: false,
        numeroGuardar: this.numero
    },
    created: function () {
        console.log("A instância Vue foi criada !")
    },
    mounted: function () {
        console.log("A instância Vue foi montada na DOM !")
    },
    updated: function () {
        console.log("Número alterado !")
    },
    methods: {
        aumenta: function () {
            this.numero = (this.numero + 1)
                this.negativo = false
                this.desabilitar = false
        },
        diminui: function () {
            this.numero = (this.numero - 1)
            if (this.numero < 0) {
                this.numero = 0
                this.negativo = true
                this.desabilitar = true
            }
        }
    }
})
