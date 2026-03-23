import { Link } from "umi";
import { useSelector } from "react-redux";

export default function HomePage() {
  const { user } = useSelector((s: any) => s.auth);

  return (
    <>
      <div className="page-content bg-light">
        <h1>Home Page</h1>
      </div>
    </>
  );
}
