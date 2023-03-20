import Navbar from "@/components/nav/Navbar";
import Container from "@/components/utility/Container";
import { useState } from "react";
export default function Profile() {
  const [userName, setUserName] = useState("Owain");
  return (
    <>
      <Container>
        <div className="prose mt-20">
          <h1>Welcome {userName}</h1>
          <h2>Your recent deals</h2>
          <h2>Regular locations</h2>
          <h2>Places we think you'll ❤️</h2>
        </div>
      </Container>
    </>
  );
}
