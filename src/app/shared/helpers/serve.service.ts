import { Injectable } from '@angular/core';
import { DbService } from './db.service';
import { databaseUser, User } from '../../data-model';

@Injectable({
  providedIn: 'root'
})
export class ServeService {

  isLoggedIn = false;
  currentUser: string = '';

  constructor(private dbService: DbService) {
      this.dbService.initDatabase(databaseUser);
   }

  auth(password: string, user: User): Promise<boolean> {
    const email = user.email;
    return this.dbService
    .select(databaseUser, {email})
    .then((user: User)=> {
      console.log(user[0]);
      if (!user[0]) throw `Usuário ${email} não cadastrado`;
      if (this.validPassword(password, user[0])) {
        window.localStorage.setItem('user', JSON.stringify(user[0]));
        this.isLoggedIn = true;
        this.getUser();
        return  true; //this.isAdmin(user)
      };
      throw "Senha inválida";  
    });
  }

  signUp(user: User): Promise<boolean> {
    return this.dbService
    .insert(databaseUser, user)
    .then(rowsAffected => {
      if (rowsAffected > 0) return true;
      return false;
    })
  }

  logout(): void {
    this.isLoggedIn = false;
    window.localStorage.clear();
    this.currentUser = '';
  }

  isLogin() {
    return window.localStorage.getItem('user'); 
  }

  private validPassword(password: string, user: User): boolean {
    return password === user.password;
  }

  private isAdmin(user: User): boolean {
    return user.admin;
  }

  getUser() {
    try {
      const user: User = JSON.parse(window.localStorage.getItem('user'));
      const firstName = user.name.split(' ').slice(0, -1).join(' ');
      this.currentUser = firstName;
    } catch (error) {
      return '';
    }
    
  }
}
