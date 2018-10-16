const vm = new Vue({
    el: "#intro",
    data: {
        msg: "A ESMAD é uma escola do IPP",
        textColor: "black",
        fontSize: '12pt',
        backColor: "white",
        show: 'visible'

    },
    methods: {
        formatTextColor(color) {
            this.textColor = color
        },
        formatTextSize(size) {
            this.fontSize = size
        },
        formatBackColor(color) {
            this.backColor = color
        },
        showHide() {
            if (this.show == 'visible')
                this.show = 'hidden'
            else
                this.show = 'visible'
        }
    }
})