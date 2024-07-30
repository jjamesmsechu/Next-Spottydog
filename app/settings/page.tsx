'use client'
import { LeftBar } from "../ui/home/LeftBar";
import SettingsBar from "../ui/settings/SettingsBar";
import {useState } from "react";


export default function Home() {

  // Testing State
      const [username, setUsername] = useState('mario');
      const clickHandler = () => {
        setUsername('lol')
      }
  return (

    <>
    <LeftBar></LeftBar>
    <p onClick={clickHandler}>{username}</p>
    <SettingsBar></SettingsBar>
    </>
  );
}