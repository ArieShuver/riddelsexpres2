import rl from "readline-sync";

export function nameUsers() {
    const name = rl.question("Enter your name: ");
    if (name.trim() === "") {
        console.log("Name cannot be empty. Please try again.");
        return nameUsers(); 
    }
    console.log(`Welcome, ${name}!`);
    return name;
}