# App Screenshots Directory Structure

This folder contains dedicated subfolders for each application featured in the portfolio. You can easily edit, replace, or add screenshots by managing the files in the corresponding folder:

```text
assets/screenshots/
├── menoufia_university/    # Official Apple App Store screenshots (Menoufia University)
│   ├── screen_1.png         # Main Dashboard (Colleges & Faculties Directory)
│   ├── screen_2.png         # Campus News & Sector Announcements Feed
│   ├── screen_3.png         # Faculty Profile & Academic Departments
│   ├── screen_4.png         # Student Services & Expatriates Portal
│   ├── screen_5.png         # Complaints & Direct Suggestions Portal
│   ├── screen_login.png     # Login / Welcome Screen
│   ├── screen_sectors.png   # Sectors Directory
│   └── screen_units.png     # Special Units Directory
│
├── semu_elshefa/            # Semu Elshefa Domestic Staffing Platform (Saudi Arabia)
│   ├── screen_1.png         # Domestic Services Booking & Staff Selection
│   ├── screen_2.jpg         # Arabic RTL Worker Profile & Verified Ratings
│   ├── screen_3.png         # Checkout & Secure Payment Gateways
│   ├── screen_4.png         # Staff Catalog & Service Filtering
│   └── screen_5.png         # Booking Confirmation & Receipt Summary
│
├── ikhtabr_qurani/          # Ikhtabr Qurani Assessment Platform
│   ├── screen_1.jpg         # Interactive Verse Quiz with Arabic UI
│   ├── screen_2.png         # Word & Vocabulary Meaning Assessment
│   ├── screen_3.jpg         # Score Overview & Performance Stats
│   ├── screen_4.png         # Surah Selection & Memorization Test
│   └── screen_5.jpg         # Daily Streak Tracker & Practice History
│
├── menoufia_science/        # Menofia Faculty of Science Official Portal
│   ├── screen_1.jpg         # Department Timetables & Schedules
│   ├── screen_2.jpg         # Faculty News & Dean Announcements
│   ├── screen_3.jpg         # Exam Schedules & Seating Numbers
│   ├── screen_4.jpg         # Course Resources & Department Downloads
│   └── screen_5.jpg         # Student Affairs Portal
│
├── big_brother/             # BigBrother Smart Attendance Scanner
│   ├── screen_1.png         # High-Speed QR Camera Scanner
│   ├── screen_2.jpg         # Live Attendance Ledger & Verification Count
│   ├── screen_3.jpg         # Instant Student Verification Pop-up
│   ├── screen_4.png         # Session Attendance Analytics & Charts
│   └── screen_5.jpg         # Roster Export to CSV/Excel
│
└── dua_app/                 # DUA Medicine Directory & Voice Search
    └── screen_1.jpg         # Medicine Directory & Arabic Voice Search UI
```

### How to Replace or Add Screenshots:
1. **To Replace**: Simply drop your new image into the target app's folder with the matching filename (e.g., replace `menoufia_university/screen_1.png` with your new image).
2. **To Add**: Add `screen_6.png` in the target folder, and add an `<img>` tag in `index.html` inside `<div class="phone-slider-track">` for that project.
