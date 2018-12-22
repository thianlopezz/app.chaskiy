export class ChartOptions {

    data: any = {
        labels: [],
        datasets: []
    };

    type: string;

    options: any = {};

    constructor(data: any, type?) {

        if (type) {
            this.type = type;
        }

        this.data = data;
    }
}

