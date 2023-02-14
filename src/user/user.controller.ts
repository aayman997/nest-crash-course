import { Controller, Delete, Get, Param, Patch, Post, Req } from "@nestjs/common";
import { Request } from "express";

@Controller("user")
export class UserController {
  @Get()
  getUsers() {
    return {
      users: [
        {
          name: "Ahmed",
          email: "ahmed1997164@gmail.com",
        },
      ],
    };
  }

  @Get("/:userId")
  getUser(@Param() params: { userId: number }) {
    return `This is user with id: ${params.userId}`;
  }

  @Post()
  saveUser(@Req() req: Request) {
    return req.body;
  }

  @Patch("/:userId")
  updateUser(@Req() req: Request, @Param() params: { userId: number }) {
    return `${params.userId} user updated with data ${JSON.stringify(
      req.body,
    )}`;
  }

  @Delete("/:userId")
  deleteUser(@Param() params: { userId: number }) {
    return `user with id: ${params.userId} have been deleted`;
  }
}
