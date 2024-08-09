'use client'
import { useUserStore } from "@/app/service/store";

export function Profile() {
  const profilePicture = useUserStore((state) => state.profilePicture)
  const username  = useUserStore((state) => state.username)
    return (
      <>
      <div className="h-4/6">
        <img
          src={profilePicture}
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
  