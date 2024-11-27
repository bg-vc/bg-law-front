# BGLaw - AI-Powered Legal Services Platform

A modern, AI-driven legal services platform built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** Next.js 14.0.4
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Development Environment:** macOS

## 🌟 Key Features

### 1. Home Page
- AI-powered practice area descriptions
- Modern hero section highlighting technological innovation
- Interactive service grid with AI-focused content
- Seamless navigation to specialized legal services

### 2. Practice Areas
- AI-enhanced legal service descriptions
- Advanced case analysis capabilities
- Data-driven legal strategy development
- Predictive outcome assessment

### 3. Attorneys
- Profiles highlighting AI and technical expertise
- Integration of traditional legal knowledge with modern technology
- Specialized roles in AI-driven legal analysis
- Focus on data analytics and technological innovation

### 4. Case Studies
- AI-powered success stories
- Detailed analysis of technology's role in case resolution
- Quantifiable results and improvements through AI
- Real-world applications of legal technology

### 5. Resources
- AI-focused legal guides and materials
- Technical documentation and tutorials
- Digital learning resources
- AI legal analysis tools and guides

### 6. About
- Company mission emphasizing technological innovation
- Core values centered on AI integration
- Performance metrics showcasing AI effectiveness
- Team expertise in legal technology

### 7. Contact
- 24/7 AI-powered support options
- Automated initial case assessment
- Digital consultation scheduling
- Multi-channel communication options

## 🌐 Internationalization (i18n) Preparation

### Text Constants Structure
All text content has been extracted into centralized constant files under `src/constants/text/pages/`:

```typescript
// Common structure across all pages
export const PAGE_TEXT = {
  META: {
    TITLE: string,
    DESCRIPTION: string,
  },
  HERO: {
    TITLE: string,
    DESCRIPTION: string,
  },
  // Page-specific sections
  SECTIONS: {
    // Various sections with their content
  }
}
```

### Pages with Extracted Text
1. **Home** (`home.ts`)
   - Meta information
   - Hero section
   - Features list
   - Statistics

2. **Practice Areas** (`practice-areas.ts`)
   - Meta information
   - Hero section
   - Practice areas list with icons

3. **Attorneys** (`attorneys.ts`)
   - Meta information
   - Hero section
   - Attorney profiles
   - Specialties and contact info

4. **Case Studies** (`case-studies.ts`)
   - Meta information
   - Hero section
   - Case studies with outcomes
   - Success metrics

5. **Resources** (`resources.ts`)
   - Meta information
   - Hero section
   - Resource articles
   - Categories and read times

6. **About** (`about.ts`)
   - Meta information
   - Hero section
   - Mission and vision
   - Company values

7. **Contact** (`contact.ts`)
   - Meta information
   - Hero section
   - Contact information
   - Form fields

### Icon Mapping
Each page implements type-safe icon mapping:
```typescript
const pageIcons: Record<string, LucideIcon> = {
  'icon-key': IconComponent,
  // ... more icons
}
```

### Next Steps for i18n
1. Evaluate and implement i18n library (e.g., next-intl)
2. Create language switching mechanism
3. Update routing for language support
4. Implement translation files
5. Add language-specific metadata

## 🔧 Installation

```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd bg-law-front

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Design

- Mobile-first approach
- Tablet optimization
- Desktop enhancement
- Cross-device consistency

## 🔒 Security Features

- Secure form handling
- Data encryption
- Privacy protection
- Compliance with legal standards

## 🚀 Performance

- Optimized loading times
- Efficient resource management
- Smooth transitions
- Enhanced user experience

## 📖 Documentation

For more detailed documentation, please refer to the docs directory.

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

Developed and maintained by the BGLaw development team.
