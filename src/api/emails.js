// Function to handle form submission
const handleSubmit = async (event) => {
  event.preventDefault();
  setLoading(true);
  setErrorMessage("");
  setStatus(null);

  console.log("Form submitted with email:", email);

  try {
    const response = await fetch("https://minima-back-uni.vercel.app/api/emails", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email }),
});


    console.log("API response status:", response.status);

    if (!response.ok) {
      console.error("API response not ok:", response);
      if (response.status === 409) {
        setErrorMessage("Cet email est déjà inscrit");
      } else {
        setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
      }
      setStatus("error");
      return;
    }

    const data = await response.json();
    console.log("API response data:", data);
    setStatus("success");
    setEmail("");
  } catch (error) {
    console.error("API call failed:", error);
    setErrorMessage("Une erreur de connexion est survenue. Veuillez réessayer.");
    setStatus("error");
  } finally {
    setLoading(false);
    console.log("Form submission handling complete.");
  }
};

// Example usage in a component
return (
  <form onSubmit={handleSubmit}>
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Votre email"
      required
    />
    <button type="submit">S'inscrire</button>
    {status === "error" && <p className="error">{errorMessage}</p>}
    {status === "success" && <p className="success">Inscription réussie !</p>}
  </form>
);
