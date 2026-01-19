import React from "react";
import Link from "next/link";

function page() {
  return (
    <div>
      <h1>Hello</h1>
      <Link href="/dashboard" className="text-white">
        Go to Dashboard
      </Link>
    </div>
  );
}

export default page;
