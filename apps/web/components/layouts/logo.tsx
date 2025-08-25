import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <Link href="/" className="cursor-pointer inline-block shrink-0">
        <Image
          src="https://r2.sundarclinic.com/logos/logo-fit.png"
          alt="Sundar Clinic Logo"
          width={150}
          height={150}
          className="h-10 w-auto"
        />
      </Link>
    </div>
  );
};

export default Logo;
