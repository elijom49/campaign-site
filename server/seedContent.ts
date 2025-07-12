import { storage } from './storage';
import { createInitialAdmin } from './adminAuth';

// Sample content that admins can edit
const initialContent = [
  {
    contentKey: 'homepage_title',
    contentValue: 'Your Future U.S. Senator Lives Among the People',
    contentType: 'text',
    section: 'homepage'
  },
  {
    contentKey: 'homepage_tagline',
    contentValue: "It's not Red vs. Blue, it's Oligarchs vs. You 🫵🏽",
    contentType: 'text',
    section: 'homepage'
  },
  {
    contentKey: 'candidate_quote',
    contentValue: "I'm running for U.S. Senate because I believe the government should promote equality for everyone.",
    contentType: 'text',
    section: 'homepage'
  },
  {
    contentKey: 'about_bio',
    contentValue: 'Jump was born and raised in Chicago. As an Illinois Native, he is uniquely equipped to understand and address the challenges of working class Illinoisans.',
    contentType: 'text',
    section: 'about'
  },
  {
    contentKey: 'contact_email',
    contentValue: 'sims@jump2026.com',
    contentType: 'email',
    section: 'contact'
  },
  {
    contentKey: 'social_tiktok',
    contentValue: 'https://www.tiktok.com/@jumpforsenate',
    contentType: 'url',
    section: 'social'
  },
  {
    contentKey: 'social_linkedin',
    contentValue: 'https://www.linkedin.com/in/jumpforsenate',
    contentType: 'url',
    section: 'social'
  },
  {
    contentKey: 'social_youtube',
    contentValue: 'https://www.youtube.com/@jumpforsenate',
    contentType: 'url',
    section: 'social'
  },
  {
    contentKey: 'policy_economic_justice_title',
    contentValue: 'Economic Justice',
    contentType: 'text',
    section: 'policies'
  },
  {
    contentKey: 'policy_economic_justice_desc',
    contentValue: 'Fighting for fair wages, worker rights, and economic opportunities that build strong communities.',
    contentType: 'text',
    section: 'policies'
  },
  {
    contentKey: 'policy_healthcare_title',
    contentValue: 'Healthcare Access',
    contentType: 'text',
    section: 'policies'
  },
  {
    contentKey: 'policy_healthcare_desc',
    contentValue: 'Ensuring every Illinoisan has access to affordable, quality healthcare as a fundamental right.',
    contentType: 'text',
    section: 'policies'
  }
];

export async function seedDatabase() {
  try {
    console.log('Seeding database with initial content...');
    
    // Create initial content
    for (const content of initialContent) {
      try {
        await storage.createContent(content);
        console.log(`Created content: ${content.contentKey}`);
      } catch (error) {
        console.log(`Content ${content.contentKey} already exists or failed to create`);
      }
    }
    
    console.log('Database seeding completed!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

export async function createAdminUser(email: string, password: string, role: 'owner' | 'admin' = 'owner') {
  try {
    const admin = await createInitialAdmin(email, password, role);
    console.log(`Created admin user: ${admin.email} (${admin.role})`);
    return admin;
  } catch (error) {
    console.error('Error creating admin user:', error);
    throw error;
  }
}

