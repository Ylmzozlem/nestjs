import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id" :1,
            "name" : "Ozlem Okur",
            "role": "ADMIN"
        },
        {
            "id" :2,
            "name" : "MAhir OKUR",
            "role": "INTERN"
        },
        {
            "id" :3 ,
            "name" : "Fatma Yılmaz",
            "role": "INTERN"
        },
        {
            "id" :4 ,
            "name" : "Resul YILMAZ",
            "role": "INTERN"
        },
        {
            "id" :5 ,
            "name" : "Eslem YILMAZ",
            "role": "ENGINEER"
        },
        {
            "id" :6 ,
            "name" : "Sevim YILMAZ",
            "role":"ADMIN"
        }
    ]

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        if(role){
            return this.users.filter(users => users.role ===role)
        }

        return this.users
    }

    findOne(id: number){
        const user= this.users.find(user => user.id === id)

        return user

    }

    create(user: {name: string , email: string , role: 'INTERN' | 'ENGINEER' | 'ADMIN'}){

        const userByHighestId=[...this.users].sort((a,b) => b.id - a.id)

        const newUser={
            id: userByHighestId[0].id +1,
            ...user
        }

        this.users.push(newUser)

        return newUser

    }

    update(id: number, updatedUser: {name?: string , email?: string , role?: 'INTERN' | 'ENGINEER' | 'ADMIN'}){
        this.users = this.users.map(user => {
            if(user.id === id){
                return {...user, ...updatedUser}
            }
            return user
        })

        return this.findOne(id)
    }

    delete(id:number){

        const removeUser = this.findOne(id)

        this.users = this.users.filter(user => user.id !== id)

        return removeUser

    }
}
