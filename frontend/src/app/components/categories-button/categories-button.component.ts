import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-categories-button',
  templateUrl: './categories-button.component.html',
  styleUrls: ['./categories-button.component.scss']
})



export class CategoriesButtonComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  @Input()
  typeList: any;

  names: any[];

  @Input()
  rota: any;

  ngOnInit(): void {
    this.setValuesButton()
  }

  async setValuesButton() {
    const type: any[] = this.typeList.name
    this.names = type
  }





}
