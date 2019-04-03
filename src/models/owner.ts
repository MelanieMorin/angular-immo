export class Owner {
    constructor(
        public id:number,
        public lastName: string,
        public firstName: string,
        public birth: Date,
        public address: string,
        public address2: string,
        public postalCode: string,
        public city: string
    ) {}
}