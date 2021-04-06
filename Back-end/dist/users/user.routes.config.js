"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const SqlConnect_service_1 = require("./services/SqlConnect.service");
class UsersRoutes /*extends CommonRoutesConfig*/ {
    constructor(app) {
        // super(app, 'UsersRoutes');
        this.sqlConnect = new SqlConnect_service_1.SqlConnect();
        this.app = app;
        this.configureRoutes();
    }
    configureRoutes() {
        this.app.route(`/veto`)
            .get((req, res) => {
            console.log('test');
            this.sqlConnect.getAllanimals().then(animals => {
                res.status(200).json(animals);
            }).catch(err => {
                res.status(404).send('Error');
            });
        })
            .post((req, res) => {
            this.sqlConnect.addAnimal(req.body).then((message) => {
                res.status(200).send(message);
            }).catch((err) => {
            });
        });
        this.app.route('/veto/:info')
            .get((req, res) => {
            //do a string split to split the values of animal name and number of clinique
            req.params.info;
        });
        return this.app;
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdXNlcnMvdXNlci5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHNFQUF3RDtBQUd4RCxNQUFhLFdBQVcsQ0FBQyw4QkFBOEI7SUFJbkQsWUFBWSxHQUF3QjtRQUNqQyw2QkFBNkI7UUFFN0IsSUFBSSxDQUFDLFVBQVUsR0FBRSxJQUFJLCtCQUFVLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQztRQUNiLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUcxQixDQUFDO0lBRUQsZUFBZTtRQUVYLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzthQUNsQixHQUFHLENBQUMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUNwQyxPQUFPLENBQUEsRUFBRTtnQkFDTCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVsQyxDQUFDLENBRUosQ0FBQyxLQUFLLENBQ0gsR0FBRyxDQUFBLEVBQUU7Z0JBQ0wsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFHSCxDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUVwRCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFDLEVBQUU7Z0JBQ2xELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBQyxFQUFFO1lBRWhCLENBQUMsQ0FBQyxDQUFDO1FBRUwsQ0FBQyxDQUFDLENBQUM7UUFFUCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7YUFDeEIsR0FBRyxDQUFDLENBQUMsR0FBb0IsRUFBQyxHQUFvQixFQUFDLEVBQUU7WUFFOUMsNkVBQTZFO1lBQzdFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBR3BCLENBQUMsQ0FBQyxDQUFDO1FBS1AsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7Q0FFSjtBQXpERCxrQ0F5REMifQ==