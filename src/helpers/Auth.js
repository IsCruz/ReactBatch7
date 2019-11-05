class Auth {
 constructor(){
     this.authenticated = false;
}
 login(callback) {
     localStorage.setItem('isLogged', true);
     this.authenticated = true;
     callback();
 }
 logout(callback) {
     localStorage.removeItem('isLogged');
     this.authenticated = false;
     callback();
 }
 isAuthenticated(){
     this.authenticated = false;
     if(localStorage.getItem('isLogged')){
         this.authenticated = true;
     }
     return this.isAuthenticated;
 }
}
export default new Auth()