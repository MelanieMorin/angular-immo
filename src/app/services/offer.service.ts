import { Injectable } from '@angular/core';
import { Offer } from '../models/offer';

@Injectable({
    providedIn: 'root'
})

export class OfferService 
{
    offers: Offer[];

    constructor() {
        const datas = JSON.parse(localStorage.getItem('offers')) || [];
        this.offers = datas.map(data =>
            new Offer(
                data.id,
                data.address,
                data.address2,
                data.postalCode,
                data.city,
                data.area,
                data.country,
                data.nearby,
                data.longitude,
                data.latitude,  
                data.photo,
                data.title,
                data.description,
                data.price,
                data.surface,
                data.owner,
                data.ref
            )
        );
    }

    incrementId(): number {
        return this.offers.length == 0 ? 1 : this.offers[this.offers.length - 1].id + 1;
    }

    add(offer): void {
        this.offers.push(
            new Offer(
                this.incrementId(),
                offer.address,
                offer.address2,
                offer.postalCode,
                offer.city,
                offer.area,
                offer.country,
                offer.nearby,
                offer.longitude,
                offer.latitude,  
                offer.photo,
                offer.title,
                offer.description,
                offer.price,
                offer.surface,
                offer.owner,
                offer.ref
            )
        );
        console.log(this.offers);
        this.setToStorage();
    }

    remove(offer): void {
        this.offers.splice(this.offers.indexOf(offer), 1);
        this.setToStorage();
    }

    setToStorage() {
        localStorage.setItem('offers', JSON.stringify(this.offers));
    }

    getAll() {
        return this.offers;
    }

    findById(id): Offer {
        return this.offers.find(offer =>
            offer.id == id
        );
    }

}