import NewChat from "./NewChat";

function SideBar() {
  return (
    <div className="flex h-screen flex-col p-2">
      <div className="flex-1">
        {/* new chat */}
        <NewChat />
        <div className="">{/* select model */}</div>
        {/* map chat history */}
      </div>
    </div>
  );
}

export default SideBar;
