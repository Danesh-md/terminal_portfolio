import Tag from "../Tag";

const ContactCommand = (props) => {
  const contacts = [
    {
      text: "Phone number",
      value: "+91 9363693799",
      href: "+91 9363693799",
    },
    {
      text: "Email",
      value: "daneshmd2235@gmail.com",
      href: "mailto:daneshmd2235@gmail.com",
    },
  ];
  return (
    <div>
      <Tag showInputBox={props.showInputBox && true} cmpname={"contact"} />
      <div className="w-11/12 mx-auto -translate-y-6">
        {contacts.map(({ text, value, href }, index) => {
          return (
            <div className="flex items-center gap-20  mt-3" key={index}>
              <h1 className="text-yellow-200 w-36 text-lg">{text}</h1>
              <a
                href={href}
                className="flex-1 text-lg underline text-blue-300 "
              >
                {value}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactCommand;
