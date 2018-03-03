import { Component, ViewChild, HostListener } from '@angular/core';
import { AgmMap } from '@agm/core';

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    pageTitle: String = 'Want to be a part of us?';
    pageDescription: String = 'Here are few ways to get in touch with us';
    lat: number = 17.48918337;
    lng: number = 78.37219792;
    zoom: number = 15;

    @ViewChild(AgmMap) myMap: any;

    @HostListener('window:resize')
    onWindowResize() {
        this.myMap.triggerResize()
            .then(() => this.myMap._mapsWrapper.setCenter({ lat: this.lat, lng: this.lng }));
    }

    openGoogleMaps() {
        window.open("https://www.google.co.in/maps/dir//" + this.lat + "," + this.lng, "_blank");
    }
}