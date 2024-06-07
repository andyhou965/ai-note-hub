import prisma from "@/lib/db/prisma";
import { auth } from "@clerk/nextjs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "AI Note Hub - Notes",
};

const NotesPage = async () => {
  const { userId } = auth();
  if (!userId) return Error("userId undefined");

  const allNotes = await prisma.note.findMany({
    where: { userId },
  });

  return <div>{JSON.stringify(allNotes)}</div>;
};
export default NotesPage;
