
class Player {
    constructor(name,id) {
        this.name = name;
        this.time = 0;
        this.id = id;
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