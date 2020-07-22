import { Component } from '@angular/core';

import * as appData from './uv-data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UV Share Market Portfolio';
  gitLogo = appData.general.gitIcon;
}
