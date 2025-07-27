
class Player {
    constructor(name, password) {
        this.name = name;
        this.time = 0;
        this.password = password;
    }

    timeEnded(start, end) {
        this.time = (end - start);
    }

    showStats() {
        const timeSuccess = (`${this.name} time:  ${this.time}`)
        return timeSuccess;
    }
}

export default Player;