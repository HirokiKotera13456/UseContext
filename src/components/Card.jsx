import { EditButton } from "./EditButton";

export const Card = (props) => {
  const { isAdmin } = props;

  return (
    <div>
      <p>山田太郎</p>
      <EditButton isAdmin={isAdmin} />
    </div>
  );
};
