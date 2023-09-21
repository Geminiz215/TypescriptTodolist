import mongoose, { Document, Schema } from "mongoose";

interface ItemModel extends Document {
  name: string;
  description: string;
  todo: string;
  status: TodoStatus;
  startDate?: Date;
  endDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

enum TodoStatus {
  Done = "Done",
  OnProgress = "OnProgress",
  NotStarted = "NotStarted",
}

const ItemSchema = new Schema<ItemModel>({
  name: String,
  description: String,
  todo: String,
  startDate: { type: Date, default: null },
  endDate: { type: Date, default: null },
  status: { type: String, default: TodoStatus.NotStarted },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.lists ||
  mongoose.model<ItemModel>("lists", ItemSchema);
