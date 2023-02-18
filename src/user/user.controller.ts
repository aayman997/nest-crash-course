import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getAll();
  }

  @Get("/:userId")
  getUser(@Param("userId", ParseIntPipe) userId: number) {
    return this.userService.getUser(userId);
  }

  @Post()
  saveUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Patch("/:userId")
  updateUser(@Body() updateUserDTO: UpdateUserDto, @Param("userId", ParseIntPipe) userId: number) {
    return this.userService.update(updateUserDTO, userId);
  }

  @Delete("/:userId")
  deleteUser(@Param("userId", ParseIntPipe) userId: number) {
    return this.userService.delete(userId);
  }
}
