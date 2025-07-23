import { allPlayer, addPlayer, updatePlayer, getPlayerById } from "../../api/playerService.js";
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
        const newUser = await addPlayer(name);
        const player = new Player(newUser[0].name, newUser[0].id);
        return player;
    }
}

async function changeUser(player) {
    const user = await getPlayerById(player.id);
    try {
        if (!user) {
            console.log("User not found");
            return;
        }
        console.log('user before change:', user);
        user.listTime.push(player.time);
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