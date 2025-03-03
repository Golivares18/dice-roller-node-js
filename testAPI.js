async function testAPI() {
    const serverUrl = "https://dice-roller-node-js-go-b5c8c5b0hahkcrfx.centralus-01.azurewebsites.net/";

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