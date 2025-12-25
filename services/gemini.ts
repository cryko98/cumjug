
import { GoogleGenAI } from "@google/genai";

export const generateMeme = async (prompt: string): Promise<string | null> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    /**
     * MASTER PROMPT: Ez biztosítja, hogy a kancsó MINDIG pontosan ugyanúgy nézzen ki.
     * Leírjuk az anyagokat, a színeket és a formát az eredeti kép alapján.
     */
    const jugVisualIdentity = `
      MANDATORY VISUAL IDENTITY: 
      The image MUST feature the 'CUMJUG'. 
      - OBJECT: A specific transparent clear glass jug with a single thick handle on the side.
      - CAP: A bright, vibrant blue plastic screw-on cap on top.
      - CONTENT: The jug is 100% full with an opaque, thick, creamy, pure white liquid.
      - STYLE: Realistic, high-quality photography, sharp focus on the jug.
      - CONSISTENCY: The jug must look exactly like the reference image (transparent glass, blue lid, white liquid).
    `;

    const fullPrompt = `${jugVisualIdentity} 
      SCENARIO: Place this exact CUMJUG in the following scene: ${prompt}. 
      The CUMJUG must remain the central, unaltered focus of the image.`;

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

    const candidate = response.candidates?.[0];
    if (!candidate) return null;

    if (candidate.finishReason === 'SAFETY') {
      alert("The safety filter blocked this jug. Try a cleaner prompt!");
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
