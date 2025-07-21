import  routerRiddle  from "./routersridells.js";
import  routerUser  from "./routerUsers.js";

function configRoutes(app) {
    app.use("/riddles", routerRiddle)
    app.use("/users", routerUser)
    

    app.use("/", (req, res) => {
        res.status(404).send("Not Found");
        console.log('not found ');
        
    });
}
export { configRoutes };
