import { Injectable } from '@angular/core';
import { Owner } from '../models/Owner';

@Injectable({
    providedIn: 'root'
})

export class OwnerService 
{
    owners: Owner[];

    constructor() {
        const datas = JSON.parse(localStorage.getItem('owners')) || [];
        this.owners = datas.map(data =>
            new Owner(data.id, data.lastName, data.firstName, data.birth, data.address, data.address2, data.postalCode, data.city)
        );
    }

    incrementId(): number {
        return this.owners.length == 0 ? 1 : this.owners[this.owners.length - 1].id + 1;
    }

    add(owner): void {
        this.owners.push(new Owner(this.incrementId(), owner.lastName, owner.firstName, owner.birth, owner.address, owner.address2, owner.postalCode, owner.city)
        );
        console.log(this.owners);
        this.setToStorage();
    }

    remove(owner): void {
        this.owners.splice(this.owners.indexOf(owner), 1);
        this.setToStorage();
    }

    setToStorage() {
        localStorage.setItem('owners', JSON.stringify(this.owners));
    }

    getAll() {
        return this.owners;
    }

    findById(id): Owner {
        return this.owners.find(owner =>
            owner.id == id
        );
    }

}