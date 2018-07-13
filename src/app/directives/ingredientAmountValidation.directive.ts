import { OnInit, Directive, HostListener, HostBinding, ElementRef } from "@angular/core";

@Directive({
    selector: '[IngCorrAmount]'
})
export class IngredientAmountValidation implements OnInit {
    @HostBinding('style.border') border: string = '';
    @HostBinding('style.backgroundColor') bckGround: string = '';

    constructor(private elRef: ElementRef) {
    }

    ngOnInit() {
    }

    @HostListener('mouseenter') mouseenter(eventData: Event) {
        this.border = 'orange 3px solid';
        this.bckGround = 'lightblue';
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        this.border = '';
        this.bckGround = '';
    }
}