import { User } from '../model'
export class AuthService {
  constructor() {
  }
  isLoggedIn(user: User) {
    return true;
  }
  accountIsActive(user: User) {

  }
  login(username: string, password: string) {
  }
}
