import { IUser } from './types';
export function addNewUser( user: IUser){
    console.log(user);
    
    return{
        type: 'ADD_USER',
        payload: {
            user
        }
    }
}