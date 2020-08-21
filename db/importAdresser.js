const fs = require('fs')
const { pool } = require('../libs/database.js')

const text = fs.readFileSync('/home/hatland/projects/boligrating/db/matrikkelenVegadresseTestdata.csv').toString().split('\n')

for(const i in text) {
    const line = text[i].split(';')
    if(line[3] == 'vegadresse') {
        const sql = 
        `INSERT INTO adresser(
            id, 
            veinavn,
            nummer,
            bokstav,
            nummer_bokstav, 
            postnummer, 
            poststed, 
            kommunenavn) 
        VALUES(?, ?, ?, ?, ?, ?, ?, ?)`

        const values = [
            line[0],
            line[7],
            line[8],
            line[9],
            line[8] + line[9],
            line[19],
            line[20],
            line[2],
        ]

        pool.query(sql, values, (err, rows, fields) => {
            if (err) {
                console.error(err)
            } else {
                console.log(rows)
            }
        })
    }
}