async function testAPI() {
    const serverUrl = "http://localhost:3000";

    try {
        let response = await fetch(`${serverUrl}/roll-dice`);

        if (!response.ok) {
            throw new Error("API request failed");
        }

        let data = await response.json();

        document.getElementById("api-result").textContent = `API Response: ${JSON.stringify(data)}`;
    } catch (error) {
        document.getElementById("api-result").textContent = "Error testing API.";
        console.error("API Test Error:", error);
    }
}