import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-manual]',
  template: `<p>Manual Works!</p>`,
  styles: [`p { color: red; }`],
})
export class ManualComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
