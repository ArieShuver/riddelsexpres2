import { nameUsers } from "./utils/user/userName.js";
import { userCheck } from "./utils/user/usercheck.js";
import { startMenu } from "./utils/startMenu.js";



console.log('\n===== Welcome to the Riddle Game! =====');
const userName = nameUsers();
const player = await userCheck(userName);
await startMenu(player);



