import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appHighlight]'
})
export class Highlight implements OnInit {
    @HostBinding('style.backgroundColor') backgroundColor: string = 'blue';
    @HostBinding('style.color') color: string = 'white';

    constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {

    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        this.backgroundColor = 'red';
        this.color = 'black';
        console.log("najechał");
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        this.backgroundColor = 'blue';
        this.color = 'white';
        console.log("opuścił");
    }


}
