import { Component, OnInit, OnDestroy } from '@angular/core';
declare var $: any;

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
    
    ngOnInit() {
        $('.parallax-window-1').parallax({imageSrc: 'assets/images/parallax/parallax_5.jpg'});
        $('.parallax-window-2').parallax({imageSrc: 'assets/images/parallax/parallax_3.jpg'});
        $('.parallax-window-3').parallax({imageSrc: 'assets/images/parallax/parallax_4.jpg'});
    }

    ngOnDestroy() {
       $('.parallax-mirror').attr('hidden', 'true');
    }
}