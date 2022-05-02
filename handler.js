export const getDbInstance = (dbType,dbName) => {
    if (dbType === "mysql") {
        return new MySqlHandler(dbType, dbName);
    } else if (dbType === "redshift") {
        return new RedShiftHandler(dbType, dbName);
    } else {
        return null;
    }
}

class MySqlHandler {
    name = ""
    databaseName = "";
    constructor(name, databaseName) {
        this.name = name;
        this.databaseName = databaseName;
    }
    async executeQuery(query, databaseName) {
        if (databaseName === undefined) { 
            alert("Database name is not defined");
        }
        if (databaseName !== this.databaseName) {
            this.databaseName = databaseName;
        }
        try{
            console.log("err")
            const response = await fetch('http://localhost:3000/mysql', {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                headers: {
                  'Content-Type': 'application/json'
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    "query": query,
                    "database": this.databaseName,
                }),
            });
            return await response.json();
        }catch(err) {
            alert("connetion error "+err)
            console.log("err2");
            console.log(err);
            throw error;
        }
    }
    getName() {
        return this.name;
    }
}

class RedShiftHandler {
    name = ""
    databaseName = "";
    constructor(name, databaseName) {
        this.name = name;
        this.databaseName = databaseName == 'Instacart' ? 'dev' : 'abc_retail';
    }
    async executeQuery(query, databaseName) {
        if (databaseName === undefined) { 
            alert("Database name is not defined");
        }
        if (databaseName != 'Instacart') {
            this.databaseName = 'abc_retail';
        }
        
        try{
            const response = await fetch('http://localhost:3000/redshift', {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                headers: {
                  'Content-Type': 'application/json'
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    "query": query,
                    "database": this.databaseName,
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