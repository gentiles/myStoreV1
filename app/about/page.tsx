import React from "react";
import db from "@/utils/db";

async function AboutPage() {
  // const profile = await db.testProfile.create({
  //   data: {
  //     name: "erwin",
  //     address: "pampanga",
  //   },
  // });
  const users = await db.product.findMany();
  return (
    <div className="flex sm:justify-between sm:items-center flex-wrap gap-2 py-8">
      {users.map((user) => (
        <div key={user.id}>
          <h2 className="text-2xl">{user.name}</h2>
          <p>{user.description}</p>
        </div>
      ))}
    </div>
  );
}

export default AboutPage;
