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
    ) {
    }

    getFullName(): string {
        return this.firstName.toUpperCase()+" "+this.lastName.toUpperCase(); 
    }

    getFullAddress(): string {
        return this.address+(typeof this.address2 == 'undefined'? '' : ', '+this.address2); 
    }
}