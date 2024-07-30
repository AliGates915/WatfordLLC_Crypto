import React from "react";
// import Button from ''
import Btn from "../../Common/Button";
import Image from 'next/image';
import "./styles.css";
import gradient from "../../../assets/gradient.png";
import iphone from "../../../assets/iphone.png";
import { motion } from "framer-motion";
import { RWebShare } from "react-web-share";
import { toast } from "react-toastify";

function MainComponent() {
  return (
    <div className="main-flex">
      <div className="info-landing ">
        <motion.h1
          className="heading1 font-bold"
          initial={{ opacity: 0, x: -50 ,rotateX:"0deg"}}
          animate={{ opacity: 1, x: 0 ,rotateX:"360deg"}}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Watford LLC
        </motion.h1>
        <motion.h1
          className="heading2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.75, duration: 1 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!{" "}
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.75 }}
        >
          <a href="/dashboard">
            <Btn text={"Dashboard"} outlined={true} />
          </a>
          <RWebShare
                data={{
                    text: "CryptoDashboard made by Watford LLC.",
                    url: "https://crypto-dashboard-jan.netlify.app",
                    title: "CryptoTracker."
                }}
                onClick={() => toast.info("App Shared!")}
                >
                <Btn text={"Share App"}  />
                </RWebShare>

        </motion.div>
      </div>
      <div className="gradient-div">
          <Image className="gradient" src={gradient} alt="gradient" />
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
          className="iphone"
        >
          <Image src={iphone} alt="iphone"  />
        </motion.div>
      </div>
    </div>
  );
}

export default MainComponent;