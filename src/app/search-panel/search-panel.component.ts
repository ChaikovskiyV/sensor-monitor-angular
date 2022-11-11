import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {
  form: any = {}
  @Output() onSearchByParam = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSearch() {
    let searchParam: string = this.form.searchParam;
    if (searchParam.trim()) {
      this.onSearchByParam.emit(searchParam);
    }
  }

}
