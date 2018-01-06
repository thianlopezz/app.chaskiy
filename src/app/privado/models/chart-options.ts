export class ChartOptions {

    data: any = {
        labels: [],
        datasets: []
    };

    type: string;

    options: any = {};

    constructor(data: any) {

        this.data = data;
    }
}

