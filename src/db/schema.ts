import { pgTable, text, bigint, jsonb, uuid, timestamp, integer } from 'drizzle-orm/pg-core';

export const messages = pgTable('messages', {
  id: bigint('id', { mode: 'number' }).primaryKey(),
  content: text('content').notNull(),
  chatId: text('chatId').notNull(),
  messageId: text('messageId').notNull(),
  role: text('role').notNull(),
  metadata: jsonb('metadata').notNull(),
});

interface File {
  name: string;
  fileId: string;
}

export const chats = pgTable('chats', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  createdAt: text('createdAt').notNull(),
  focusMode: text('focusMode').notNull(),
  files: jsonb('files').notNull(),
});

export const ocrResults = pgTable('ocr_results', {
  id: uuid('id').primaryKey().defaultRandom(),
  originalFilename: text('original_filename').notNull(),
  processedText: text('processed_text'),
  fileType: text('file_type'),
  fileSize: integer('file_size'),
  docxContent: text('docx_content'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow()
});
