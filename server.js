import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import OpenAI from "openai";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(cors());
app.use(express.json());

app.post("/summarize", async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "No text provided." });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      max_tokens: 50,
      messages: [
        {
          role: "system",
          content:
            "Summarize the text in one simple sentence using Fortnite terms. Replace proper nouns with Fortnite-style alliterations and replace nouns with Fortnite items.",
        },
        {
          role: "user",
          content: text,
        },
      ],
    });

    const summary = completion.choices[0]?.message?.content || "No summary.";
    res.json({ summary });
  } catch (error) {
    console.error("OpenAI error:", error);
    res.status(500).json({ error: "Failed to generate summary." });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
