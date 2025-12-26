
/**
 * Generates a meme image URL using Puter.js (js.puter.com).
 * We append the brand description to ensure the jug remains consistent.
 */
export const generateMemeImage = async (
  userPrompt: string
): Promise<string> => {
  const brandDescription = "A clear 5-gallon water cooler jug with a blue handle and blue cap, filled with thick white liquid, realistic, cinematic lighting, 8k, professional photography, high resolution.";
  const fullPrompt = `${userPrompt}, featuring ${brandDescription}`;
  
  // Check if Puter is available on the window object
  const puter = (window as any).puter;
  if (!puter) {
    throw new Error("Puter SDK not loaded correctly.");
  }

  try {
    // puter.ai.txt2img returns an HTMLImageElement
    const imgElement = await puter.ai.txt2img(fullPrompt);
    return imgElement.src;
  } catch (error) {
    console.error("Puter generation error:", error);
    throw new Error("The jug generation failed. Please try again.");
  }
};

export const randomMemePrompts = [
  "Elon Musk triumphantly holding the branded 5-gallon jug on a stage at a tech keynote",
  "Donald Trump pointing at the branded 5-gallon jug during a rally with a serious face",
  "Joe Rogan sitting in his studio with the branded 5-gallon jug on the desk",
  "A realistic Viking warrior protecting the 5-gallon jug during a storm",
  "An astronaut floating in the ISS with the jug drifting in zero gravity",
  "A secret agent in a sharp suit running through a city while carrying the 5-gallon jug",
  "A hyper-realistic golden retriever sitting next to the 5-gallon jug on a porch",
  "A high-end luxury fashion model posing with the jug for a magazine cover",
  "The jug sitting on the center of a high-stakes poker table in a dark casino",
  "A cyberpunk hacker surrounded by screens with the 5-gallon jug plugged into a computer"
];
