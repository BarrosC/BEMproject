import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public htmlCode: string = `<form class="formcontent">
        <input type="text" class="formcontent__field--first" />
        <input type="text" class="formcontent__field" />
        <input type="submit" class="formcontent__field--button" />
      </form>`

  constructor() { }

  ngOnInit() {
  }

}
