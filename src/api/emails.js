const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSubmitStatus(null);

    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/emails`, {
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