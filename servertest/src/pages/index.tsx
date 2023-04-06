import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
// import fetch from "isomorphic-fetch";
// import getConfig from "next/config";
import { useEffect, useState } from "react";
// const { serverRuntimeConfig } = getConfig();
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [test, setTest] = useState();
  const getData = async () => {
    const result = await axios.get(`http://localhost:5000/api/data`);

    console.log("오픈");
    console.log(result);
  };
  const click = async () => {
    const result = (await axios.post(`http://localhost:5000/api/click`)).data;
    console.log(result);
    setTest(result.msg);
  };
  useEffect(() => {
    // console.log("오픈2", serverRuntimeConfig.expressServerUrl);
    getData();
  }, []);

  return (
    <>
      <button
        onClick={() => {
          click();
        }}
      >
        통신받아라!
      </button>
      {test ? test : "통신전"}
    </>
  );
}
