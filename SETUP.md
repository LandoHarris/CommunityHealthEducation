<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Setup configuration and next steps">
    <title>SETUP.md - Configuration Guide</title>
</head>
<body style="font-family: monospace; white-space: pre-wrap; padding: 20px; background: #f5f5f5;">
====================================================================
RURAL HEALTH EDUCATION PLATFORM - SETUP & CONFIGURATION GUIDE
JSU Alabama Rural Health Association
====================================================================

IMMEDIATE NEXT STEPS (Do This First!)
=====================================

1. ENABLE GITHUB PAGES
   ─────────────────────
   • Go to: https://github.com/LandoHarris/CommunityHeatlhEducation
   • Click "Settings" at top
   • Scroll to "GitHub Pages" section
   • Set source to "main" branch, "/ (root)" folder
   • Wait 1-2 minutes for site to go live
   • Your URL: https://landoharris.github.io/CommunityHeatlhEducation/


2. GOOGLE ANALYTICS SETUP
   ──────────────────────
   Step 1: Create Analytics Account
   • Go to: https://analytics.google.com
   • Sign in with Google account
   • Click "Start measuring" or "Create"
   
   Step 2: Create Property
   • Account name: "JSU ARHA"
   • Property name: "Rural Health Education Platform"
   • Reporting timezone: Eastern Time (US & Canada)
   • Currency: United States Dollar (USD)
   • Click "Create"
   
   Step 3: Get Your Measurement ID
   • In left menu, click "Admin"
   • In "Property" column, click "Data Streams"
   • Click your web data stream
   • Copy the "Measurement ID" (starts with G-)
   • Example: G-XXXXXXXXXX
   
   Step 4: Replace in All HTML Files
   • Find ALL instances of: YOUR-GA-ID
   • Replace with: Your actual G-XXXXXXXXXX ID
   • Files to update:
     - index.html
     - about.html
     - resources.html
     - feedback.html
     - All files in topics/ folder
     - qr/qr-codes.html
   
   Step 5: Verify Tracking
   • After updating, go to your site
   • In Analytics, go to "Real-time" → "Overview"
   • You should see yourself as a visitor
   • This confirms tracking is working


3. GOOGLE FEEDBACK FORM SETUP
   ──────────────────────────
   Step 1: Create the Form
   • Go to: https://forms.google.com
   • Click "Create new form"
   • Title: "ARHA Feedback & Questions"
   • Description: "Help us improve health education for your community"
   
   Step 2: Add Questions (use suggestions below)
   
   QUESTION 1:
   Type: Checkboxes
   Title: "Which health topics are most important to you?"
   Options:
   ☐ Blood pressure & heart health
   ☐ Diabetes & blood sugar
   ☐ Mental health & stress
   ☐ Nutrition & weight management
   ☐ Exercise & fitness
   ☐ Fall prevention
   ☐ Emergency signs & when to seek care
   ☐ Other (please specify)
   Required: Yes
   
   QUESTION 2:
   Type: Multiple choice
   Title: "Where did you find out about this platform?"
   Options:
   ○ Senior center
   ○ Clinic or doctor's office
   ○ Church
   ○ Community center
   ○ QR code somewhere
   ○ Friend or family member
   ○ Other
   Required: No
   
   QUESTION 3:
   Type: Long text
   Title: "How can we improve this platform?"
   Required: No
   
   QUESTION 4:
   Type: Short text
   Title: "What other health topics should we cover?"
   Required: No
   
   QUESTION 5:
   Type: Email
   Title: "Your email (optional - if you'd like us to follow up)"
   Required: No
   
   Step 3: Get Embed Code
   • Click "Send" button (top right)
   • Click "&lt;/&gt;" (embed) icon
   • Click "Embed"
   • Copy the entire iframe code
   
   Step 4: Update feedback.html
   • Open: feedback.html
   • Find the line: &lt;iframe src="https://docs.google.com/forms/...
   • Replace the entire iframe with your copied code
   • Save file


4. TEST THE SITE THOROUGHLY
   ────────────────────────
   Test on Mobile (MOST IMPORTANT!)
   • Open on smartphone browser
   • Test all navigation
   • Try all links
   • Read content at normal size
   • Test on 3G/4G (slow connection)
   
   Use Chrome DevTools Network Throttling:
   • Right-click → "Inspect"
   • Click "Network" tab
   • Find dropdown that says "No throttling"
   • Select "Slow 3G"
   • Reload page
   • Should still load reasonably fast
   
   Test on Desktop & Tablet
   • Use multiple browsers (Chrome, Firefox, Safari, Edge)
   • Test keyboard navigation (Tab through all links)
   • Test with screen reader (NVDA on Windows, VoiceOver on Mac)
   
   Verify All Links Work
   • Click every link on every page
   • Verify external links open (CDC, NIH, etc.)
   • Verify internal links navigate correctly
   
   Test Accessibility
   • Use: https://www.tota11y.org/ bookmarklet
   • Check for contrast issues
   • Check for missing alt text
   • Verify headings are in proper order


5. GENERATE QR CODES
   ──────────────────
   Quick Start:
   • Go to: https://www.qr-code-generator.com/
   • Click "URL/Website"
   • Enter: https://landoharris.github.io/CommunityHeatlhEducation/
   • Download as PNG (300 DPI)
   • Print on cardstock 2"x2" or larger
   • Add label: "Scan for Free Health Education"
   
   For Distribution Strategy:
   • See: qr/qr-codes.html on your deployed site
   • Contact senior centers, clinics, churches
   • Ask permission before posting
   • Track which locations get most scans via Analytics
   
   Create Multiple QR Codes for Different Topics:
   
   Main Site QR:
   https://landoharris.github.io/CommunityHeatlhEducation/
   Label: "Scan for Free Health Education"
   
   Blood Pressure QR:
   https://landoharris.github.io/CommunityHeatlhEducation/topics/blood-pressure.html
   Label: "Learn About Blood Pressure"
   
   Emergency Signs QR:
   https://landoharris.github.io/CommunityHeatlhEducation/topics/emergency-signs.html
   Label: "Emergency Signs - CALL 911"
   
   Feedback QR:
   https://landoharris.github.io/CommunityHeatlhEducation/feedback.html
   Label: "Share Your Feedback"


VERIFICATION CHECKLIST
======================

After Setup, Verify:

☐ GitHub Pages is enabled and site is live
☐ Google Analytics is configured and tracking
☐ Your GA tracking ID is correct (check Real-time)
☐ Google Feedback Form is embedded in feedback.html
☐ All links work (test at least 50% of pages)
☐ Site loads on mobile phone without issues
☐ Text is readable (18px+ on mobile)
☐ Navigation menu works on mobile
☐ All crisis numbers are visible and correct
  ☐ 988 (Suicide Prevention)
  ☐ Text HOME to 741741 (Crisis Text)
  ☐ 911 (Emergency)
☐ Local resources are accurate and up-to-date
☐ Keyboard navigation works (Tab through page)
☐ High contrast is visible (colors don't strain eyes)


CUSTOMIZATION OPTIONS
=====================

Update Local Information:
• Edit: resources.html
• Update clinic names, phone numbers, addresses
• Add local food banks, senior centers, mental health services
• Keep format consistent with existing entries

Add Your Logo:
• Create: assets/img/
• Add logo.png or logo.jpg
• Update header.html to include logo (or add to each page)
• Size: ~50-100px height

Change Colors (if desired):
• Edit: assets/css/styles.css
• Look for :root section
• Update color variables:
  --primary-color: #1a472a (forest green)
  --secondary-color: #c41e3a (healthcare red)
  --accent-color: #f39c12 (warm orange)

Add New Health Topics:
• Create new .html file in topics/ folder
• Follow template from existing topics
• Add link to index.html
• Include same navigation and footer


ONGOING MAINTENANCE
===================

Weekly:
• Check analytics for basic traffic
• Monitor feedback form responses
• Fix any broken links users report

Monthly:
• Review which pages are most popular
• Check if any crisis numbers need updating
• Review feedback for new topic requests
• Test site on mobile device

Quarterly:
• Update local resources (clinic hours, services)
• Review and expand popular topics
• Update crisis resource numbers if needed
• Check for any outdated health information

Yearly:
• Full audit of all links
• Update any outdated health information
• Add 2-3 new topics based on feedback
• Review analytics for trends and patterns


TROUBLESHOOTING
===============

GitHub Pages Not Live?
• Wait 5+ minutes after enabling
• Check Settings → Pages confirms main branch
• Try incognito window (clear cache)
• Check repository name in URL

Analytics Not Tracking?
• Verify GA ID is correct (starts with G-)
• Check that ALL instances of YOUR-GA-ID are replaced
• Wait 24 hours for initial data
• Check "Real-time" view to verify tracking

QR Code Not Working?
• Make sure GitHub Pages is enabled first
• Test URL directly in browser
• Verify QR code is high contrast (black on white)
• Try different QR code generator if needed

Site Looks Wrong on Mobile?
• Clear browser cache
• Try different mobile browser
• Check Chrome DevTools responsive mode
• Verify all CSS is properly loaded (check for 404 errors)

Analytics Showing Wrong Data?
• Clear browser cookies
• Test in incognito window
• Wait 24 hours for full data
• Check date range in Analytics reports


IMPORTANT REMINDERS
===================

✓ All health information should cite sources
✓ Always recommend consulting healthcare providers
✓ Keep plain language for readability
✓ Include crisis hotlines on mental health pages
✓ Update local resources periodically
✓ Monitor analytics to understand community needs
✓ Respond to feedback form submissions
✓ Test on mobile devices (most users will use phones)
✓ Verify accessibility (high contrast, readable text)
✓ Include multiple ways to access information (QR codes, word of mouth, etc.)


GETTING HELP
============

For Questions:
1. Check GitHub repository issues
2. Review feedback form responses
3. Contact JSU ARHA leadership
4. Search CDC/NIH websites for health info

For Technical Issues:
1. Check GitHub Pages documentation
2. Test in Chrome DevTools
3. Check console for JavaScript errors
4. Try different browser to isolate issues


NEXT DEPLOYMENT STEPS
=====================

After launch, plan:

Month 1:
• Distribute QR codes to 5-10 locations
• Collect initial feedback
• Monitor analytics
• Fix any broken links or content issues

Month 2-3:
• Expand QR code distribution based on data
• Add 1-2 new topics from feedback
• Update local resources
• Report metrics to leadership

Month 6:
• Full review of analytics data
• Assess which topics are most valuable
• Plan new topics or expansions
• Evaluate ROI and community impact


====================================================================
Platform Created: June 2026
Next Review Date: September 2026
====================================================================
    