import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user = {
    img: '../../../assets/personal_user.png',
  };
  // user = undefined;
  paths: { routerLink: string; pathName: string; exact: boolean }[] = [
    { routerLink: '/', pathName: 'home', exact: true },
    { routerLink: '/blogs', pathName: 'blogs', exact: true },
    { routerLink: '/contests', pathName: 'contests', exact: true },
    { routerLink: '/problems', pathName: 'problems', exact: false },
  ];
  constructor() {}

  ngOnInit(): void {}
}
