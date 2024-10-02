import Link from "next/link";


export default function Home() {
  return (
    <>
    <Link href={"/explanation"}>Explanation</Link>
    <Link href={"/team"}>Team</Link>
    </>
  );
}
