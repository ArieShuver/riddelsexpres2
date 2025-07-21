import rl from "readline-sync";
import readlineSync from "readline-sync";
import Player from "../classes/Player.js";
import { AllRiddles, addRiddle, updateRiddle, deleteRiddle } from "../api/riddelService.js";
import timer from "./timer.js";

async function menu(player) {
  while (true) {
    console.log("\n=== Riddle Game Menu ===");
    console.log("1. Add a riddle");
    console.log("2. Update a riddle");
    console.log("3. Delete a riddle");
    console.log("4. Exit");

    const choice = rl.question("Choose an option (1-5): ");
    switch (choice) {        
      case "1":
        await addRiddle();
        break;
      case "2":
        await updateRiddle();
        break;
      case "3":
        await deleteRiddle();
        break;
      case "4":
        console.log("Bye!");
        process.exit(0);
      default:
        console.log("Invalid choice. Please choose 1-5.");
    }
  }
}
export default menu;