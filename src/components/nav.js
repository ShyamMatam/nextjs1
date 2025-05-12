import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold mx-4">Nav</h1>
      <div className="flex justify-between items-center gap-5 p-3">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Image src="/Pictorial.png" alt="logo" width={100} height={100} />
      </div>
    </div>
  );
}

