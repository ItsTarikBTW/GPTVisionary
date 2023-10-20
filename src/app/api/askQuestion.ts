import queryApi from "@/lib/queryApi";
import firebase from "firebase/compat/app";
import { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";
import { adminDb } from "../../../firebaseAdmin";
type Data = {
  answer: string;
};

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { prompt, chatId, model, session } = req.body;

  if (!chatId) {
    res.status(400).json({ error: "Missing chatId" });
    return;
  }

  const response = await queryApi(prompt, chatId, model);

  const message: Message = {
    text: response || "Sorry, I don't know what to say.",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "Visionary",
      name: "Visionary",
      avatar: "https://ui-avatars.com/api/?name=visionary",
    },
  };

  await (
    await adminDb
      .collection("users")
      .doc(session?.user?.email)
      .collection("chats")
      .add(chatId)
  )
    .collection("messages")
    .add(message).catch((err) => console.log(err));

  res.status(200).json({ answer: message.text });
}
export { handler as GET, handler as POST };