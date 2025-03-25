const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;

// Function to query DeepSeek API
export const getTrackDaysFromDeepSeek = async (query) => {
  try {
    const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${DEEPSEEK_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "deepseek-chat",  // Use the latest available model
        messages: [
          { role: "system", content: "You are a helpful assistant that finds real-world events." },
          {
            role: "user", content: `${query}
                        Include the following details:
                        - Event Name
                        - Event Date
                        - Event Location
                        - Specific Requirements (if applicable)
                        - Cost of Event (if available)

                        Format the results in a numbered list.`
          }
        ],
        max_tokens: 1500,
        temperature: 1.0
      })
    });

    const data = await response.json();

    // Print the formatted track day results
    console.log("\nTrack Day Results from DeepSeek:\n");
    console.log(data.choices[0].message.content);
    return data.choices[0].message.content;

  } catch (error) {
    console.error("Error calling DeepSeek:", error.message);
  }
};
