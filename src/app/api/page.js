import Convert from "@/components/convert";
import { Suspense } from "react";
import Loading from "@/app/loading";
export default function Api() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Convert />
      </Suspense>
    </div>
  );
}