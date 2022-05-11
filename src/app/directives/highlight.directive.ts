import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.backgroundColor=" rgba(0,0,0,0.7)"
  }

}
