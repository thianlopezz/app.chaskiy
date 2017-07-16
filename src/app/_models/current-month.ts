export class CurrentMonth {
    noMonth: number;
    anio: number;
    finMes: number;
    days: Array<dayReserve>=[];
    mes:string;
    meses: string[]= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    dias: string[]= ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"];

    // constructor(noMonth: number, anio: number) {
    // 	this.noMonth = noMonth;
    // 	this.anio = anio;
    // 	getFinMes();
    // 	this.days = Array(this.finMes).fill().map((x,i)=>i);
    // }

    constructor() {
    	var date = new Date();
    	this.noMonth = date.getMonth();
    	this.mes = this.meses[this.noMonth];
    	this.anio = date.getFullYear();
    	this.getFinMes();
    	this.setDays();
    }

    private getFinMes(){

    	for(var i=29; i<=32; i++){
			if(this.noMonth < new Date(this.anio, this.noMonth, i, 0, 0, 0, 0).getMonth()){
				this.finMes = i-1;
				return;
			}
    	}
    }

    private setDays(){
    	this.days = [];
    	for(var i=0; i<this.finMes; i++){
    		this.days.push(new dayReserve(i));
    	}
    }

    nextMonth(){    	
    	var date = new Date(this.anio, this.noMonth, 1, 0, 0, 0, 0);
    	date.setMonth(date.getMonth()+1);
    	this.noMonth = date.getMonth();
    	this.mes = this.meses[this.noMonth];
    	this.anio = date.getFullYear();
    	this.getFinMes();
    	this.setDays();
    }

    previousMonth(){    	
    	var date = new Date(this.anio, this.noMonth, 1, 0, 0, 0, 0);
    	date.setMonth(date.getMonth()-1);
    	this.noMonth = date.getMonth();
    	this.mes = this.meses[this.noMonth];
    	this.anio = date.getFullYear();
    	this.getFinMes();
    	this.setDays();
    }
}

export class dayReserve {
    day: number;
    isReserved: boolean;
    isSelected: boolean;

    constructor(day: number) {
        this.day = day;
        this.isReserved = false;
        this.isSelected = false;
    }

    select(){
        this.isSelected = !this.isSelected;
    }
}