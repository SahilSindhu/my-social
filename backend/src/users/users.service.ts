import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [{
        name:'sahil',
        age:27,
        status: 'married'
    },
    {
        name:'vikas',
        age:26,
        status: 'un-married'
    }]


    getUsers(status = ''){
        if(status === 'married'){
            return this.users.filter(user => user.status === 'married')
        }
        return this.users;
    }
}
