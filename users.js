

module.exports = {

    removePass(arr) {
        const updatedArr = arr.map(userObj => {
            return delete userObj.password;
        })
        return updatedArr
    }

}