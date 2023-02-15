import { Injectable } from "@nestjs/common";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserService {
  getAll() {
    return {
      users: [
        {
          name: "Ahmed",
          email: "ahmed1997164@gmail.com",
        },
        {
          name: "Mohamed",
          email: "mohamed@test.com",
        },
      ],
    };
  }

  getUser(userId: number) {
    return `This is user with id: ${userId}`;
  }

  create(createUserDto: CreateUserDto) {
    return createUserDto;
  }

  update(updateUserDTO: UpdateUserDto, userId: number) {
    return `${userId} user updated with data ${JSON.stringify(updateUserDTO)}`;
  }

  delete(userId: number) {
    return `user with id: ${userId} have been deleted`;
  }
}
