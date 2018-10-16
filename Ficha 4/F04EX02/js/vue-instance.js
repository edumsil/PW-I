const vm = new Vue({
    el: "#intro",
    data: {
        schools: ["ESMAD", "ISEP", "ESE", "ISCAP", "ESTG", "ESS", "ESHT"]
    },
    methods: {
        addSchool(school){
            this.schools.push(school)
        }
    }
})