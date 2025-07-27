import e, { json } from "express";
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
            player
        })
    });
    console.log("player added:", player);
    // const result = await response.json();
    // return result.user;
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

export async function getPlayerById(id) {
    try {
        const response = await fetch(`http://localhost:3000/users/getUserById`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id })
        });
        // console.log('response get user by id', response);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('error get player by id', error);
        return null;
    }
}

export async function chakUser(user) {
    try {
        const response = await fetch("http://localhost:3000/users/chacUser", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
        const data = await response.json();
        console.log('data chakuser', data);
        return data;
    } catch (error) {
        console.log('error chekuser', error);
    }
}
