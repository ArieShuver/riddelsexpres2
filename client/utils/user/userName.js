import rl from "readline-sync";
import Player from "../../classes/Player.js";

export function userName() {
    const name = rl.question("Enter your name: ");
    const password = rl.question("Enter your password:  ")
    if (name.trim() === "" || password.trim() === "") {
        console.log("Name or password cannot be empty. Please try again.");
        return nameUsers();
    }
    const player = new Player(name, password)
    return player;
}