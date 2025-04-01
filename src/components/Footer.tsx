import React from "react";
import { Film } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";

export const Footer = () => {
  return (
    <div className="w-screen h-[280px] text-[#FAFAFA] bg-[#4338CA] p-10 flex justify-between">
      <div>
        <div className="flex items-center gap-2">
          <Film />
          <p className="italic text-base">Movie Z</p>
        </div>
        <p className="pt-3">© 2024 Movie Z. All Rights Reserved.</p>
      </div>
      <div className="w-[70%] flex justify-end gap-[120px]">
        <div>
          <h3>Contact information</h3>
          <div className="flex flex-col gap-6 ">
            <div className="flex items-center gap-3">
              <Mail />
              <div>
                <h2>Email:</h2>
                <h1>support@movieZ.com</h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone />
              <div>
                <h2>Phone: </h2>
                <h1>+976 (11) 123-4567</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2>Follow us</h2>
          <h1>Facebook Instagram Twitter Youtube</h1>
        </div>
      </div>
    </div>
  );
};
