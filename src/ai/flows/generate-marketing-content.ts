'use server';
/**
 * @fileOverview A Genkit flow to generate various types of premium, brand-aligned marketing content
 *               for B Beyond Hair & Beauty Salon, including testimonials, offers, service descriptions,
 *               FAQs, and the 'About Us' narrative.
 *
 * - generateMarketingContent - A function that triggers the content generation process.
 * - GenerateMarketingContentInput - The input type for the generateMarketingContent function.
 * - GenerateMarketingContentOutput - The return type for the generateMarketingContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMarketingContentInputSchema = z.object({
  contentType: z.enum(['testimonial', 'offer', 'serviceDescription', 'faq', 'aboutUs']).describe('The type of marketing content to generate.'),
  salonName: z.string().describe('The name of the salon.'),
  location: z.string().describe('The location of the salon.'),
  brandPositioning: z.string().describe('A description of the salon\'s brand positioning.'),
  owners: z.array(z.object({
    name: z.string().describe('The name of the owner.'),
    role: z.string().describe('The role of the owner (e.g., Co-Owner).'),
  })).describe('An array of salon owners with their names and roles.'),
  tagline: z.string().describe('The salon\'s tagline.'),
  serviceName: z.string().optional().describe('Required if contentType is "serviceDescription". The name of the service.'),
  customerName: z.string().optional().describe('Required if contentType is "testimonial". The name of the customer.'),
  offerName: z.string().optional().describe('Required if contentType is "offer". The name of the offer.'),
  question: z.string().optional().describe('Required if contentType is "faq". The question for the FAQ.'),
});
export type GenerateMarketingContentInput = z.infer<typeof GenerateMarketingContentInputSchema>;

const GenerateMarketingContentOutputSchema = z.object({
  title: z.string().optional().describe('An optional title for the generated content.'),
  content: z.string().describe('The generated marketing content.'),
});
export type GenerateMarketingContentOutput = z.infer<typeof GenerateMarketingContentOutputSchema>;

export async function generateMarketingContent(input: GenerateMarketingContentInput): Promise<GenerateMarketingContentOutput> {
  return generateMarketingContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMarketingContentPrompt',
  input: {schema: GenerateMarketingContentInputSchema},
  output: {schema: GenerateMarketingContentOutputSchema},
  prompt: `You are an expert marketing content creator for a premium, futuristic, mobile-first PWA frontend website for a salon brand.
Your goal is to generate high-quality, brand-aligned placeholder content for "B Beyond Hair & Beauty Salon".

Brand Details:
Salon Name: {{{salonName}}}
Location: {{{location}}}
Brand Positioning: {{{brandPositioning}}}
Owners:
{{#each owners}}
  - {{{name}}} ({{{role}}})
{{/each}}
Tagline: {{{tagline}}}

The content should always reflect a luxurious, stylish, app-like, trustworthy, and high-converting tone, blending futuristic UI with trust, warmth, and luxury styling appeal.

Based on the content type "{{{contentType}}}", generate the appropriate content by following ONLY ONE of the sections below.

### INSTRUCTIONS FOR "testimonial" ###
Generate a realistic, warm, and premium customer testimonial from {{{customerName}}}. It should highlight a positive experience, style, and confidence gained from the salon. The title should be "Testimonial from {{{customerName}}}".

### INSTRUCTIONS FOR "offer" ###
Generate a stylish promotional offer for "{{{offerName}}}". Focus on luxury and value. Provide a short, catchy title and a descriptive paragraph about the offer.

### INSTRUCTIONS FOR "serviceDescription" ###
Generate a detailed and elegant service description for "{{{serviceName}}}". Describe the experience, benefits, and how it aligns with the salon's premium brand. Provide a concise title (the service name) and a descriptive paragraph.

### INSTRUCTIONS FOR "faq" ###
Answer the following FAQ: "{{{question}}}". The answer should be helpful, concise, and guide the user to call or WhatsApp for pricing or booking. The title should be the question itself.

### INSTRUCTIONS FOR "aboutUs" ###
Generate a premium local brand story for "B Beyond Hair & Beauty Salon" in Kudal, Sindhudurg. Mention owners Pranali Pingulkar and Gauresh Pingulkar by name. Use elegant wording about style, care, confidence, grooming, beauty transformation, and client experience. The title should be "Our Story" or "About Us".


Ensure the output is a valid JSON object matching the provided output schema:
title: An optional title for the generated content.
content: The generated marketing content.
`,
});

const generateMarketingContentFlow = ai.defineFlow(
  {
    name: 'generateMarketingContentFlow',
    inputSchema: GenerateMarketingContentInputSchema,
    outputSchema: GenerateMarketingContentOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
