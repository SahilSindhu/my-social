import { Controller,Get, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    getUsers(){
        return ['sahil']
    }
    @Get('byType')
    getUsersByType(@Query('type') type:string){
        return {type}
    }
}