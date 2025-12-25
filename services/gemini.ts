
import { GoogleGenAI } from "@google/genai";

export const generateMeme = async (prompt: string): Promise<string | null> => {
  try {
    // Create a new instance right before the call to ensure the latest API key is used
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Detailed prompt to ensure consistency with the CUMJUG theme
    const fullPrompt = `Realistic high-quality photograph of ${prompt}, featuring a transparent glass jug with a blue cap filled with a thick, white, creamy liquid. The image should look like the official CUMJUG mascot.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { text: fullPrompt }
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1"
        }
      }
    });

    // Safely check for the presence of candidates and content parts
    const candidate = response.candidates?.[0];
    
    if (!candidate) {
      console.error("No candidates returned from Gemini API.");
      return null;
    }

    if (candidate.finishReason === 'SAFETY') {
      console.warn("Generation blocked by safety filters.");
      alert("The jug couldn't be filled due to safety filters. Try a different prompt!");
      return null;
    }

    const parts = candidate.content?.parts;
    if (!parts) {
      console.error("Response candidate has no content parts:", candidate);
      return null;
    }

    // Find the image part among the returned parts
    for (const part of parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    
    console.warn("No inlineData (image) found in the response parts.");
    return null;
  } catch (error: any) {
    console.error("Gemini Error:", error);
    
    // Handle the specific error mentioned in the rules for API keys
    if (error.message?.includes("Requested entity was not found")) {
      alert("API Key issue detected. Please refresh or check your project settings.");
    }
    
    return null;
  }
};
