import React from "react";
import { type User } from "@/types";

interface Props {
  user?: User;
}

const UserInfo = ({ user }: Props) => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
        <p className="text-sm font-medium capitalize">ID</p>
        <p className="truncate text-sm max-w-[240px] font-mono p-1 bg-slate-100 rounded-md">
          {user?.id}
        </p>
      </div>

      <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
        <p className="text-sm font-medium capitalize">Name</p>
        <p className="truncate text-sm max-w-[240px] font-mono p-1 bg-slate-100 rounded-md">
          {user?.name}
        </p>
      </div>

      <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
        <p className="text-sm font-medium capitalize">Email</p>
        <p className="truncate text-sm max-w-[240px] font-mono p-1 bg-slate-100 rounded-md">
          {user?.email}
        </p>
      </div>

      <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
        <p className="text-sm font-medium capitalize">Role</p>
        <p className="truncate text-sm max-w-[240px] font-mono p-1 bg-slate-100 rounded-md">
          {user?.role}
        </p>
      </div>
    </div>
  );
};
export default UserInfo;
