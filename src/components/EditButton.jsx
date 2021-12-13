import { useContext } from "react";
import { AdminFlagContext } from "./providers/AdminFlagProvider";

export const EditButton = (props) => {
  const { isAdmin } = useContext(AdminFlagContext);
  const contextValue = useContext(AdminFlagContext);
  console.log(contextValue);

  return <button disabled={!isAdmin}>編集</button>;
};
