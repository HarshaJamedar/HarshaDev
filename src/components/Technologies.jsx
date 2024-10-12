import { DiMysql } from "react-icons/di"
import { FaAws, FaDocker, FaNodeJs } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"

import { RiReactjsLine } from "react-icons/ri"
import { SiApachecassandra, SiApachehadoop, SiApachekafka, SiKubernetes, SiMongodb, SiPython, SiPytorch, SiSpring, SiTensorflow } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repat: Infinity,
            repeatType: "reverse",
        }
    }
})


const Technologies =  () => {
    return (
        <div className="pb-24">
            <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-20 text-center text-4xl">Technologies</motion.h2>

            <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)} 
                    className="p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(4)}
                    className="p-4">
                    <TbBrandNextjs className="text-7xl" />
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(6)}
                    className="p-4">
                    <SiMongodb className="text-7xl text-green-400"></SiMongodb>
                </motion.div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className="p-4">
                    <FaNodeJs className="text-7xl text-green-600"></FaNodeJs>
                </motion.div>
                <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(4)}
                 className="p-4">
                    <SiSpring className="text-7xl text-green-400"></SiSpring>
                </motion.div>
                <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(6)}
                 className="p-4">
                    <DiMysql className="text-7xl"></DiMysql>
                </motion.div>
                <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}
                 className="p-4">
                    <FaAws className="text-7xl"></FaAws>
                </motion.div>
                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(4)}
                className="p-4">
                    <FaDocker className="text-7xl text-blue-500"></FaDocker>
                </motion.div>
                <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(6)}
                 className="p-4">
                    <FaGithub className="text-7xl"></FaGithub>
                </motion.div>
                <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}
                 className="p-4">
                    <SiKubernetes className="text-7xl text-blue-700"></SiKubernetes>
                </motion.div>
                <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(4)}
                className="p-4">
                    <SiTensorflow className="text-7xl text-orange-400"></SiTensorflow>
                </motion.div>
                <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(6)}
                className="p-4"> 
                    <SiPytorch className="text-7xl text-red-500"></SiPytorch>
                </motion.div>
                <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}
                className="p-4">
                    <SiPython className="text-7xl"></SiPython>
                </motion.div>
                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(4)}
                className="p-4">
                    <SiApachehadoop className="text-7xl"></SiApachehadoop>
                </motion.div>
                <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(6)}
                 className="p-4">
                    <SiApachecassandra className="text-7xl text-blue-300"></SiApachecassandra>
                </motion.div>
                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}
                className="p-4">
                    <SiApachekafka className="text-7xl"></SiApachekafka>
                </motion.div>
                
            </motion.div>

        </div>
    )
}
export default Technologies