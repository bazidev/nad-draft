# NAD Agentforce Workshop - Modern Design

A beautiful, modern, and interactive workshop guide for building the Coral Clouds Service Agent using Salesforce Agentforce.

## 📁 Folder Structure

```
NAD-Workshop/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── README.md           # This file
├── assets/             # Logo and background images
│   ├── nadlogo.jpg     # Workshop logo (sidebar)
│   └── background.jpg  # Hero section background
└── images/             # Screenshot placeholders for instructions
    ├── pic-setup-step1.jpg
    ├── pic-setup-step2.jpg
    ├── pic-ex1-step1.jpg
    ├── pic-ex1-step2.jpg
    ├── pic-ex2-step1.jpg
    ├── pic-ex2-step2.jpg
    ├── pic-ex3-step1.jpg
    ├── pic-ex3-step2.jpg
    ├── pic-ex4-step1.jpg
    ├── pic-ex4-step2.jpg
    ├── pic-ex5-step1.jpg
    ├── pic-ex5-step2.jpg
    ├── pic-ex5-step3.jpg
    ├── pic-ex6-step1.jpg
    ├── pic-ex7-step1.jpg
    ├── pic-ex7-step2.jpg
    ├── pic-ex8-step1.jpg
    ├── pic-ex8-step2.jpg
    ├── pic-ex8-step3.jpg
    └── pic-ex8-step4.jpg
```

## 🖼️ Adding Your Screenshots

### Assets (Required)
✅ Already included:
- `assets/nadlogo.jpg` - Your workshop logo
- `assets/background.jpg` - Hero section background

### Images Folder (Screenshots for Instructions)
To add your instruction screenshots, place them in the `images/` folder with these exact names:

#### Environment Setup
- `pic-setup-step1.jpg` - STORM Request an Org screenshot
- `pic-setup-step2.jpg` - Enable Generative AI in Setup

#### Exercise 1: Assistive Agent
- `pic-ex1-step1.jpg` - Agentforce Setup and Builder
- `pic-ex1-step2.jpg` - Create Custom Topic

#### Exercise 2: Flow (Case Creation)
- `pic-ex2-step1.jpg` - Flow Builder for Case Creation
- `pic-ex2-step2.jpg` - Agent Action configuration

#### Exercise 3: Prompt (Account Summary)
- `pic-ex3-step1.jpg` - Prompt Builder configuration
- `pic-ex3-step2.jpg` - Create Prompt Agent Action

#### Exercise 4: Apex class
- `pic-ex4-step1.jpg` - ContactLookup Apex Class
- `pic-ex4-step2.jpg` - Create Apex Agent Action

#### Exercise 5: Service Agent (ASA)
- `pic-ex5-step1.jpg` - Create new Agentforce
- `pic-ex5-step2.jpg` - Case Management Topic
- `pic-ex5-step3.jpg` - Account Management Topic

#### Exercise 6: Knowledge Base
- `pic-ex6-step1.jpg` - Configure AQWK action

#### Exercise 7: Escalation
- `pic-ex7-step1.jpg` - Outbound Omni-Channel Flow
- `pic-ex7-step2.jpg` - Attach Flow to Agentforce

#### Exercise 8: Publishing
- `pic-ex8-step1.jpg` - Inbound Omni-Channel Flow
- `pic-ex8-step2.jpg` - Create MIAW Channel
- `pic-ex8-step3.jpg` - Embedded Service Deployment
- `pic-ex8-step4.jpg` - Add to Experience Cloud Site

## 🚀 Features

### Design
- ✨ Modern glassmorphism transparent sidebar
- 🎨 Beautiful gradient backgrounds and shadows
- 📱 Fully responsive (desktop, tablet, mobile)
- 🖼️ Custom logo and background support
- 🎯 Icon-only buttons for clean UI

### Interactivity
- ✅ Mark steps as complete with checkmark button
- 🎉 Confetti animation on completion
- 📊 Real-time progress tracking (percentage & count)
- 🔄 Auto-collapse steps when marked complete
- 💾 Auto-save progress to localStorage
- ✓ Green checks in sidebar for completed sections
- 📋 Copy buttons for all configuration values

### Navigation
- 🔗 Smooth scrolling between sections
- 🎯 Active section highlighting
- 👁️ Section completion indicators
- 📱 Collapsible sidebar for mobile

## 💻 Usage

1. **Open the workshop:**
   - Simply open `index.html` in any modern browser
   - Works offline once loaded

2. **Navigate:**
   - Click sidebar links to jump to sections
   - Or scroll naturally through the content

3. **Track progress:**
   - Click the checkmark button to mark steps complete
   - Progress automatically saves to your browser
   - See completion percentage in sidebar

4. **Copy values:**
   - Click copy icons in tables to copy configuration values
   - No need to manually select text

5. **Add screenshots:**
   - Place your screenshots in the `images/` folder
   - Use the naming convention above
   - Screenshots will automatically appear

## ⌨️ Keyboard Shortcuts

- `Alt + C` - Clear all progress
- `Alt + E` - Export progress as JSON

## 🔧 Customization

### Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary: #0176D3;        /* Primary blue */
    --accent: #06A59A;         /* Accent teal */
    --success: #2E844A;        /* Success green */
    /* ... more variables ... */
}
```

### Change Logo
Replace `assets/nadlogo.jpg` with your logo (keep the same filename)

### Change Background
Replace `assets/background.jpg` with your image (keep the same filename)

## 🌐 Browser Compatibility

- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## 📝 Notes

- All progress is stored in **localStorage** (per browser)
- Screenshots are optional - placeholders will show if missing
- Best viewed on screens 1024px wide or larger
- No server or database required - runs entirely in the browser

## 🎓 Workshop Content

This workshop guides you through building a complete Agentforce Service Agent including:
1. Environment setup
2. Assistive Agent configuration
3. Custom Flow actions
4. Apex actions
5. Prompt Template actions
6. Service Agent setup
7. Knowledge Base integration
8. Escalation flows
9. Publishing to Experience Cloud

---

**Enjoy your workshop! 🚀**

