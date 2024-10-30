import { PrismaService } from '../prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllUsers(): import(".prisma/client").Prisma.PrismaPromise<{
        email: string;
        name: string;
        password: string;
    }[]>;
}
