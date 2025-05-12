import Convert from "@/components/convert";
import Nav from "@/components/nav";
import User from "@/app/user/page";
import Api from "@/app/api/page";
import { Suspense } from "react";
import Loading from "@/app/loading";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Nav />
        <User />
        {/* <Convert /> */}
        <Api />
      </Suspense>
    </div>
  );
}
