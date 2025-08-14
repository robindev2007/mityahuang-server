import { User, UserRole } from "@prisma/client";
import env from "../../config/clean-env";
import { hashPwd } from "./encryption";
import { generateMemberId } from "./gen-member-id";
import prisma from "./prisma.utils";

///////////////////////// Types /////////////////////////
type T_SuperAdminInfo = Pick<
  User,
  "email" | "password" | "role" | "isVerified"
>;
/////////////////////////////////////////////////////

const seedSuperAdmin = async () => {
  // when database is connected, we will check who is super admin
  const admin = await prisma.user.findFirst({
    where: {
      email: env.ADMIN_EMAIL,
      role: UserRole.SUPER_ADMIN, // SUPER_ADMIN
    },
  });

  if (!admin) {
    console.log(
      "🔍 No super admin found, Creating a new super admin by seeding new one..",
    );
    const adminObjReplica = {
      email: env.ADMIN_EMAIL,
      password: env.ADMIN_PASSWORD,
      role: UserRole.SUPER_ADMIN, // SUPER_ADMIN
      isVerified: true,
    };

    let { password, ...rest } = adminObjReplica;
    password = await hashPwd(password); // hashing password
    await prisma.user.create({
      data: {
        ...rest,
        lastPasswordChangedAt: new Date(),
        password,
        memberId: generateMemberId("admin"),
      },
    });
  }
};

export default seedSuperAdmin;
