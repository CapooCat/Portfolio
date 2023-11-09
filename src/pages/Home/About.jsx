import avatar from "../../assets/images/Avatar.jpg";
import Title from "../../components/UI/Title";
import Circle from "../../components/About/Circle";

const personal = [
  { title: "Full name:", info: "Tran Thai Dat" },
  { title: "Birthday:", info: "19/01/1999" },
  { title: "Email:", info: "tranthaitat99@gmail.com" },
  { title: "Phone number:", info: "+84777711670" },
  { title: "Address:", info: "District 5, Ho Chi Minh City" },
];

function About() {
  return (
    <section
      className="container m-10 mx-auto grid grid-cols-1 gap-5 lg:grid-cols-2"
      id="about"
    >
      <Title title="about" icon="user" />

      <ul className="order-2 rounded-xl border-[1px] border-gray-400/30 p-5 lg:order-1">
        <li className="break-words border-b-[1px] border-gray-400/30 pb-5 font-light tracking-wide">
          A Web Developer with over 2 years of experience with Javascript,
          ReactJS, Tailwind, and T-SQL. I'm proficient in working with ERP
          projects and have strong experience in building up a fully functional
          website from Figma design/wireframe. In addition, I'm also familiar
          with WebSocket and C# .NET Web API development.
        </li>
        {personal.map((item, index) => (
          <li
            className="my-5 grid grid-cols-1 gap-1 sm:grid-cols-2"
            key={index}
          >
            <label className="text-left font-medium">{item.title}</label>
            <span className="break-words text-left font-light sm:text-right">
              {item.info}
            </span>
          </li>
        ))}
      </ul>

      <div className="relative order-1 flex w-full items-center justify-center overflow-hidden py-10 sm:overflow-visible lg:order-2 lg:p-0">
        <Circle />
        <img
          src={avatar}
          className="absolute w-[50%] place-self-center rounded-full sm:max-w-[250px]"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default About;
