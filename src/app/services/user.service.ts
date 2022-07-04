import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  private users: IUser[] = [
    {
      id: '1',
      firstname: 'ahmad',
      lastname: 'almohamad',
      username: 'ahmadAlmohamad',
      gender: 'male',
      email: 'ahmadAlmohamad@gmail.com',
      workTitle: 'full stack developer',
      location: 'syria - aleppo',
      img: '../../../assets/personal_user.png',
      dateOfBirth: '',
      points: 3311,
      phoneNummber: '0940481087',
    },
    {
      id: '2',
      firstname: 'abdulrhman',
      lastname: 'almohamad',
      username: 'abdulrhmanAlmohamad',
      gender: 'male',
      email: 'abdulrhmanAlmohamad@gmail.com',
      workTitle: 'full stack developer',
      location: 'syria - aleppo',
      img: '../../../assets/personal_user.png',
      dateOfBirth: '',
      points: 555,
      phoneNummber: '0940481078',
    },

    {
      id: '3',
      firstname: 'samira',
      lastname: 'said',
      username: 'samiraSaid',
      gender: 'female',
      email: 'samiraSaid@gmail.com',
      workTitle: 'full stack developer',
      location: 'syria - aleppo',
      img: '../../../assets/personal_user.png',
      dateOfBirth: '',
      points: 5000,
      phoneNummber: '0940488710',
    },
  ];

  getTopRated() {
    return this.users.sort((a, b) => b.points - a.points).slice(0, 5);
  }
  getUserByUsername(username: string) {
    let user = this.users.find((user) => user.username == username);
    return user;
  }
}
