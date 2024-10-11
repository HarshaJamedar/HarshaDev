import { DiMysql } from "react-icons/di"
import { FaAws, FaDocker, FaNodeJs } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"

import { RiReactjsLine } from "react-icons/ri"
import { SiApachecassandra, SiApachehadoop, SiApachekafka, SiKubernetes, SiMongodb, SiPython, SiPytorch, SiSpring, SiTensorflow } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"


const Technologies =  () => {
    return (
        <div className="pb-24">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
                </div>
                <div className="p-4">
                    <TbBrandNextjs className="text-7xl"></TbBrandNextjs>
                </div>
                <div className="p-4">
                    <SiMongodb className="text-7xl text-green-400"></SiMongodb>
                </div>
                <div className="p-4">
                    <FaNodeJs className="text-7xl text-green-600"></FaNodeJs>
                </div>
                <div className="p-4">
                    <SiSpring className="text-7xl text-green-400"></SiSpring>
                </div>
                <div className="p-4">
                    <DiMysql className="text-7xl"></DiMysql>
                </div>
                <div className="p-4">
                    <FaAws className="text-7xl"></FaAws>
                </div>
                <div className="p-4">
                    <FaDocker className="text-7xl text-blue-500"></FaDocker>
                </div>
                <div className="p-4">
                    <FaGithub className="text-7xl"></FaGithub>
                </div>
                <div className="p-4">
                    <SiKubernetes className="text-7xl text-blue-700"></SiKubernetes>
                </div>
                <div className="p-4">
                    <SiTensorflow className="text-7xl text-orange-400"></SiTensorflow>
                </div>
                <div className="p-4"> 
                    <SiPytorch className="text-7xl text-red-500"></SiPytorch>
                </div>
                <div className="p-4">
                    <SiPython className="text-7xl"></SiPython>
                </div>
                <div className="p-4">
                    <SiApachehadoop className="text-7xl"></SiApachehadoop>
                </div>
                <div className="p-4">
                    <SiApachecassandra className="text-7xl text-blue-300"></SiApachecassandra>
                </div>
                <div className="p-4">
                    <SiApachekafka className="text-7xl"></SiApachekafka>
                </div>
                
            </div>

        </div>
    )
}
export default Technologies