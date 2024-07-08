import Tag from "../Tag";

const LsCommand = (props) => {
  return (
    <div>
      <div>
        <Tag showInputBox={props.showInputBox && true} cmpname={"ls"} />
      </div>
      <div className="ml-12 -translate-y-4" style={{ width: "55%" }}>
        <div className="flex mb-2">
          <h1 className="text-color3 font-sans tracking-wider font-semibold text-lg mr-40">
            bio
          </h1>
          <h1 className="text-white font-sans tracking-wider font-semibold text-lg">
            Show my bio information.
          </h1>
        </div>
        <div className="flex mb-2">
          <h1
            className="text-color3 tracking-wider font-semibold text-lg"
            style={{ marginRight: "153px" }}
          >
            skill
          </h1>
          <h1 className="text-white tracking-wider font-semibold text-lg">
            List of my all skills.
          </h1>
        </div>
        <div className="flex mb-2">
          <h1
            className="text-color3 tracking-wider font-semibold text-lg"
            style={{ marginRight: "123px" }}
          >
            contact
          </h1>
          <h1 className="text-white tracking-wider font-semibold text-lg">
            List of all the contacts.
          </h1>
        </div>
        <div className="flex mb-2">
          <h1
            className="text-color3 tracking-wider font-semibold text-lg"
            style={{ marginRight: "138px" }}
          >
            about
          </h1>
          <h1 className="text-white tracking-wider font-semibold text-lg">
            To see what is terminal portfolio.
          </h1>
        </div>
        <div className="flex mb-2">
          <h1
            className="text-color3 tracking-wider font-semibold text-lg"
            style={{ marginRight: "118px" }}
          >
            projects
          </h1>
          <h1 className="text-white tracking-wider font-semibold text-lg">
            To see my previous projects.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LsCommand;
