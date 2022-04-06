import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAttrDir]'
})
export class AttrDirDirective implements OnInit {
  @HostListener('click') onClick() {
    this.eleRef.nativeElement.value
    // this.render.setStyle()
  }

  constructor(private eleRef: ElementRef,private render: Renderer2) { }
  ngOnInit(): void {

  }

}
