const API_URL = "http://localhost:3000/api/auth";

document.getElementById("registerForm").addEventListener("submit",  async (e) =>{
    e.preventDefault();

    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    try {
        const res = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password })
        });

        const data = await res.json();
        document.getElementById("message").textContent = data.message || "Registro realizado com sucesso!";
    } catch (error){
        console.error(error);
    }
});


document.getElementById("loginForm").addEventListener("submit", async (e) =>{
    e.preventDefault();

    const email = document.getElementById("loginEmail").value; 
    const password = document.getElementById("loginPassword").value; 

    try {
        const res = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (res.ok) {
            document.getElementById("message").textContent = "Login realizado com sucesso!";
            localStorage.setItem("token", data.token);
            window.location.href="/admin";
        } else {
            document.getElementById("message").textContent = data.message || "Erro ao fazer login";
        }
    } catch (error) {
        console.error(error);
    }
});