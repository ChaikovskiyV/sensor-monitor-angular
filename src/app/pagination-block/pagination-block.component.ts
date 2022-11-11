import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-block',
  templateUrl: './pagination-block.component.html',
  styleUrls: ['./pagination-block.component.css']
})
export class PaginationBlockComponent implements OnInit {
  @Input() pagesNumber: number = 0;
  @Output() onPageChanged = new EventEmitter<number>();
  currentPage: number = 1;
  pageStates: boolean[] = [];
  pages: number[] = [];

  currentPageChanged(page: any) {
    this.onPageChanged.emit(page);
  }

  constructor() { }

  ngOnInit(): void {
    this.fillPageStates();
  }

  public getPageState(page: number) {
    return this.pageStates.find((el, idx) => idx === page - 1);
  }

  public pagesArray(pagesNumber: number): number[] {
    let pages: number[] = [];
    for (let i = 1; i <= pagesNumber; i++) {
      pages.push(i);
    }

    this.pages = pages;

    return pages;
  }

  public onChoosePage(page: number) {
    if (page === this.currentPage) {
      return;
    }
    this.replacePageStatus(page);
    this.currentPageChanged(page);
  }

  public onGoToPreviousPage() {
    if (this.pages.indexOf(this.currentPage) === 0) {
      return;
    }
    this.replacePageStatus(this.currentPage - 1);
    this.currentPageChanged(this.currentPage);
  }

  public onGoToNextPage() {
    if (this.pages.indexOf(this.currentPage) === this.pages.length - 1) {
      return;
    }
    this.replacePageStatus(this.currentPage + 1);
    this.currentPageChanged(this.currentPage);
  }

  /**
   * Replace the meaning of the class 'active' for pages depending on chosen page
   * @param page - the current page number
   */
  private replacePageStatus(page: number) {
    this.pageStates.splice(this.currentPage - 1, 1, false);
    this.pageStates.splice(page - 1, 1, true);
    this.currentPage = page;
  }

  private fillPageStates() {
    this.pageStates = Array(this.pagesNumber);
    this.pageStates.fill(false);
    this.pageStates.splice(this.currentPage - 1, 1, true);
  }
}