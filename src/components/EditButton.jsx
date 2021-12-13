export const EditButton = (props) => {
  const { isAdmin } = props;
  return <button disabled={!isAdmin}>編集</button>;
};
