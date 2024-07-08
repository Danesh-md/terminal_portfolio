import Tag from "../Tag";

const Welcome = () => {
  return (
    <div>
      <div>
        <Tag showInputBox={false} cmpname={"welcome"} />
        <div>
          <h1 className="text-white ml-3 font-fascinate -translate-y-5 text-8xl font-bold uppercase">
            Welcome
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
