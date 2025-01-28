const handleSubmit = async (event) => {
  event.preventDefault();
  setLoading(true);
  setErrorMessage("");
  setStatus(null);

  try {
    const response = await fetch("https://minima-back-uni.vercel.app/api/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      if (response.status === 409) {
        setErrorMessage("Cet email est déjà inscrit");
      } else {
        setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
      }
      setStatus("error");
      return;
    }

    const data = await response.json();
    console.log("API response:", data);
    setStatus("success");
    setEmail("");
  } catch (error) {
    console.error("API call failed:", error);
    setErrorMessage("Une erreur de connexion est survenue. Veuillez réessayer.");
    setStatus("error");
  } finally {
    setLoading(false);
  }
};
