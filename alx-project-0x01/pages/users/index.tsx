import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

const Users: React.FC<{ users: UserProps[] }> = ({ users }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">User Content</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {users.map((user) => (
            <UserCard {...user} key={user.id} />
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
