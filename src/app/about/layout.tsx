import React from "react";
import { Metadata } from "next";
import styles from "./styles.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "This is the about section",
};

const Aboutlayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
<>
<nav>
    About nav
</nav>
   <div className={styles.main}>
    {children}
    </div>
  </>
  )
  
 
};

export default Aboutlayout;
