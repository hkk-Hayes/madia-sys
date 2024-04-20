import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Headers,
  HttpCode,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller({ path: 'user', version: '1' })
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body('name') createUserDto: CreateUserDto, @Req() req) {
    console.log(req.session.code);

    return this.userService.create(createUserDto);
  }
  @Post('code')
  postcode(@Req() req) {
    console.log(req.session.code);
    return 123;
  }

  @Get()
  findAll(@Req() req) {
    // console.log(req.query);
    // req.session.code='1234'
    return this.userService.findAll(req);
  }
  @Get('code')
  getcode(@Req() req) {
    req.session.code = '123456';
    console.log(123);
    return 123;
  }
  @Get(':id')
  findOne(@Param('id') id: string, @Headers() Header) {
    return this.userService.findOne(+id, Header);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
