import { Controller, Get, Post,Put, Delete, Param, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(readonly userService: UserService){}

    @Get(':id')
    getUser(@Param('id') id:string){
        return this.userService.getUser(id)
    }
    
    @Post()
    createUser(@Body() createUserDto: CreateUserDto){
        return this.userService.createUser(createUserDto)
    }

    @Put(':id')
    updateUser(@Param('id') id,@Body() createUserDto){
        return this.userService.updateUser(id,createUserDto)
    }

    @Delete(':id')
    deleteUser(@Param('id') id){
        return this.userService.deleteUser(id)
    }
}
