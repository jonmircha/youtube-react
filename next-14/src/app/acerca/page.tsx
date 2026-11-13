import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Acerca",
  },
  description: "Estás en la sección de Acerca",
};

export default function Acerca() {
  return <h1>Acerca</h1>;
}
