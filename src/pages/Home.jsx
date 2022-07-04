import React from 'react'
import Veggie from '../components/Dessert'
import Popular from '../components/Popular'
import {motion} from 'framer-motion/dist/es/index'


const Home = () => {
  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}>
      <Veggie/>
      <Popular/>
    </motion.div>
  )
}

export default Home
