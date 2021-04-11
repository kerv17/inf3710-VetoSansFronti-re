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
                return animals;
            }).catch(err => {
                console.error(err);
                throw new Error();
            });
        });
    }
    addAnimal(animal) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `Insert Into VetoDb.animal VALUES (` + '`' + animal.noAnimal + '`' + ',' + '`' + animal.noClinique + '`' + ',' + '`' + animal.noProprietaire
                + ',' + animal.nom + ',' + animal.type + ',' + animal.espece + ',' + animal.taille
                + '`' + ',' + '`' + animal.poids + '`' + ',' + '`' + animal.description + '`' + ',' + '`' + animal.dateNaissance + '`' + ',' + '`' + animal.dateNaissance + '`' + ',' + '`' + animal.etatActuel + '`' + ')';
            return client.query(query).then(res => {
                return 'success';
            }).catch(err => {
                console.error(err);
                throw new Error();
            });
        });
    }
    getOneAnimal(info) {
        return __awaiter(this, void 0, void 0, function* () {
            //do a string split to split the values of animal name and number of clinique and owner no hopefully
            //lets say that the order is nom noProprietaire noClinique 
            const information = info.split(',');
            console.log(information[0]);
            const query = `Select * from VetoDb.Animal WHERE noanimal='` + information[0].toString() + `' and noclinique='` + information[1] + `';`;
            console.log(query);
            return client.query(query).then((res) => {
                console.log(res);
                const animal = res.rows[0];
                return animal;
            }).catch(err => {
                console.error(err);
                throw new Error();
            });
        });
    }
    deleteAnimal(info) {
        return __awaiter(this, void 0, void 0, function* () {
            const information = info.split(',');
            const query = `DELETE from VetoDb.Animal WHERE noanimal='` + information[0].toString() + `' and noclinique='` + information[1] + `';`;
            return client.query(query).then((res) => {
                return 'succes';
            }).catch(err => {
                console.error(err);
                throw new Error();
            });
        });
    }
    modifyAnimalInfo(animal) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `UPDATE VetoDb.Animal SET noProprietaire= ` + '`' + animal.noProprietaire + '`'
                + ',nom=' + '`' + animal.nom + '`' + ',taille' + '`' + animal.taille
                + '`' + ',poids=' + '`' + animal.poids + '`' + ',description=' + '`' + animal.description + '`' + ',etatActuel'
                + '`' + animal.etatActuel + '`' + 'Where noAnimal='
                + '`' + animal.noAnimal + '`' + 'and noClinique=' + '`' + animal.noClinique + '`;';
            return client.query(query).then((res) => {
                return 'succes';
            }).catch(err => {
                console.error(err);
                throw new Error();
            });
        });
    }
}
exports.SqlConnect = SqlConnect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3FsQ29ubmVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdXNlcnMvc2VydmljZXMvU3FsQ29ubmVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBeUI7QUFDekIsbURBQXFDO0FBS3JDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRSxFQUFFLENBQUM7QUFFckIsSUFBSSxNQUFpQixDQUFDO0FBRXRCLE1BQU0sUUFBUSxHQUFHOzZCQUNZLENBQUM7QUFHOUIsTUFBYSxVQUFVO0lBRXZCO1FBQ0ksTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQztZQUNoQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1NBQ3pCLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxRQUFRLENBQUMsc0NBQXNDLEVBQUUsVUFBUyxJQUFJO1lBR3pELEVBQUUsQ0FBQyxRQUFRLENBQUMsMENBQTBDLEVBQUUsVUFBUyxRQUFRO2dCQUNwRSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUM7b0JBQ2pCLElBQUksRUFBRSxVQUFVO29CQUNoQixJQUFJLEVBQUUsV0FBVztvQkFDakIsUUFBUSxFQUFFLElBQUk7b0JBQ2QsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLElBQUksRUFBRSxJQUFJO2lCQUNiLENBQUMsQ0FBQztnQkFFSCxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFDO2dCQUNwRCxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDYixDQUFDLENBQUMsQ0FBQztRQUlYLENBQUMsQ0FBQyxDQUFDO0lBS1AsQ0FBQztJQUtPLGFBQWE7O1lBQ2pC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