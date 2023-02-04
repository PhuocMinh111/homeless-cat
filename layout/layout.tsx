import React from "react";
import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
const LayOut = ({ children }: any) => {
  return (
    <div>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default LayOut;
