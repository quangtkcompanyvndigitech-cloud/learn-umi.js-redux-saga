import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { Outlet } from "umi";

export default function () {

  return (
    <>
      <Outlet />
    </>
  )
}

