import CardWrapper from "@/components/wrapper/CardWrapper.tsx";
import UserInfo from "@/components/reusable/UserInfo.tsx";
import { useAuth } from "@/store/authSlice.ts";

const Dashboard = () => {
  const { userInfo } = useAuth();

  return (
    <CardWrapper label={"🖥️ Dashboard"}>
      {/*user content*/}
      <UserInfo user={userInfo} />
    </CardWrapper>
  );
};
export default Dashboard;
