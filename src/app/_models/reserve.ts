import { Passenger } from '../_models/index';

export class Reserve {

accion: string;
aerolinea: number;
noPersonas: number;
notas: string;

estado: string = "";

valueAd: any[];
habitaciones: any[];
pass: any;

total: number;

idHospedaje: number;
idUsuario: number;

feDesde: Date;
feHasta: Date;

}
