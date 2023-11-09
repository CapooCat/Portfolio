import Icon from "../../components/UI/Icon";
import Logo from "../../components/UI/Logo";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const contact = [
  { title: "Phone:", info: "(+84) 777711670" },
  { title: "Email:", info: "tranthaitat99@gmail.com" },
  { title: "Address:", info: "District 5, Ward 7, Ho Chi Minh city" },
];

const link = [
  { title: "Gallery", href: "/gallery" },
  { title: "Resources", href: "/resources" },
];

const profile = [
  {
    platIcon: "brand-facebook",
    color: "bg-blue-500",
    href: "https://www.facebook.com/Anticard99/",
  },
  {
    platIcon: "brand-linkedin",
    color: "bg-blue-700",
    href: "https://www.linkedin.com/in/tran-dat-185284198/",
  },
  {
    platIcon: "brand-leetcode",
    color: "bg-yellow-500",
    href: "https://leetcode.com/tranthaitat99/",
  },
];

function Footer() {
  return (
    <footer className="flex max-h-full min-h-[500px] w-full flex-wrap content-between bg-gradient-to-b from-transparent from-0% to-gray-200 to-100% dark:to-primary-dark">
      <div className="container mx-auto grid h-full w-full gap-16 py-12 sm:grid-cols-1 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
        <div className="box-border block content-start gap-2 font-light">
          <Logo />
          <p className="mt-4 font-medium">
            Simplicity is the soul of efficiency
          </p>
          <p>- Austin Freeman -</p>
        </div>

        <div className="box-border flex flex-wrap content-start gap-2">
          <span className="basis-full pb-2 text-xl font-medium">Contact</span>
          <ul className="flex basis-full flex-wrap gap-4 font-light">
            {contact.map((item, index) => (
              <li className="basis-full" key={index}>
                <span className="block font-normal">{item.title}</span>
                {item.info}
              </li>
            ))}

            <li className="flex flex-wrap gap-2 py-2">
              <span className="block basis-full font-normal">
                Social & Profile:
              </span>
              {profile.map((item, index) => (
                <motion.a
                  href={item.href}
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  key={index}
                >
                  <Icon
                    icon={item.platIcon}
                    key={index}
                    size={18}
                    className={`${item.color} h-12 w-12 rounded-xl p-2 text-white`}
                  />
                </motion.a>
              ))}
            </li>
          </ul>
        </div>

        <div className="box-border flex flex-wrap content-start gap-2">
          <span className="basis-full pb-2 text-xl font-medium">Link</span>
          <ul className="flex basis-full flex-wrap gap-4 font-light">
            {link.map((item, index) => (
              <li className="basis-full" key={index}>
                <Link
                  to={item.href || "#"}
                  className="link-hover after:bg-main relative flex h-full w-fit items-center pb-1 text-center"
                >
                  <Icon icon={item.icon} size={18} className="mr-1" />
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex min-h-[60px] w-full items-center justify-center bg-gray-400/5 p-2 text-center">
        <div className="font-light">
          This website is originally design and made by
          <span className="bg-main bg-clip-text pl-1 font-medium text-transparent">
            Tran Thai Dat
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
