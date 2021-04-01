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
const { Client } = pg;
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
class SqlConnect {
    constructor() {
        console.log('test');
        client.connect().then(() => {
            this.baseQuery();
        });
        console.log('test2');
    }
    baseQuery() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3FsQ29ubmVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdXNlcnMvc2VydmljZXMvU3FsQ29ubmVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBeUI7QUFFekIsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFFLEVBQUUsQ0FBQztBQUVyQixNQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUN0QixJQUFJLEVBQUUsVUFBVTtJQUNoQixJQUFJLEVBQUUsV0FBVztJQUNqQixRQUFRLEVBQUUsTUFBTTtJQUNoQixRQUFRLEVBQUUsYUFBYTtJQUN2QixJQUFJLEVBQUUsSUFBSTtDQUNiLENBQUMsQ0FBQztBQUVILE1BQU0sS0FBSyxHQUFHOzs7Q0FHYixDQUFDO0FBR0YsTUFBYSxVQUFVO0lBRXZCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUUsRUFBRTtZQUN0QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFHRCxTQUFTO1FBQ0wsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDN0IsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkIsT0FBTzthQUNWO1lBQ0QsS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO2dCQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3BCO1lBQ0QsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUVBO0FBeEJELGdDQXdCQyJ9