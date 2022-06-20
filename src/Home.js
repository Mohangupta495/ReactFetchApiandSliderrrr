import { useEffect, useState } from "react";
import { Provid } from "./componants/Context";
import UserPage from "./UserPage";
import User from "./User";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  console.log(data.data);
  const LoadData = async () => {
    setLoading(true);
    const respone = await axios.get("https://dummyjson.com/users");
    setData(respone.data.users);
    setLoading(false);
  };
  console.log(data);
  useEffect(() => {
    LoadData();
  }, []);

  return (
    <>
      <div className="userShlider">
        <UserPage data={data} />
      </div>
      <div className="userDetails">
        {data.map((data) => {
          return <User data={data} />;
        })}
      </div>
    </>
  );
};
export default Home;
