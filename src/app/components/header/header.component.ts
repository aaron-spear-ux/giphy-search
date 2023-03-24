import { Component } from '@angular/core';

export interface SearchVal {
  searchText: string;
  reset: boolean;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  gifs: any[] = [];
  loading: boolean = false;
  mode: 'gifs' = 'gifs';

  searchObj: SearchVal = {
    searchText: '',
    reset: true,
  };

  setGifs(gifs: any[]): void {
    this.gifs = gifs;
  }

  getUrl(url: string): string {
    return '';
  }

  selectGif(gif: any, index: number): void {}

  searchGif(target: any) {
    this.searchObj = {
      searchText: target.value,
      reset: true,
    };
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }
}
