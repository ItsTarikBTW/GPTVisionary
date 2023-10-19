"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { db } from "../../firebase";

type Props = {
  chatId: string;
};
function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (! prompt) return;
    const input = prompt.trim();
    setPrompt("");

    const message:Message = {
      text: input,
      timestamp: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name!}`,
      }
    };
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats", chatId, "messeges"), {
        message
    }
     );

     //! Toaster
  }

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm m-3">
      <form className="p-5 space-x-5 flex" onSubmit={sendMessage}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your message here ..."
          className="bg-transparent focus:outline-none flex-1  text-white
          disabled:cursor-not-allowed disabled:text-gray-400"
        />
        <button
          disabled={!prompt || !session}
          className="bg-[#11a37f] hover:opacity-50 text-white font-bold px-4 py-2
          rounded disabled:cursor-not-allowed disabled:bg-gray-400"
          type="submit"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
