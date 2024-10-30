import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service'

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
}
