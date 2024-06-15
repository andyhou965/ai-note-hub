"use client";

import { Note as NoteModel } from "@prisma/client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import AddEditNoteDialog from "./AddEditNoteDialog";

interface NoteProps {
  note: NoteModel;
}

const Note = ({ note }: NoteProps) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const wasUpdated = note.updatedAt > note.createdAt;
  const createdUpdatedAtTimestamp = (
    wasUpdated ? note.updatedAt : note.createdAt
  ).toDateString();

  const content = note.content || "";
  const truncatedContent =
    content.length > 200
      ? content.substring(0, content.lastIndexOf(" ", 200)) + "..."
      : content;

  return (
    <>
      <Card
        className="cursor-pointer transition-shadow hover:shadow-lg"
        onClick={() => setShowEditDialog(true)}
      >
        <CardHeader>
          <CardTitle>{note.title}</CardTitle>
          <CardDescription>
            {createdUpdatedAtTimestamp}
            {wasUpdated && "(updated)"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="whitespace-pre-line">{truncatedContent}</p>
        </CardContent>
      </Card>
      <AddEditNoteDialog
        open={showEditDialog}
        setOpen={setShowEditDialog}
        noteToEdit={note}
      ></AddEditNoteDialog>
    </>
  );
};

export default Note;
