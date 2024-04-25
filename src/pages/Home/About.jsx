import avatar from "../../assets/images/Avatar.jpg";
import Title from "../../components/UI/Title";
import Circle from "../../components/About/Circle";
import { useTranslation } from "react-i18next";

function About() {
  const { t, i18n } = useTranslation();

  const personal = [
    { title: t("about.fullname"), info: "Tran Thai Dat" },
    { title: t("about.birthday"), info: "19/01/1999" },
    { title: t("about.email"), info: "tranthaitat99@gmail.com" },
    { title: t("about.phone"), info: "+84777711670" },
    { title: t("about.location"), info: "District 5, Ho Chi Minh City" },
  ];

  return (
    <section
      className="container m-10 mx-auto grid grid-cols-1 gap-5 lg:grid-cols-2"
      id="about"
    >
      <Title title="about.title" icon="user" />

      <ul className="order-2 rounded-xl border-[1px] border-gray-400/30 p-5 lg:order-1">
        <li className="break-words border-b-[1px] border-gray-400/30 pb-5 font-light tracking-wide">
          A Frontend Developer with 3 years of experience with Javascript,
          Tailwind, and T-SQL, coupled with 2 years of expertise in ReactJS.
          Proficient in working with ERP projects and have strong expertise in
          constructing fully functional websites from Figma design/wireframe. In
          addition, I'm also familiar with WebSocket and .NET Web API
          development.
        </li>
        {personal.map((item, index) => (
          <li
            className="my-5 grid grid-cols-1 gap-1 sm:grid-cols-2"
            key={index}
          >
            <label className="text-left font-medium">{item.title}:</label>
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
