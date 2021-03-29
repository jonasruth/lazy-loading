import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <h2>Ops! Page not found...</h2>
    <span class="emoji">💩👾 🤖</span>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
