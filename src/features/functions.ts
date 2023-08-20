import { OpenAI } from "langchain/llms/openai";
import { LLMChain } from "langchain/chains";
import { PromptTemplate } from "langchain/prompts";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";

const llm = new OpenAI({
  openAIApiKey: "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",
  temperature: 0.9,
});

const prompt = PromptTemplate.fromTemplate(
  "What is a good name for a company that makes {product}?"
);

const chain = new LLMChain({
  llm,
  prompt,
});

export const getPrediction = async () => {
  const loader = new PDFLoader("src/documents/Calculus.pdf");

  const docs = await loader.load();

  let fullText = "";

  docs.map((doc) => {
    fullText = fullText + doc.pageContent.replace(/\n/g, " ");
  });

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 100,
  });

  const output = await splitter.createDocuments([fullText]);

  //   const result = await chain.run("colorful socks");

  return JSON.stringify(output);
};
