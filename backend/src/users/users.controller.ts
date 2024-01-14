import { Controller,Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(readonly userService: UsersService){

    }

    @Get()
    getUsers(){
        return this.userService.getUsers();
    }
    
    @Get('byStatus')
    getUsersByType(@Query('status') type:string){
         return this.userService.getUsers(type);
    }
}