import Player from "../classes/Player.js";
import Riddle from "../classes/Riddle.js";
import rl from "readline-sync";

export async function allPlayer() {
    const response = await fetch("http://localhost:3000/users/getAllUsers");
    const data = await response.json();
    return data;
}

export async function addPlayer(player) {
    const response = await fetch("http://localhost:3000/users/addUsers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: player.name,
            time: player.time
        })
    });
    console.log("player added:");
    return response;
}

export async function updatePlayer(player) {
    const response = await fetch("http://localhost:3000/users/updateUsers", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(player)
    });
}

export async function deletePlayer() {
    const id = parseInt(rl.question("Enter ID of player to delete: "));
    const response = await fetch("http://localhost:3000/users/deleteUsers", {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({ "id": id }),
    });
    const result = await response.json();
    console.log("riddle deleted:", result);
}
