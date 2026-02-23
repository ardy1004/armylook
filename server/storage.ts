import { db } from "./db";
import { leads, type Lead, type InsertLead } from "@shared/schema";

export interface IStorage {
  createLead(lead: InsertLead): Promise<Lead>;
}

export class DatabaseStorage implements IStorage {
  async createLead(insertLead: InsertLead): Promise<Lead> {
    // Jika database tidak tersedia, kembalikan data mock (data tidak akan disimpan)
    if (!db) {
      console.log("Database tidak tersedia - data lead tidak disimpan:", insertLead);
      return {
        id: Date.now(),
        name: insertLead.name,
        phone: insertLead.phone,
        origin: insertLead.origin,
        financingPlan: insertLead.financingPlan,
        createdAt: new Date(),
      };
    }
    const [lead] = await db.insert(leads).values(insertLead).returning();
    return lead;
  }
}

export const storage = new DatabaseStorage();
