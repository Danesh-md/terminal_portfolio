import Tag from "../Tag";

const Notfound = () => {
  return (
    <div>
      <Tag showInputBox={false} />
      <div className="text-gray-300 mt-2 mb-2 ml-9 -translate-y-5">
        <h1 className="text-red-400 text-lg">Command not found</h1>
        <h1 className="text-lg">Try: ls</h1>
      </div>
    </div>
  );
};

export default Notfound;
