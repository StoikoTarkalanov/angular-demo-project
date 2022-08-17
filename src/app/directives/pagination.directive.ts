import {
  Directive, Input,
  Renderer2,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appPagination]',
  exportAs: 'pagination',
})

export class PaginationDirective {
  @Input()
  totalPages!: number;
  pageNum: number = 1;
  @Output() onChangeEventEmitter = new EventEmitter();

  constructor(private rendered: Renderer2, private el: ElementRef) { }

  onNext() {
    this.setPage(Math.min(this.totalPages, this.pageNum + 1));
  }

  onPrevious() {
    this.setPage(Math.max(1, this.pageNum - 1));
  }

  onFirst() {
    this.setPage(1);
  }

  onLast() {
    this.setPage(this.totalPages);
  }

  setPage(pagination: number) {
    this.pageNum = pagination;
    this.rendered.setProperty(this.el.nativeElement, 'value', this.pageNum);
    this.onChangeEventEmitter.emit(this.pageNum);
  }
}
