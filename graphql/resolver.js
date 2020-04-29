


const resolverFunctions = {
    Query: {
        getUserData: () => {
            console.log("Incoming")
            let user = {
                firstName: "Max",
                lastName: "Mustermann"
            }

            return user
        }
    }

};

module.exports = resolverFunctions;