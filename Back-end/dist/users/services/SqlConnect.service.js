"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlConnect = void 0;
const pg = __importStar(require("pg"));
const readline = __importStar(require("readline"));
const { Client } = pg;
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: '',
    password: '',
    port: 5432,
});
const query = `
SELECT *
FROM VetoDb.Animal
`;
class SqlConnect {
    constructor() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question("What is the name of your database ? ", function (name) {
            client.database = name;
            console.log(client.database);
            rl.question("What is the password for the dabase ? ", function (password) {
                client.password = password;
                console.log(client.password);
                client.connect();
                rl.close();
            });
        });
    }
    getAllanimals() {
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
exports.SqlConnect = SqlConnect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3FsQ29ubmVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdXNlcnMvc2VydmljZXMvU3FsQ29ubmVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBeUI7QUFDekIsbURBQXFDO0FBSXJDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRSxFQUFFLENBQUM7QUFFckIsTUFBTSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUM7SUFDdEIsSUFBSSxFQUFFLFVBQVU7SUFDaEIsSUFBSSxFQUFFLFdBQVc7SUFDakIsUUFBUSxFQUFFLEVBQUU7SUFDWixRQUFRLEVBQUUsRUFBRTtJQUNaLElBQUksRUFBRSxJQUFJO0NBQ2IsQ0FBQyxDQUFDO0FBRUgsTUFBTSxLQUFLLEdBQUc7OztDQUdiLENBQUM7QUFHRixNQUFhLFVBQVU7SUFFdkI7UUFDSSxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDO1lBQ2hDLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztZQUNwQixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07U0FDekIsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLFFBQVEsQ0FBQyxzQ0FBc0MsRUFBRSxVQUFTLElBQUk7WUFDekQsTUFBTSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFN0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyx3Q0FBd0MsRUFBRSxVQUFTLFFBQVE7Z0JBQ25FLE1BQU0sQ0FBQyxRQUFRLEdBQUMsUUFBUSxDQUFDO2dCQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDN0IsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFBO2dCQUNqQixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDYixDQUFDLENBQUMsQ0FBQztRQUVYLENBQUMsQ0FBQyxDQUFDO0lBS1AsQ0FBQztJQUtELGFBQWE7UUFDVCxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUM3QixJQUFJLEdBQUcsRUFBRTtnQkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixPQUFPO2FBQ1Y7WUFDRCxLQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEI7WUFDRCxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBRUE7QUExQ0QsZ0NBMENDIn0=