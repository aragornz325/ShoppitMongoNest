import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { User } from './entities/user.entity';
import { CreateUserDto, UpdateUserDto, FilterUserDto } from './DTOs/user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async findAll(params: FilterUserDto) {
    if (Object.keys(params).length) {
      const { limit, offset } = params;
      return await this.userModel.find().skip(offset).limit(limit).exec();
    } else {
      return await this.userModel.find();
    }
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id);
    if (!user) throw new NotFoundException(`User with id ${id} does not exist`);
    return user;
  }

  async create(user: CreateUserDto) {
    const finalUser = {
      ...user,
      createdAt: new Date(),
    };
    const newUser = new this.userModel(finalUser);
    return await newUser.save();
  }

  async update(id: string, changes: UpdateUserDto) {
    const user = await this.userModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
    if (!user) throw new NotFoundException(`User with id ${id} does not exist`);
    return user;
  }

  async remove(id: string) {
    const user = await this.userModel.findByIdAndDelete(id);
    if (!user) throw new NotFoundException(`User with id ${id} does not exist`);
    return user;
  }
}
