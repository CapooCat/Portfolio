import { motion } from "framer-motion";
import { useAnimationEffect } from "../../hooks/Animation";
import Title from "../../components/UI/Title";

function List() {
  const categories = [
    { type: "Frontend Framework", key: "fe" },
    { type: "Backend Framework", key: "be" },
    { type: "Development Tools", key: "tool" },
    { type: "IDE", key: "ide" },
    { type: "Icons Pack", key: "icon" },
    { type: "Font Resources", key: "font" },
    { type: "Design Inspiration", key: "design" },
    { type: "Hosting", key: "host" },
    { type: "Developer Communities", key: "dev" },
  ];

  const resources = [
    {
      title: "ReactJS",
      type: "fe",
      image: "",
      description:
        "ReactJS is a Javascript library made by Facebook that used to develop single page application",
    },
    {
      title: "Visual Studio Code",
      type: "ide",
      image: "",
      description:
        "Visual Studio Code is a free open-source code editor made by Microsoft",
    },
    {
      title: "ReactJS",
      type: "fe",
      image: "",
      description:
        "ReactJS is a Javascript library made by Facebook that used to develop single page application",
    },
    {
      title: "Visual Studio Code",
      type: "ide",
      image: "",
      description:
        "Visual Studio Code is a free open-source code editor made by Microsoft",
    },
    {
      title: "ReactJS",
      type: "fe",
      image: "",
      description:
        "ReactJS is a Javascript library made by Facebook that used to develop single page application",
    },
    {
      title: "Visual Studio Code",
      type: "ide",
      image: "",
      description:
        "Visual Studio Code is a free open-source code editor made by Microsoft",
    },
  ];

  return (
    <section
      className="container m-10 mx-auto grid grid-cols-1 gap-5 lg:grid-cols-4"
      id="about"
    >
      <Title title="about.title" icon="stack-2" />
      <div className="col-span-1 rounded-xl border-[1px] border-gray-400/30 p-5">
        <h1 className="mb-2 font-bold">Filter</h1>
        <ul>
          <li className="py-1">
            <input type="checkbox" value="all" /> All
          </li>

          {categories.map((item) => (
            <li key={item.key} className="py-1">
              <input type="checkbox" value={item.key} /> {item.type}
            </li>
          ))}
        </ul>
      </div>

      <div className="col-span-3 grid gap-5 lg:grid-cols-4">
        {resources.map((item, index) => (
          <a
            key={index}
            type={item.type}
            href="#"
            className="rounded-xl border-[1px] border-gray-400/30 p-5"
          >
            <h1 className="mb-2 font-bold">{item.title}</h1>
            <div>{item.description}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default List;
