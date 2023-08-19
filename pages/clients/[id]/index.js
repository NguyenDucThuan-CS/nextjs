import Link from "next/link";
import { useRouter } from "next/router";

function ClientsProjectPage() {
  const router = useRouter();

  function loadProjectHandler() {
    router.push({
      pathname: "/clients/[id]/[projectclientid]",
      query: {
        id: "max",
        projectclientid: "projecta",
      },
    });
  }
  return (
    <div>
      <h1>ClientsProjectPage</h1>
      <button onClick={loadProjectHandler}>Load project</button>
    </div>
  );
}

export default ClientsProjectPage;
