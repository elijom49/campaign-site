import { eq } from "drizzle-orm";
import { db } from "./your-db-file"; // adjust import path if needed
import { content } from "@shared/schema"; // assuming this is your Drizzle table

export async function seedDatabase() {
  try {
    console.log('Seeding database with initial content (upserting)...');

    for (const item of initialContent) {
      try {
        await db
          .insert(content)
          .values(item)
          .onConflictDoUpdate({
            target: [content.contentKey],
            set: {
              contentValue: item.contentValue,
              contentType: item.contentType,
              section: item.section
            }
          });

        console.log(`Upserted content: ${item.contentKey}`);
      } catch (error) {
        console.error(`Failed to upsert content: ${item.contentKey}`, error);
      }
    }

    console.log('Database seeding completed!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}
