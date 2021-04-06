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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlConnect = void 0;
const pg = __importStar(require("pg"));
const readline = __importStar(require("readline"));
const { Client } = pg;
let client;
const getQuery = `
SELECT * FROM VetoDB.Animal `;
class SqlConnect {
    constructor() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question("What is the name of your database ? ", function (name) {
            rl.question("What is the password for the database ? ", function (password) {
                client = new Client({
                    user: 'postgres',
                    host: 'localhost',
                    database: name,
                    password: password,
                    port: 5432,
                });
                client.connect().then(r => { console.log('sucess'); });
                rl.close();
            });
        });
    }
    getAllanimals() {
        return __awaiter(this, void 0, void 0, function* () {
            let animals = new Array();
            console.log('here');
            return client.query(getQuery).then(res => {
                for (let row of res.rows) {
                    animals.push(row);
                }
                console.log(animals);
                return animals;
            }).catch(err => {
                console.error(err);
                throw new Error();
            });
        });
    }
    addAnimal(animal) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `Insert Into VetoDb.animal VALUES (` + animal.nom + ',' + animal.noClinique + ',' + animal.noProprietaire
                + ',' + animal.type + ',' + animal.espece + ',' + animal.description
                + ',' + animal.poids + ',' + animal.taille + ',' + animal.dateNaissance + ',' + animal.dateNaissance + ',' + animal.etatActuel + ')';
            return client.query(query).then(res => {
                return 'success';
            }).catch(err => {
                console.error(err);
                throw new Error();
            });
        });
    }
}
exports.SqlConnect = SqlConnect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3FsQ29ubmVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdXNlcnMvc2VydmljZXMvU3FsQ29ubmVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBeUI7QUFDekIsbURBQXFDO0FBSXJDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRSxFQUFFLENBQUM7QUFFckIsSUFBSSxNQUFpQixDQUFDO0FBRXRCLE1BQU0sUUFBUSxHQUFHOzZCQUNZLENBQUM7QUFHOUIsTUFBYSxVQUFVO0lBRXZCO1FBQ0ksTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQztZQUNoQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1NBQ3pCLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxRQUFRLENBQUMsc0NBQXNDLEVBQUUsVUFBUyxJQUFJO1lBR3pELEVBQUUsQ0FBQyxRQUFRLENBQUMsMENBQTBDLEVBQUUsVUFBUyxRQUFRO2dCQUNwRSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUM7b0JBQ2pCLElBQUksRUFBRSxVQUFVO29CQUNoQixJQUFJLEVBQUUsV0FBVztvQkFDakIsUUFBUSxFQUFFLElBQUk7b0JBQ2QsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLElBQUksRUFBRSxJQUFJO2lCQUNiLENBQUMsQ0FBQztnQkFFSCxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFDO2dCQUNwRCxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDYixDQUFDLENBQUMsQ0FBQztRQUlYLENBQUMsQ0FBQyxDQUFDO0lBS1AsQ0FBQztJQUtPLGFBQWE7O1lBQ2pCLElBQUksT0FBTyxHQUFVLElBQUksS0FBSyxFQUFFLENBQUM7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBRSxFQUFFO2dCQUV0QyxLQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUU7b0JBRXRCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBRXJCO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3JCLE9BQU8sT0FBTyxDQUFDO1lBRW5CLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUEsRUFBRTtnQkFFTixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUVuQixNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7WUFHMUIsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDO0tBQUE7SUFHSyxTQUFTLENBQUMsTUFBYTs7WUFFN0IsTUFBTSxLQUFLLEdBQUMsb0NBQW9DLEdBQUMsTUFBTSxDQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUMsTUFBTSxDQUFDLFVBQVUsR0FBQyxHQUFHLEdBQUMsTUFBTSxDQUFDLGNBQWM7a0JBQzFHLEdBQUcsR0FBQyxNQUFNLENBQUMsSUFBSSxHQUFDLEdBQUcsR0FBQyxNQUFNLENBQUMsTUFBTSxHQUFDLEdBQUcsR0FBQyxNQUFNLENBQUMsV0FBVztrQkFDeEQsR0FBRyxHQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUMsR0FBRyxHQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUMsR0FBRyxHQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUMsR0FBRyxHQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUMsR0FBRyxHQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUMsR0FBRyxDQUFDO1lBRWhILE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFFLEVBQUU7Z0JBRW5DLE9BQU8sU0FBUyxDQUFDO1lBRXJCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUEsRUFBRTtnQkFFTixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUVuQixNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7WUFHMUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxDQUFDO0tBQUE7Q0FJQTtBQXBGRCxnQ0FvRkMifQ==