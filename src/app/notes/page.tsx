import Note from "@/components/Note";
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

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {allNotes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
      {allNotes.length === 0 && (
        <div className="col-span-full text-center">
          {"You don't have any notes yet. Why don't you create one?"}
        </div>
      )}
    </div>
  );
};
export default NotesPage;
