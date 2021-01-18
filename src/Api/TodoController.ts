import mongoose from "mongoose";
import TodoItem, { ITodoItem, Priority } from "../Model/TodoItem";

/**
 * Returns all TodoItems
 */
export async function GetAllTodos(): Promise<ITodoItem[]> {
  let result = await TodoItem.find({});
  return result;
}

/**
 * Returns one TodoItem by a given Id
 * @param id TodoItem Id
 */
export async function GetTodoById(id: number): Promise<ITodoItem> {
  let result = await TodoItem.findOne({ id: id });
  return result;
}

/**
 * Adds a new TodoItem to the database
 * @param title Title of the TodoItem
 * @param description Description of the TodoItem
 * @param priority Priority of the TodoItem @see Priority
 */
export async function AddTodoItem(
  title: string,
  description: string,
  priority: Priority
): Promise<ITodoItem> {
  const newItem = new TodoItem({
    Title: title,
    Description: description,
    Priority: priority,
  });
  newItem.save();
  return newItem;
}
