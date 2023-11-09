import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAnimationEffect } from "../../hooks/Animation";

import Title from "../../components/UI/Title";
import Image from "../../components/Gallery/Image";

function Gallery() {
  const parent = useAnimationEffect("slideUp", { stagger: true });
  const images = Object.values(
    import.meta.glob("../../assets/images/*.{png,jpg,jpeg,PNG,JPEG}", {
      eager: true,
      as: "url",
    }),
  );

  return (
    <section
      className="container relative m-10 mx-auto grid grid-cols-1 gap-5 overflow-hidden"
      id="gallery"
    >
      <Title title="gallery" icon="photo-hexagon" />

      <motion.div
        variants={parent}
        viewport={{ once: true, margin: "0px 0px -20%" }}
        initial="hidden"
        whileInView="animate"
        className="columns-2 xl:columns-3"
      >
        {images.map((item, index) => {
          return index < 5 ? <Image url={item} key={index} /> : null;
        })}
      </motion.div>

      <Link
        to="./Gallery"
        className="absolute bottom-0 z-10 flex h-[80px] w-full items-center justify-center bg-gradient-to-b from-transparent to-white text-xl dark:to-primary-dark"
      >
        <div className="h-fit w-fit rounded-xl bg-white px-3 py-2 shadow-lg dark:bg-primary-dark">
          <span className="bg-main bg-clip-text text-transparent">
            More coming soon...
          </span>
        </div>
      </Link>
    </section>
  );
}

export default Gallery;
