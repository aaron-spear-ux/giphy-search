import { Component } from '@angular/core';

export interface SearchVal {
  searchText: string;
  reset: boolean;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchObj: SearchVal = {
    searchText: '',
    reset: true,
  };

  searchGif(target: any) {
    this.searchObj = {
      searchText: target.value,
      reset: true,
    };
  }
}
