import Link from "next/link";


export default function Home() {
  return (
    <>
    <Link href={"/page1"}>Page 1</Link>
    <Link href={"/page2"}>Page 2</Link>
    </>
  );
}
