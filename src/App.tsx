import React, { useState } from "react";
import {
  MailCheck,
  ArrowRight,
  Calendar,
  Calculator,
  ClipboardCheck,
  Shield,
} from "lucide-react";
import logo from "./image/Logo.png";
import test from "./image/homme.png";
import testt from "./image/homme (1).png";
import testtt from "./image/personne (1).png";
import home from "./image/pagehome.png";

// Types
interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

// Composants réutilisables
const Button = ({ onClick, children, disabled = false, fullWidth = true, variant = "primary" }) => {
  const baseClasses = `py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2 group ${
    fullWidth ? 'w-full' : ''
  }`;
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200",
    outline: `border border-white text-white ${!disabled && "hover:bg-white hover:text-black"}`,
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`border border-white/20 rounded-2xl p-8 hover:border-white/40 transition-all duration-300 ${className}`}>
    {children}
  </div>
);

// Sections Components
const NewsletterSection = ({ email, setEmail, handleSubmit, isSubmitting, submitStatus, errorMessage }) => (
  <section className="py-24 px-4 flex flex-col items-center text-center">
    <Card className="w-full max-w-md backdrop-blur-sm mb-40">
      <div className="flex flex-col items-center text-center mb-14 mt-44">
        <img src={logo} alt="Logo" className="h-48 w-48" />
      </div>
      <h2 className="text-2xl font-bold text-white mb-6">Minima</h2>

      {submitStatus === "error" && (
        <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-500 text-sm">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-1 mt-12 text-left">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-2 px-4 py-2 bg-transparent border border-white/20 rounded-lg text-white focus:border-white focus:outline-none"
            required
            disabled={isSubmitting}
            placeholder="Votre email"
          />
        </div>
        <Button variant="outline" disabled={isSubmitting}>
          {isSubmitting ? "Chargement..." : "S'inscrire"}
        </Button>
      </form>

      {submitStatus === "success" && (
        <div className="flex items-center justify-center gap-2 mt-4 text-green-400">
          <MailCheck className="w-4 h-4" />
          <span>Inscription réussie !</span>
        </div>
      )}
    </Card>
  </section>
);

const PricingSection = ({ features, scrollToTop }) => (
  <section className="py-24 px-4 bg-black/50">
    <div className="container mx-auto max-w-md">
      <Card>
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-2">Plan Unique</h3>
          <div className="text-9xl mt-20 font-bold mb-6">
            1.95€<span className="text-xl text-gray-400">/mois</span>
          </div>

          <ul className="text-left space-y-4 mb-8 mt-20">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                {feature.icon}
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>

          <Button onClick={scrollToTop}>
            Commencer
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Card>
    </div>
  </section>
);

const TransformationSection = () => (
  <section className="py-24 px-4">
    <div className="container mx-auto max-w-4xl text-white">
      <h3 className="text-6xl font-semi-bold mb-24 text-center">
        Transformez le chaos...
      </h3>
      <div className="flex justify-center space-x-64">
        {[
          {
            img: test,
            title: "Désordonné",
            description: "Aucun cadre, aucune structure... Vous avez du mal à vous organiser ?",
          },
          {
            img: testt,
            title: "Débordé",
            description: "Deadlines, tâches, notes, listes en tout genre… Vous n'arrivez plus à tout retenir ?",
          },
          {
            img: testtt,
            title: "Éparpillé",
            description: "Posts-it, carnets, applications, logiciels... Vous auriez besoin de tout regrouper ?",
          },
        ].map((item, index) => (
          <div key={index} className="text-center">
            <img src={item.img} alt={item.title} className="w-40 h-40 mx-auto mb-2" />
            <h4 className="text-3xl font-semi-bold text-white">{item.title}</h4>
            <p className="text-gray-300 w-96">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ClaritySection = ({ scrollToTop }) => (
  <section className="py-24 px-4 overflow-hidden mt-36">
    <div className="container mx-auto max-w-7xl flex items-center">
      <div className="w-1/3 text-white pr-8">
        <h3 className="text-4xl font-bold mb-6">... en clarté.</h3>
        <p className="text-gray-300 mb-6 text-lg">
          Organisez tout, au même endroit. Plus besoin de jongler entre les différentes applications.
        </p>
        <Button onClick={scrollToTop}>
          Commencer
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
      <div className="w-2/3 flex justify-right">
        <img
          src={home}
          alt="Illustration"
          className="h-[1100px] w-auto max-w-none rounded-lg shadow-xl"
        />
      </div>
    </div>
  </section>
);

const FinalSection = ({ scrollToTop }) => (
  <section className="py-24 px-4">
    <div className="container mx-auto max-w-4xl text-white text-center flex flex-col items-center">
      <h3 className="text-4xl font-bold mt-12">16 sections. 1 seule application.</h3>
      <p className="text-gray-300 my-6 text-lg">
        Synchronisées et accessibles sur tous vos appareils.
      </p>
      <div className="w-96">
        <Button onClick={scrollToTop}>
          Commencer
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  </section>
);

// Main App Component
function App() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const features = [
    {
      icon: <Calendar className="w-5 h-5" />,
      text: "Page auto-entreprise complète (gestion des ventes, stocks et produits)",
    },
    {
      icon: <Calculator className="w-5 h-5" />,
      text: "Comptabilité simplifiée",
    },
    {
      icon: <ClipboardCheck className="w-5 h-5" />,
      text: "Agenda et to-do liste pour un suivi personnel",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Sécurité de niveau entreprise",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSubmitStatus(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/emails`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        setErrorMessage(
          response.status === 409
            ? "Cet email est déjà inscrit"
            : "Une erreur est survenue. Veuillez réessayer."
        );
        setSubmitStatus("error");
        return;
      }

      setSubmitStatus("success");
      setEmail("");
    } catch (error) {
      console.error("API call failed", error);
      setErrorMessage("Une erreur de connexion est survenue. Veuillez réessayer.");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <NewsletterSection
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        submitStatus={submitStatus}
        errorMessage={errorMessage}
      />
      <PricingSection features={features} scrollToTop={scrollToTop} />
      <TransformationSection />
      <ClaritySection scrollToTop={scrollToTop} />
      <FinalSection scrollToTop={scrollToTop} />
    </div>
  );
}

export default App;
