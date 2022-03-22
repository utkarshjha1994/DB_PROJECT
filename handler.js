
export const getDbInstance = (radioButton) => {
    if (radioButton == "mySql") {
        return MySqlHandler;
    } else {
        return RedShiftHandler;
    }
}

class MySqlHandler {
    connection = null;

    constructor(database) {
        try {
            if (this.connection == null) {
                connection  = mysql.createPool({
                    host: 'aws-url',
                    user: 'admin',
                    password: 'dbproject123',
                    database: database
                });
            }
        } catch (err) {
            console.log(err);
        }
    }
    connect() {
       console.log("Already connected");
    }

    executeQuery(query) {
        this.connection.getConnection((err, conn) => {
            conn.query(query, (err, result, fields) => {
                if(err) {
                    console.log(err);
                    return null;
                }
                console.log(fields);
                console.log(results);
            });
        });
    }

    closeConnection() {
        this.connection.closeConnection();
    }
}

class RedShiftHandler {
 constructor() {
        // do something
    }
    
    connect() {
        //make connection
    }

    executeQuery(query) {
        
    }
}