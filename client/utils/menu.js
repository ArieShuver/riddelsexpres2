import rl from "readline-sync";
import readlineSync from "readline-sync";
import Player from "../classes/Player.js";
import { AllRiddles, addRiddle, updateRiddle, deleteRiddle } from "../api/riddelService.js";
import timer from "./timer.js";

export async function menuUser(player) {
  while (true) {
    console.log("\n=== User Menu ===");
    console.log("1. Add a riddle");
    console.log("2. Gmae");
    console.log("3. Exit")

    const choice = rl.question("Choose an option (1-5): ");
    switch (choice) {
      case "1":
        await addRiddle();
        break;
      case "2":
        await timer(AllRiddles, player);
        break;
      case "3":
        console.log("Bye!");
        process.exit(0);
      default:
        console.log("Invalid choice. Please choose 1-5.");
    }
  }
}

export async function menuAdmin(player) {
  while (true) {
    console.log("\n=== Admin Menu ===");
    console.log("1. Add a riddle");
    console.log("2. Update a riddle");
    console.log("3. Delete a riddle");
    console.log("4. Game");
    console.log("5. Exit");

    const choice = rl.question("Choose an option (1-5): ");
    switch (choice) {
      case "1":
        addRiddle();
        break;
      case "2":
        updateRiddle();
        break;
      case "3":
        deleteRiddle();
        break;
      case "4":
        await timer(AllRiddles, player);
        await changeUser(player);
        break;
      case "5":
        console.log("Exiting admin menu.");
        process.exit(0);
      default:
        console.log("Invalid choice. Please choose 1-5.");
    }
  }
} 
