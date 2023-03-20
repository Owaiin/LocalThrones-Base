import Navbar from "@/components/nav/Navbar";
import Container from "@/components/utility/Container";
import { useState } from "react";
import { useSession } from "next-auth/react";
export default function Profile() {
  const [userName, setUserName] = useState("Owain");
  const session = useSession();
  const user = session.data?.user;
  return (
    <>
      <Navbar />
      <Container>
        <div className="prose mt-20">
          <h1>Welcome {user?.name}</h1>
          <h2>Your recent deals</h2>
          <h2>Regular locations</h2>
          <h2>Places we think you'll ❤️</h2>
        </div>
      </Container>
    </>
  );
}
