import { getPrediction } from "@/features/functions";

// export default async function handler(
//   req: any,
//   res: {
//     status: (arg0: number) => {
//       (): any;
//       new (): any;
//       json: {
//         (arg0: { prediction?: string; error?: string }): void;
//         new (): any;
//       };
//     };
//   }
// ) {
//   try {
//     const prediction = await getPrediction();
//     res.status(200).json({ prediction });
//   } catch (error) {
//     res.status(500).json({ error: "An error occurred" });
//   }
// }

export async function GET(req: Request) {
  const result = await getPrediction();
  return new Response(result);
}
