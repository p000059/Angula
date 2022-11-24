import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-with-paramenter',
  templateUrl: './page-with-paramenter.component.html',
  styleUrls: ['./page-with-paramenter.component.css']
})
export class PageWithParamenterComponent implements OnInit {

  id: number | null = null;
  age: number | null = null;
  name: string | null = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get("id"));
    });
  
    this.route.queryParamMap.subscribe(params =>{
      this.age = Number(params.get("age"))
      this.name = String(params.get("name"));
    });
  }

}
