async function testAPI() {
    const serverUrl = window.location.origin;

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