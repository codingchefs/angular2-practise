import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[rbHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') mouseover (){
    this.backgroundColor = 'green';
    //this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }

  @HostListener('mouseleave') mouseleave (){
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') get setColor (){
    return this.backgroundColor;
  }

  private backgroundColor = 'white';
  constructor(private elementRef:ElementRef, private renderer: Renderer) {
    // elementRef.nativeElement.style.backgroundColor ='green';
    // this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
  }

}
