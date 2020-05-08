import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appTypeColor]'
})
export class TypeColorDirective implements OnInit {
  @Input() type;

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    switch (this.type) {
      case ( 'grass' ): this.element.nativeElement.style.backgroundColor = 'rgb(155,204,80)';
                        break;
      case ( 'poison' ): this.element.nativeElement.style.backgroundColor = 'rgb(185,127,201)';
                         break;
      case ( 'fire' ): this.element.nativeElement.style.backgroundColor = 'rgb(253,125,36)';
                       break;
      case ( 'flying' ): this.element.nativeElement.style.backgroundColor = 'rgb(61,199,239)';
                         break;
      case ( 'water' ): this.element.nativeElement.style.backgroundColor = 'rgb(69,146,196)';
                        break;
      case ( 'bug' ): this.element.nativeElement.style.backgroundColor = 'rgb(114,159,63)';
                      break;
      case ( 'normal' ): this.element.nativeElement.style.backgroundColor = 'rgb(164,172,175)';
                         break;
      case ( 'electric' ): this.element.nativeElement.style.backgroundColor = 'rgb(238,213,53)';
                           break;
      case ( 'ground' ): this.element.nativeElement.style.backgroundColor = 'rgb(171,152,66)';
                         break;
      case ( 'fairy' ): this.element.nativeElement.style.backgroundColor = 'rgb(253,185,233)';
                        break;
      case ( 'fighting' ): this.element.nativeElement.style.backgroundColor = 'rgb(213,103,35)';
                           break;
      case ( 'psychic' ): this.element.nativeElement.style.backgroundColor = 'rgb(243,102,185)';
                          break;
        case ( 'rock' ): this.element.nativeElement.style.backgroundColor = 'rgb(163,140,33)';
                         break;
        case ( 'steel' ): this.element.nativeElement.style.backgroundColor = 'rgb(158,183,184)';
                          break;
        case ( 'ice' ): this.element.nativeElement.style.backgroundColor = 'rgb(81,196,231)';
                        break;
        case ( 'ghost' ): this.element.nativeElement.style.backgroundColor = 'rgb(123,98,163)';
                          break;
        case ( 'dragon' ): this.element.nativeElement.style.backgroundColor = 'rgb(241,110,87)';
                           break;
        case ( 'dark' ): this.element.nativeElement.style.backgroundColor = 'rgb(112,112,112)';
                         break;
        default: this.element.nativeElement.style.backgroundColor = 'rgb(185,185,185)';
        }
  }
}
