export const getDbInstance = (dbType) => {
    if (dbType === "mysql") {
        return new MySqlHandler(dbType);
    } else if (dbType === "redshift") {
        return new RedShiftHandler(dbType);
    } else {
        return null;
    }
}

class MySqlHandler {
    name = ""
    constructor(name) {
        this.name = name;
    }
    async executeQuery(query) {
        try{
            const response = await fetch('https://polar-forest-84901.herokuapp.com/mysql', {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                headers: {
                  'Content-Type': 'application/json'
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    "query": query
                }),
            });
            return await response.json();
        }catch(err) {
            console.log(err);
        }
    }
    getName() {
        return this.name;
    }
}

class Redshift {
    name = ""
    constructor(name) {
        this.name = name;
    }
    async executeQuery(query) {
        try{
            const response = await fetch('https://polar-forest-84901.herokuapp.com/redshift', {
                            method: 'POST',
                            body: JSON.stringify({
                                query: query
                            })
                        });
            return await response.json();
        }catch(err) {
            console.log(err);
        }
    }
    getName() {
        return this.name;
    }
}