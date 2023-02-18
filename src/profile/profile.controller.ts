import { Controller, Get, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@Controller("profile")
export class ProfileController {
  @UseGuards(JwtAuthGuard)
  @Get()
  profile() {
    return {
      message: `I'm Protected Route`,
    };
  }
}
