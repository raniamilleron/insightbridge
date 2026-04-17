export default async function handler(req, res) {
  res.status(200).json({ key: process.env.ANTHROPIC_API_KEY });
}
