import { motion } from "framer-motion";
import { useAnimationEffect } from "../../hooks/Animation";
import Icon from "../UI/Icon";

function Loading() {
    const loading = useAnimationEffect('spin');
    const fadeIn = useAnimationEffect('fadeIn');

    return (
        <motion.div initial={fadeIn.hidden} animate={fadeIn.animate} className="absolute inset flex justify-center items-center">
            <Icon icon="device-desktop-code" className="absolute text-primary" size={24}/>
            <motion.div className="rounded-full border-4 border-primary/20 w-24 h-24 border-l-primary" animate={loading.animate} />
        </motion.div>
    )
}
  
export default Loading;
  