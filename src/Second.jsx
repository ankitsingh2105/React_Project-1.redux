import { useParams } from "react-router-dom";
export default function Second() {
  const { match } = useParams();
  return (
    <>
      <h1>This name is {match}</h1>
    </>
  );
}
