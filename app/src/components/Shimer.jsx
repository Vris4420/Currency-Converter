"use client";
import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { toast, Toaster } from "sonner";
import { ButtonsCard } from "./ShimerContent";

export function Shimer() {
  //   const copy = (button) => {
  //     if (button.code) {
  //       copyToClipboard(button.code);
  //       return;
  //     }
  //     let buttonString = reactElementToJSXString(button.component);

  //     if (buttonString) {
  //       const textToCopy = buttonString;
  //       copyToClipboard(textToCopy);
  //     }
  //   };

  //   const copyToClipboard = (text) => {
  //     navigator.clipboard
  //       .writeText(text)
  //       .then(() => {
  //         console.log("Text copied to clipboard:", text);
  //         toast.success("Copied to clipboard");
  //       })
  //       .catch((err) => {
  //         console.error("Error copying text to clipboard:", err);
  //         toast.error("Error copying to clipboard");
  //       });
  //   };

  const buttons = [
    {
      name: "Shimmer",
      description: "Shimmer button for your website",
      showDot: false,
      component: (
        <button className="inline-flex h-18 w-auto min-w-[600px] animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 py-2 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Get Exchange Rate
        </button>
      ),
      // code: (
      //   // Button code
      //   <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      //     Shimmer
      //   </button>
      // ),
      // md:grid-cols-2 lg:grid-cols-3
    },
  ];

  return (
    <div className=" min-w-[200px] ">
      <Toaster position="top-center" />
      <div className="grid   w-full  max-w-7xl mx-auto ">
        {buttons.map((button, idx) => (
          <ButtonsCard key={idx} onClick={() => (button)}>
            {button.component}
          </ButtonsCard>
        ))}
      </div>
    </div>
  );
}
