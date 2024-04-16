import { useEffect } from "react";
import { useUserStore } from "../stores/useUserStore";

export const User = () => {
  const { userData, isLoading, error, fetchUserData } = useUserStore();

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return userData ? (
    <div>
      <h2>User</h2>
      <p>
        Name: {userData.name.first} {userData.name.last}
      </p>
      <img src={userData.picture.medium} alt="User profile picture" />
    </div>
  ) : null;
};
