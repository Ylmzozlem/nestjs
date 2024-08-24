import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly userService : UsersService) {}

   /*

    @Get()
    findAll(){
        return []
    }

    */

    @Get() // GET /users?role=value 
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        return this.userService.findAll(role)
    }

    @Get('intern')
    findAllInterns(){
        return []
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.userService.findOne(+id) // id string olarak geliyor ama normalde bize number lazım. stringi number yapmak için bu şekilde + kullandık
    }

    @Post()
    create(@Body() user:{name: string , email: string , role: 'INTERN' | 'ENGINEER' | 'ADMIN'}){
        return this.userService.create(user)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updatedUser: {name?: string , email?: string , role?: 'INTERN' | 'ENGINEER' | 'ADMIN'}){
        return this.userService.update(+id , updatedUser)
    }

    @Delete('id')
    delete(@Param('id') id:string){
        return this.userService.delete(+id)
    }

   
}
