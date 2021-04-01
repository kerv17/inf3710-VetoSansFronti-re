import * as pg from "pg";

const { Client } =pg;

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Veto',
    password: 'Willywhale1',
    port: 5432,
});

const query = `
SELECT *
FROM VetoDb.Animal
`;


export class SqlConnect{

constructor(){
    console.log('test');
    client.connect().then(()=>{
        this.baseQuery();
    });
    console.log('test2');
}


baseQuery(){
    client.query(query, (err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        for (let row of res.rows) {
            console.log(row);
        }
        client.end();
    });
}

}