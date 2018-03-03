import { Injectable } from '@angular/core';

import { SignupFormData, Personal, Address, UserCredentials } from './signup.model';

@Injectable()
export class SignupDataService {

    signupFormData: SignupFormData = new SignupFormData();
    isUserCredentialsFormValid: boolean = false;
    isPersonalFormValid: boolean = false;
    isWorkFormValid: boolean = false;
    isAddressFormValid: boolean = false;

    getUserCredentials(): UserCredentials {
        return this.signupFormData.userCredentials;
    }

    setUserCredentials(userCredentials: UserCredentials) {
        this.isUserCredentialsFormValid = true;
        this.signupFormData.userCredentials = userCredentials;
    }

    getPersonal(): Personal {
        // Return the Personal data
        var personal: Personal = {
            firstName: this.signupFormData.firstName,
            lastName: this.signupFormData.lastName,
            email: this.signupFormData.email
        };
        return personal;
    }

    setPersonal(data: Personal) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.signupFormData.firstName = data.firstName;
        this.signupFormData.lastName = data.lastName;
        this.signupFormData.email = data.email;
    }

    getWork(): string {
        // Return the work type
        return this.signupFormData.work;
    }

    setWork(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        this.signupFormData.work = data;
    }

    getAddress(): Address {
        // Return the Address data
        var address: Address = {
            street: this.signupFormData.street,
            city: this.signupFormData.city,
            state: this.signupFormData.state,
            zip: this.signupFormData.zip
        };
        return address;
    }

    setAddress(data: Address) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        this.signupFormData.street = data.street;
        this.signupFormData.city = data.city;
        this.signupFormData.state = data.state;
        this.signupFormData.zip = data.zip;
    }

    getFormData(): SignupFormData {
        // Return the entire Form Data
        return this.signupFormData;
    }

    resetFormData(): SignupFormData {
        // Return the form data after all this.* members had been reset
        this.signupFormData.clear();
        this.isUserCredentialsFormValid = this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.signupFormData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isUserCredentialsFormValid &&
            this.isPersonalFormValid &&
            this.isWorkFormValid &&
            this.isAddressFormValid;
    }
}