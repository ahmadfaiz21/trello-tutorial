import { UserButton, auth, currentUser } from "@clerk/nextjs";

const ProtectedPage = async () => {
  const user = await currentUser();
  const { userId } = auth();
  return (
    <div>
      Protected User: {user?.firstName} User Id : {userId}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
export default ProtectedPage;
