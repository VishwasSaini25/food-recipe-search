import Veggie from "../Components/Veggie";
import Popular from "../Components/Popular";
import { motion } from "framer-motion"; 
import Search from "../Components/Search";
import Category from "../Components/Category";
import "../index.css";
import Navbar from "./Nav";
function Home() {
  
  return (
    <div>
      <Navbar />
      <Search />
      <Category />
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      >
      <Popular />
      <Veggie />
    </motion.div>
    </div>
  );
}

export default Home;