import mongoose, { Schema, Document } from "mongoose";

export enum Priority {
  High = "HIGH",
  Medium = "MED",
  Low = "LOW",
}

export interface ITodoItem extends Document {
  Title: string;
  Description: string;
  Priority: Priority;
}

const TodoItemSchema: Schema = new mongoose.Schema({
  Title: String,
  Description: String,
  Priority: String,
});

export default mongoose.model<ITodoItem>("TodoItem", TodoItemSchema);
