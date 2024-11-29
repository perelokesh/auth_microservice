import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/models/user.model';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private readonly _userModel: Model<User>
    ){
    }
    // register(){
    //     return "You are in register page"
    // }

    login(username: string, password: string){
        const user = this._userModel.findOne({
            username
        })
        if(!user) throw new UnauthorizedException('Invalid User')
        // password comapre and match
        // const passwordMatch = 
        return user;
    }

    logout(){
      return 'u are in logout'
    }
    getUser(){
        return 'get users'
    }
}
