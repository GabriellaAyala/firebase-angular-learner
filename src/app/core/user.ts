import { auth } from "firebase";

//if wanted to assign multiple roles
export interface Roles {
    subscriber?: boolean;
    editor?: boolean;
    admin?: boolean;

}


export class User {
    uid: string;
    email: string;
    displayName: string;
    roles: Roles;

    constructor(authData) {
        this.email = authData.email;
        this.roles = {subscriber : true}
    }
}