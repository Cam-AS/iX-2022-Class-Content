import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }

  async sendGetRequest() {
    let response: any = await this.homeService.getFirstRequestFromFirstServer();
    console.log(response.message);
  }

}
