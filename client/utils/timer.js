import { getTime } from "./time.js";

async function timer(Function, player) {
    const start = getTime()
    await Function();
    const end = getTime();
    player.timeEnded(start, end);
    console.log('Time taken:', player.showStats());
    
}

export default timer;