import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Aplikacja';
  variable = '';

  ngOnInit(): void {
    const a = 5 + 5;
    console.log(a);
  }
}
