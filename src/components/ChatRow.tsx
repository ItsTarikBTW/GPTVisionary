import { ChatBubbleBottomCenterIcon, TrashIcon } from "@heroicons/react/24/outline";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";

type Props = {
    id: string;
};
function ChatRow({ id }: Props) {
    const pathName = usePathname();
    const router = useRouter();
    const { data: session } = useSession();
    const [active, setActive] = useState(false);

    const [messeges, loading, error] = useCollection(
        session &&
        collection(db, "users", session?.user?.email!, "chats", id, "messeges")


    );

    useEffect(() => {
        if (!pathName) return;

        setActive(pathName.includes(id));
    }, [id, pathName]);

    const removeChat = async () => {
        await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));
        router.push("/");
    }

    return (
        <Link
            href={`/chat/${id}`}
            className={`my-1 flex items-center justify-between chatRow ${active && "bg-gray-700/50"} `}
        >
            <ChatBubbleBottomCenterIcon className="h-5 w-5" />
            <p
                className="flex-1 hidden md:inline-flex truncate"
            >
                {
                    messeges?.docs[messeges?.docs.length - 1]?.data().message || "empty"
                }
            </p>
            <TrashIcon onClick={removeChat} className="h-5 w-5 text-gray-600 hover:text-red-600" />
        </Link>
    )
}

export default ChatRow