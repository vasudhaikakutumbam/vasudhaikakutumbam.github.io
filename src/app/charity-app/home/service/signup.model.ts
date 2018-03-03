export class SignupFormData {
    _userCredentials: UserCredentials = new UserCredentials();

    firstName: string = '';
    lastName : string = '';
    email:string = '';
    work: string = '';
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';

    get userCredentials(): UserCredentials{
        return this._userCredentials;
    }

    set userCredentials(userCredentials:UserCredentials){
        this._userCredentials = userCredentials;
    }

    clear() {
       this.userCredentials.clear();

        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.work = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
}

export class UserCredentials {
    userName: string = '';
    email: string = '';
    password: string = '';

    clear(){
        this.userName = '';
        this.email = '';
        this.password = '';
    }
}

export class Personal {
    firstName: string = '';
    lastName : string = '';
    email: string = '';
}

export class Address {
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
}