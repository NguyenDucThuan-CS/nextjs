import Link from "next/link";

function ClientsPage() {
  const clients = [
    {
      id: "Max",
      name: "Maximum",
    },
    {
      id: "Manu",
      name: "Manuel",
    },
  ];
  return (
    <div>
      <h1>The clients Pgae</h1>

      <ul>
        {clients.map((item) => {
          return (
            <li>
              <Link key={item.id} href={`/clients/${item.id}`}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ClientsPage;
