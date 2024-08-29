import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section>
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-xl">
          🔐 Auth
        </h1>

        <p className="text-white text-xl">MERN Authentication Service</p>

        <Button
          onClick={() => navigate("/sign-in")}
          variant="secondary"
          size="lg"
        >
          Sign In
        </Button>
      </div>
    </section>
  );
}
