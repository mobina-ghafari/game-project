"use client";

import { dummyEndpoints } from "@/src/services/api/endpoints";
import { useGet } from "@/src/services/api/useApi";
import Table, { Column } from "@/src/components/table/Table";
import { UsersResponse } from "@/src/types/users";
import Navbar from "@/src/components/navigation/Navbar";

interface UserRow {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  city: string;
  company: string;
}

const UsersPage = () => {
  const { data, isLoading, isFetching } = useGet<UsersResponse>({
    url: dummyEndpoints.users,
    source: "dummy",
  });

  const rows: UserRow[] =
    data?.users?.map((user) => ({
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      phone: user.phone,
      role: user.role || "user",
      city: user.address?.city || "-",
      company: user.company?.name || "-",
    })) ?? [];

  const columns: Column<UserRow>[] = [
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Phone", accessor: "phone" },
    { header: "Role", accessor: "role" },
    { header: "City", accessor: "city" },
    { header: "Company", accessor: "company" },
  ];

  return (
    <>
      <Navbar />
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-text-muted text-sm">
            {isLoading ? "Loading..." : ""}
          </span>
        </div>
        س
        {isLoading || isFetching ? (
          <div className="text-text-muted text-sm">Loading users...</div>
        ) : (
          <Table columns={columns} data={rows} />
        )}
      </div>
    </>
  );
};

export default UsersPage;
