# AI-Optimized Professional Resume Builder

A modern, ATS-friendly resume built with Next.js, TypeScript, and Tailwind CSS. This resume is optimized for AI screening systems used by companies to filter candidates.

## Features

✅ **ATS-Friendly Design**: Clean, structured layout that AI systems can easily parse
✅ **PDF Export**: One-click download as PDF using browser print functionality
✅ **Responsive Design**: Looks great on all devices
✅ **Easy Customization**: Simple data structure for quick updates
✅ **Professional Styling**: Modern, clean design with Google Fonts
✅ **Print-Optimized**: Perfect formatting when printed or saved as PDF

## Why This Resume is AI-Approved

1. **Clear Structure**: Uses standard section headings (Experience, Education, Skills) that ATS systems recognize
2. **Simple Formatting**: No complex tables, columns, or graphics that confuse parsers
3. **Keyword-Rich**: Includes relevant technical skills and achievements with metrics
4. **Standard Fonts**: Uses web-safe fonts that render consistently
5. **Logical Hierarchy**: Clear visual hierarchy with proper heading levels
6. **Contact Information**: All contact details prominently displayed at the top
7. **Quantifiable Achievements**: Uses numbers and percentages to demonstrate impact

## Getting Started

### View the Resume

```bash
cd resume-builder
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Customizing Your Resume

Edit the file `lib/resume-data.ts` to update your information:

```typescript
export const resumeData: ResumeData = {
  personalInfo: {
    name: "Your Name",
    title: "Your Job Title",
    email: "your.email@example.com",
    // ... more fields
  },
  // ... other sections
};
```

### Sections You Can Customize

- **Personal Information**: Name, title, contact details, social links
- **Professional Summary**: Brief overview of your experience and skills
- **Experience**: Work history with achievements (use bullet points with metrics)
- **Education**: Degrees, institutions, GPA
- **Skills**: Technical and soft skills
- **Certifications**: Professional certifications
- **Projects**: Notable projects with descriptions and technologies

## Downloading as PDF

1. Click the "Download PDF" button
2. In the print dialog, select "Save as PDF"
3. Adjust settings if needed (margins, etc.)
4. Save your resume

**Tip**: Use Chrome or Edge for best PDF results.

## ATS Optimization Tips

When customizing your resume, follow these best practices:

### ✅ DO:
- Use standard section headings
- Include relevant keywords from job descriptions
- Quantify achievements with numbers and percentages
- Use simple bullet points
- Keep formatting consistent
- Include all relevant contact information
- Use standard date formats

### ❌ DON'T:
- Use images, charts, or graphics
- Use tables for layout
- Use headers/footers
- Use unusual fonts or colors
- Use text boxes
- Include personal photos
- Use abbreviations without spelling them out first

## Technology Stack

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Google Fonts**: Professional typography (Inter font)

## Project Structure

```
resume-builder/
├── app/
│   ├── page.tsx          # Main resume page
│   ├── layout.tsx        # Root layout with fonts
│   └── globals.css       # Global styles + print styles
├── lib/
│   └── resume-data.ts    # Resume data structure
└── package.json
```

## Tips for Success

1. **Tailor for Each Job**: Adjust keywords and skills to match job descriptions
2. **Use Action Verbs**: Start bullet points with strong verbs (Led, Developed, Implemented)
3. **Show Impact**: Include metrics and results (increased by X%, reduced by Y%)
4. **Keep It Concise**: Aim for 1-2 pages maximum
5. **Proofread**: Check for typos and grammatical errors
6. **Update Regularly**: Keep your resume current with latest achievements

## License

This project is open source and available for personal and commercial use.

---

**Need Help?** Edit `lib/resume-data.ts` with your information and the resume will automatically update!
