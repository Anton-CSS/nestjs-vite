import { PrismaService } from '../prisma.service';
import { UserDto } from './user.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllUsers(): import(".prisma/client").Prisma.PrismaPromise<{
        email: string;
        name: string;
        password: string;
    }[]>;
    login(data: UserDto): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
