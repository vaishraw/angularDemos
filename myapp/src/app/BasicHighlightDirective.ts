import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private someElement: ElementRef) {}

  ngOnInit(): void {
    this.someElement.nativeElement.style.backgroundColor = "#FDA7DF";
    this.someElement.nativeElement.style.color = "black";
  }
}