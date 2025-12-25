
import { GoogleGenAI } from "@google/genai";

const REF_IMAGE_URL = "https://wkkeyyrknmnynlcefugq.supabase.co/storage/v1/object/public/wasd/Gemini_Generated_Image_fgj3y8fgj3y8fgj3.png";

/**
 * Fetches the reference image and converts it to base64 for the API.
 */
async function getReferenceImageBase64(): Promise<{ data: string; mimeType: string } | null> {
  try {
    const response = await fetch(REF_IMAGE_URL);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        const base64Data = result.split(',')[1];
        resolve({ data: base64Data, mimeType: blob.type });
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error("Error fetching reference image:", error);
    return null;
  }
}

export const generateMeme = async (prompt: string): Promise<string | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Get the actual image data to use as reference
    const refImageData = await getReferenceImageBase64();
    
    if (!refImageData) {
      console.error("Could not load reference image.");
      return null;
    }

    // We tell the model to use the image as the ONLY reference for the jug's appearance.
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: refImageData.data,
              mimeType: refImageData.mimeType,
            },
          },
          { 
            text: `Place the CUMJUG from this image into this exact scenario: ${prompt}. 
            Keep the CUMJUG's appearance (transparent glass, blue cap, thick white liquid) 100% identical to the one in the image. 
            Only change the background and the surroundings to match the requested scenario.` 
          }
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1"
        }
      }
    });

    const candidate = response.candidates?.[0];
    if (!candidate) return null;

    if (candidate.finishReason === 'SAFETY') {
      alert("A biztonsági szűrő megállította a generálást. Próbálj meg más leírást!");
      return null;
    }

    const parts = candidate.content?.parts;
    if (!parts) return null;

    for (const part of parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    
    return null;
  } catch (error: any) {
    console.error("Gemini Error:", error);
    return null;
  }
};
