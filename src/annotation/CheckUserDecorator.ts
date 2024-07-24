import { UserRole } from "../model/UserRole";
import { UserTokenModel } from "../model/UserTokenModel";

export function CheckUserRole(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
): void {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const userTokenModel: UserTokenModel = JSON.parse(JSON.stringify(args))[0] as UserTokenModel;
    if (!Object.values(UserRole).includes(userTokenModel.role)) {
      throw new Error("Role not found");
    }
    return originalMethod.apply(this, args);
  };
}
