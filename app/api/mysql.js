import mysql from 'mysql2/promise'

// const pool = mysql.createPool({

//     host: "191.101.230.154",
//     user: "u747016719_exam",
//     password: 'iDeG0=BZ|A0;',
//     database: 'u747016719_examhelp',
//     waitForConnections: true,
// })

const pool = mysql.createPool({

    host: "localhost",
    user: "root",
    password: 'ROOT',
    database: 'assign_help',
    waitForConnections: true,
})

export default pool