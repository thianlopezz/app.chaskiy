import * as moment from 'moment';

export class CurrentMonth {
    noMonth: number;
    anio: number;
    finMes: number;
    days: Array<DayReserve> = [];
    mes: string;
    meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    dias = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];

    constructor() {
        const date = new Date();
        this.noMonth = date.getMonth();
        this.mes = this.meses[this.noMonth];
        this.anio = date.getFullYear();
        this.getFinMes();
        this.setDays();
    }

    private getFinMes() {

        const ultimoDia = moment({ y: this.anio, M: this.noMonth, d: 1 }).endOf('month');
        this.finMes = Number(ultimoDia.format('D'));
        return ;
    }

    private setDays() {
        this.days = [];
        for (let i = 0; i < this.finMes; i++) {
            this.days.push(new DayReserve(i));
        }
    }

    nextMonth() {
        const date = new Date(this.anio, this.noMonth, 1, 0, 0, 0, 0);
        date.setMonth(date.getMonth() + 1);
        this.noMonth = date.getMonth();
        this.mes = this.meses[this.noMonth];
        this.anio = date.getFullYear();
        this.getFinMes();
        this.setDays();
    }

    previousMonth() {
        const date = new Date(this.anio, this.noMonth, 1, 0, 0, 0, 0);
        date.setMonth(date.getMonth() - 1);
        this.noMonth = date.getMonth();
        this.mes = this.meses[this.noMonth];
        this.anio = date.getFullYear();
        this.getFinMes();
        this.setDays();
    }
}

export class DayReserve {
    day: number;
    isReserved: boolean;
    isSelected: boolean;

    constructor(day: number) {
        this.day = day;
        this.isReserved = false;
        this.isSelected = false;
    }

    select() {
        this.isSelected = !this.isSelected;
    }
}
