"use client";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleClick = () => {
    //router.push("/productos");
    router.push("/");
  };
  return (
    <>
      <h1>Iniciar Sesión</h1>
      <button onClick={handleClick}>Regresar al Home</button>
    </>
  );
}
