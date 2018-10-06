const vm = new Vue({
    el: "#intro",
    data: {
        firstName: "Eduardo",
        lastName: "Silva",
        age: 21,
    },
        methods: {
            fullName: function () {
                return ` ${this.firstName} ${this.lastName}`
            }
        }
})