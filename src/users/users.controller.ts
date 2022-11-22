import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  HttpCode,
  HttpStatus,
  HttpException,
  BadRequestException,
} from '@nestjs/common';

import { User } from './entities/user.entity';
import { CreateUserDto, UpdateUserDto, FilterUserDto } from './DTOs/user.dto';
import { UsersService } from './users.service';

import { MongoIdPipe } from '../common/mongo-id/mongo-id.pipe';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  GetUsers(@Query() params?: FilterUserDto) {
    try {
      return this.usersService.findAll(params);
    } catch (error) {
      throw new BadRequestException('Something bad happened', {
        cause: new Error(),
        description: error,
      });
    }
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  GetUser(@Param('id', MongoIdPipe) id: string) {
    try {
      return this.usersService.findOne(id);
    } catch (error) {
      throw new BadRequestException('Something bad happened', {
        cause: new Error(),
        description: error,
      });
    }
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async CreateUser(@Body() payload: CreateUserDto) {
    try {
      return await this.usersService.create(payload);
    } catch (error) {
      throw new BadRequestException('Something bad happened', {
        cause: new Error(),
        description: error,
      });
    }
  }

  @Put(':id')
  async UpdateUser(
    @Param('id', MongoIdPipe) id: string,
    @Body() payload: UpdateUserDto,
  ) {
    try {
      return await this.usersService.update(id, payload);
    } catch (error) {
      throw new BadRequestException('Something bad happened', {
        cause: new Error(),
        description: error,
      });
    }
  }

  @Delete(':id')
  async DeleteUser(@Param('id', MongoIdPipe) id: string) {
    try {
      return await this.usersService.remove(id);
    } catch (error) {
      throw new BadRequestException('Something bad happened', {
        cause: new Error(),
        description: error,
      });
    }
  }
}
