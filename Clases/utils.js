module.exports = {
    age: function(timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)


        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if(month < 0 ||
            month == 0 &&
            today.getDate() <= birthDate.getDate) {
                age = age - 1
            }

        return age
    },

    graduation: function(graduation) {
        if(graduation == "medio") {
            return "Ensino Médio Completo"
        }
        else if(graduation == "superior") {
            return "Ensino Superior Completo"
        }
        else if(graduation == "mestrado") {
            return "Mestrado"
        }
        else
            return "Doutorado"
    },

    date: function (timestamp) {
        const data = new Date(timestamp)
        
        const year = data.getUTCFullYear()
        const month = `0${data.getUTCMonth() + 1}`.slice(-2)
        const day = `0${data.getUTCDate()}`.slice(-2)

        return `${year}-${month}-${day}`
    }
}