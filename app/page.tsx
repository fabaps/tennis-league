"use client";

import { BarChart, Calendar, CircleDot, Trophy, Users } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, ReactElement, useState } from "react";

import CountdownTimer from "@/components/CountdownTimer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { saveNewUser } from "@/services/user";
import { User } from "@/types/user";

export default function Home() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [data, setData] = useState<Pick<User, "name" | "email" | "phone">>({
    name: "",
    email: "",
    phone: "",
  });

  const scrollToSignup = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
  };

  const onChange =
    (name: keyof User) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setData((prev) => ({ ...prev, [name]: e.target.value }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await saveNewUser(data);

    router.push("/confirmacion");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gtl-logo-2DbYJyWQW4BNMMFKIWM5KvhMw0BNex.png"
              alt="GTL Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <span className="text-xl font-bold text-gray-800">GTL</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#features"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Características
                </a>
              </li>
              <li>
                <a href="#signup" className="text-gray-600 hover:text-gray-800">
                  Registro
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Únete a la Guatemala Tennis League (GTL)
            </h1>
            <p className="text-lg md:text-xl mb-4">
              Conecta, compite y disfruta del tenis como nunca antes
            </p>
            <p className="text-base md:text-lg mb-2">
              Lanzamiento de plataforma: 5 de marzo
            </p>
            <CountdownTimer targetDate="2025-03-05" />
            <Button
              className="bg-white text-green-500 hover:bg-gray-100 mt-6"
              onClick={scrollToSignup}
            >
              Comienza Gratis
            </Button>
          </div>
        </section>

        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Características Principales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              <FeatureCard
                icon={<Calendar className="h-12 w-12 text-green-500" />}
                title="Encuentro de Partidos"
                description="Encuentra oponentes de tu nivel y agenda partidos fácilmente."
              />
              <FeatureCard
                icon={<Trophy className="h-12 w-12 text-green-500" />}
                title="Torneos en Vivo"
                description="Sigue estadísticas y marcadores de torneos en tiempo real."
              />
              <FeatureCard
                icon={<Users className="h-12 w-12 text-green-500" />}
                title="Comunidad de Tenis"
                description="Conéctate con otros jugadores, visualiza sus estadísticas y comparte tu pasión por el tenis."
              />
              <FeatureCard
                icon={<CircleDot className="h-12 w-12 text-green-500" />}
                title="Reserva de Coaching"
                description="Agenda sesiones con entrenadores profesionales para mejorar tu juego."
              />
              <FeatureCard
                icon={<BarChart className="h-12 w-12 text-green-500" />}
                title="Ranking GTR"
                description="Sistema de ranking similar al UTR, exclusivo para la comunidad de Tenis Guatemala."
              />
            </div>
          </div>
        </section>

        <section id="signup" className="py-20 bg-white scroll-mt-20">
          <div className="container mx-auto px-4 max-w-md">
            <h2 className="text-3xl font-bold text-center mb-8">
              Regístrate ahora y obtén 3 meses gratis
            </h2>
            <p className="text-center mb-6">
              Al registrarte, tendrás acceso a 3 meses gratis de GTL a partir
              del lanzamiento el 5 de marzo.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Nombre completo"
                required
                onChange={onChange("name")}
                value={data.name}
              />
              <Input
                type="email"
                placeholder="Correo electrónico"
                required
                onChange={onChange("email")}
                value={data.email}
              />
              <Input
                type="tel"
                placeholder="Número de teléfono"
                required
                onChange={onChange("phone")}
                value={data.phone?.toString() || ""}
              />
              <Button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Registrarse"}
              </Button>
            </form>
            <p className="text-center text-sm text-gray-500 mt-4">
              Al registrarte, aceptas nuestros términos y condiciones.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            2025 Guatemala Tennis League (GTL). Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: ReactElement;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
