import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "../user/user.service";

@Controller("auth")
export class AuthController {
  constructor(private userService: UserService) {}

  @Post("/login")
  async login(@Body() loginDTO: any) {
    const user = await this.userService.findByEmail(loginDTO.email);
    if (user) {
      if (user.password === loginDTO.password) {
        return user;
      }
      return `Password doesn't match`;
    }
    return "Unauthenticated";
  }
}
