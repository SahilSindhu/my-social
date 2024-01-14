import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    @Get(':id')
    getUser(@Param('id') id:string){
        return {id}
    }
    @Post()
    createUser(@Body() createUserDto: CreateUserDto){
        return { name: createUserDto.name}
    }
}
