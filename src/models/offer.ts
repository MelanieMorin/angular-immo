import { Owner } from './owner';

export class Offer {
    constructor(
        public address: string,
        public address2: string,
        public postalCode: string,
        public city: string,
        public area: string,
        public country: string,
        public nearby: string,
        public longitude: number,
        public latitude: number,

        public photo: string,
        public title: string,
        public description: string,
        public price: number,
        public surface: number,
        public owner: Owner,
        public ref: string
    ) {}
}