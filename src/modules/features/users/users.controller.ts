import { Body, Controller, Post } from '@nestjs/common';
import {
  UserRegistrationReqBodyDTO,
  UserRegistrationResDTO,
} from './dtos/user-registration.dto';
import { UsersService } from './users.service';
import { SuccessResponse } from 'src/commons/interfaces';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  public async postUserRegistration(
    @Body() body: UserRegistrationReqBodyDTO,
  ): Promise<SuccessResponse<UserRegistrationResDTO>> {
    const resultData = await this.usersService.postUserRegistration(body);

    return {
      message: 'User registered successfully',
      data: resultData,
    };
  }
}