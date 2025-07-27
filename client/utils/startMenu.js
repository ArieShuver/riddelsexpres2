import rl from "readline-sync";
import timer from "./timer.js";
import { menuAdmin, menuUser } from "./menu.js";
import { userName } from "./user/userName.js"
import { AllRiddles } from "../api/riddelService.js";
import { changeUser } from "./user/usercheck.js";
import { chakUser } from "../api/playerService.js";
import { addPlayer } from "../api/playerService.js";
import jwt from "jsonwebtoken";


export async function start() {
    console.log("\n===menu game riddel")
    console.log(`===select an option====
1. for guest 
2. for registered user 
3. for new user `);

    const select = rl.question("----enter your choice.---- ")
    let user;
    let player;
    switch (select) {
        case "1":
            await AllRiddles();
            break;
        case "2":
            player = userName()
            const response = await chakUser(player);
            console.log(response);
            const { role } = jwt.decode(response.token);
            console.log('rol in menu', role);
            if (role === "user") {
                menuUser(player);
            }
            else if (role === "admin")
                menuAdmin(player);
            else{
                console.log('you are not registered user');            
            }
            break;
        case "3":
            player = userName()
            await addPlayer(player)
            start();
            break;
    }
}




export async function startMenu(player) {
    while (true) {
        console.log("=== Beginning of the game, click 1.\n=== Changing the riddles, click 2. \n=== exit, click 3. ");
        const click = rl.question("Enter your choice");
        switch (click) {
            case "1":
                await timer(AllRiddles, player);
                await changeUser(player);
                break;
            case "2":
                menu(player)
                break
            case "3":
                process.exit(0);
        }
    }
}