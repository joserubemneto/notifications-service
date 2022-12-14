import { Replace } from 'src/helpers/Replace';
import { Content } from './content';
import { randomUUID } from 'node:crypto';

export interface INotification {
  content: Content;
  category: string;
  recipientId: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private data: INotification;

  constructor(data: Replace<INotification, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.data = {
      ...data,
      createdAt: data.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public get content(): Content {
    return this.data.content;
  }

  public set content(content: Content) {
    this.data.content = content;
  }

  public get category(): string {
    return this.data.category;
  }

  public set category(category: string) {
    this.data.category = category;
  }

  public get recipientId(): string {
    return this.data.recipientId;
  }

  public set recipientId(recipientId: string) {
    this.data.recipientId = recipientId;
  }

  public get readAt(): Date | null | undefined {
    return this.data.readAt;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.data.readAt = readAt;
  }

  public get createdAt(): Date {
    return this.data.createdAt;
  }
}
