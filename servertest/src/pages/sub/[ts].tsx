import { useRouter } from "next/router";

export default function SubIndex() {
  const router = useRouter();
  console.log(router);
  const id = Number(router.query.as);
  return (
    <>
      <h1>parameter id : {id}</h1> <h1>/pages/sub/index.tsx</h1>{" "}
      <a href="/">/pages/index.tsx</a>
    </>
  );
}
