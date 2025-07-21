import rl from "readline-sync";
import timer from "./timer.js";
import menu from "./menu.js";
import { AllRiddles } from "../api/riddelService.js";
import { changeUser } from "./user/usercheck.js";

export async function startManu(player) {
    while (true) {
        console.log("=== Beginning of the game click 1.\n=== Changing the riddels click 2. \n=== exit click 3. ");
        const click = rl.question("Enter your choice");
        switch (click) {
            case "1":
                await timer(AllRiddles, player);
                console.log('fd vfvfds');
                await changeUser(player);
                console.log('player time:', player.time);
                break;
            case "2":
                menu(player)
                break
            case "3":
                process.exit(0);



        }
    }
}