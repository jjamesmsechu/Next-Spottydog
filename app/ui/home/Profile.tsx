'use client'
import { useUserStore } from "@/app/service/store";

export function Profile() {
  const username = useUserStore((state) => state.username)
  const pfp = useUserStore((state) => state.pfp)
    return (
      <>
      <div className="h-4/6">
        <img
          src={pfp}
          alt=""
          className="size-20 rounded-full mx-auto"
        />
        <h1>{username}</h1>
        </div>
        <div className="h-1/5">
        </div>
      </>
    );
}
