import { Suspense, useEffect } from "react";
import { Login } from "./ui/Login";



export default function Home() {
  return (
    <Suspense>
    <Login></Login>
    </Suspense>
  );
}
  