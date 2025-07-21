import { allPlayer, addPlayer, updatePlayer } from "../../api/playerService.js";
import Player from "../../classes/Player.js";

async function userCheck(name) {
    const users = await allPlayer();
    const user = users.find(user => user.name === name);
    if (user) {
        console.log("User exists");
        const player = new Player(user.name, user.id);
        return player;
    } else {
        console.log("User not found");
        const player = new Player(name);
        const newUser = await addPlayer(player);
        console.log('player', player);
        return player;
    }
}

async function changeUser(player) {
    const players = await allPlayer()
    try {
        const user = players.find(user => user.id === player.id);
        if (!user) {
            console.log("User not found");
            return;
        }
        user.time.push(player.time);
        await updatePlayer(user);
        console.log("User updated successfully:", user);

    } catch (error) {
        console.log('error changeUser', error);
    }
    // console.log('user',user);

    // user.time.push(player.time)
    // await updatePlayer(user);
}

export {
    changeUser,
    userCheck
}