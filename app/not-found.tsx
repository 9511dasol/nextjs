import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <div>
      <h1>not Found!</h1>
      <Navigation />
    </div>
  );
}
