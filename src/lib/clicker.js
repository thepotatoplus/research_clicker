class Currency {
    constructor(name, causeUpdate) {
        this.name = name;
        this.amount = 0;
        this.perClick = 0;
        this.delay = 1000;
        this.perDelay = 0;

        this.ticks = 0;

        this.causeUpdate = causeUpdate;

        this.interval = setInterval(this.tick, 50);
    }

    upgrade({ perClick, delay, rate }) {
        this.perClick += perClick;
        this.delay -= delay;
        this.rate /= rate;

        clearInterval(this.interval);
        this.interval = setInterval(this.tick, 50);
    }

    click() {
        this.amount += this.perClick;
        this.causeUpdate();
    }

    tick() {
        this.ticks += 50;
        this.amount += Math.floor(this.ticks / this.delay) * this.perDelay;
        this.ticks = this.ticks % this.delay;
        if (!this.causeUpdate) return;
        this.causeUpdate();
    }
}

class Factory {
    constructor(name, costs, upgrades, costInc) {
        this.name = name;
        this.costs = costs;
        this.upgrades = upgrades;
        this.costInc = costInc;
    }

    buy(currencies) {
        for (let currency in this.costs) {
            if (this.costs[currency] > currencies[currency].amount) return;
        }
        for (let currency in this.costs) {
            let curr = currencies[currency];
            curr.amount -= this.costs[currency];
            this.costs[currency] *= this.costInc;
        }
        for (let upgrade in this.upgrades) {
            currencies[upgrade].upgrade(this.upgrades[upgrade]);
        }
    }
}

export {
    Currency,
    Factory
};