import { Component } from '@angular/core';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  luke = {name: 'Luke' , isJedi: true, temple: 'Coruscant'}
  han = {name: 'HanSolo' , isJedi: false}
  leia = {name: 'Luke' , isJedi: false}
}
