import "../index.css";
import { Balance } from "../components/Balance";
import { AppBar } from "../components/AppBar";
import { Users } from "../components/Users";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function Dashboard() {
  const [balance, setBalance] = useState(0);
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/account/balance", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setBalance(res.data.balance)
      });
  });

  return (
    <div>
      <AppBar name={name}/>
      <Balance value={balance} />
      <Users />
    </div>
  );
}
