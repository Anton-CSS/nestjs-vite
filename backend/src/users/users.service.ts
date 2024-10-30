import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service'
import { UserDto } from './user.dto'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  getAllUsers() {
    return this.prisma.user.findMany({
      select: {
        name: true,
        email: true,
        password: true,
      }
    })
  }

  async login(data: UserDto){
    return this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    })
  }
}
