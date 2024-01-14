import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private users = [];


    getUser(id=''){
        const user = this.users.find(user => user?.id === id);
        if(!user){
            throw new Error;
        }else{
            return user;
        }
    }

    createUser(user){
         this.users.push(user);
         return this.users;
    }

    updateUser(id='',newDetails){
        let updatedUser;
        this.users = this.users.map((user)=>{
            if(user.id === id){
                user = {...user,...newDetails};
                updatedUser= user;
            }
            return user;
        })
        return updatedUser;
    }

    deleteUser(id){
        const updatedUserList = this.users.filter(user => user.id !== id);
        this.users = updatedUserList;
    }
}
