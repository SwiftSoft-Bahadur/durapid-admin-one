import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective implements OnInit {

  constructor(private eleRef: ElementRef) {

  }
  ngOnInit(): void {
    this.eleRef.nativeElement.value = '3'
  }

  @HostListener('keyup') onkeyup() {
    if (this.eleRef.nativeElement) {
      this.eleRef.nativeElement.style.backgroundColor='red'
    }
    this.eleRef.nativeElement.style.backgroundColor='yellow'

  }
}
