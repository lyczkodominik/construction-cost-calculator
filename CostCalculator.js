class CostCalculator {
    constructor(object) {
        this.object = object;

        this.sand = {
            amount: null,
            weight: null,
            capacity: null,
            cost: null,
            type: null
        };

        this.formworkBlocks = {
            amount: null,
            height: null,
            width: null,
            length: null,
            weight: null,
            capacity: null,
            cost: null,
            type: null
        };

        this.concrete = {
            amount: null,
            weight: null,
            capacity: null,
            cost: null,
            type: null
        };

        this.excavator = {
            cost: null,
            time: null
        };

        this.foundationReinforcement = {
            elements: null,
            cost: null,
            length: null,
            type: null
        };

        this.styrodur = {
            cost: null,
            capacity: null,
            type: null
        }

        this.dimpledFoil = {
            area: null,
            cost: null,
            type: null
        }
    }
}

export default CostCalculator;