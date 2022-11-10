import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-block',
  templateUrl: './pagination-block.component.html',
  styleUrls: ['./pagination-block.component.css']
})
export class PaginationBlockComponent implements OnInit {
  @Input() currentPage: number = 1;
  @Output() currentPageChanged = new EventEmitter<number>();
  @Input() pagesNumber: number = 1;
  pageStates: boolean[] = [];
  pages: number[] = [];

  onCurrentPageChanged(model: number) {
    this.currentPage = model;
    this.currentPageChanged.emit(model);
  }

  constructor() { }

  ngOnInit(): void {
    this.pageStates = Array(this.pagesNumber);
    this.pageStates.fill(false);
    this.pageStates.splice(this.currentPage - 1, 1, true);

    for (let i = 0; i <= this.pagesNumber; i++) {
      this.pages.push(i + 1);
    }
  }

  public getPageState(page: number) {
    return this.pageStates.find((el, idx) => idx === page - 1);
  }

  public choosePage(page:number) {
    if(page === this.currentPage) {
      return;
    }
    this.replacePageStatus(page);
  }

  public goToPreviousPage() {
    if(this.pages.indexOf(this.currentPage) === 0) {
      return;
    }
    this.replacePageStatus(this.currentPage - 1);
  }

  public goToNextPage() {
    if(this.pages.indexOf(this.currentPage) === this.pages.length - 1) {
      return;
    }
    this.replacePageStatus(this.currentPage + 1);
  }

  private replacePageStatus(page:number) {
    this.pageStates.splice(this.currentPage - 1, 1, false);
    this.pageStates.splice(page - 1, 1, true);
    this.currentPage = page;
  }
}