```
                                  +-------------------+
                                  |                   |
                                  |    RootLayout     |
                                  |   (layout.tsx)    |
                                  |                   |
                                  +---------+---------+
                                            |
                                            | Wraps
                                            v
                                  +-------------------+
                                  |                   |
                                  |    ClientBody     |
                                  | (ClientBody.tsx)  |
                                  |  [Client Comp]    |
                                  |                   |
                                  +---------+---------+
                                            |
                                            | Wraps
                                            v
                                  +-------------------+
                                  |                   |
                                  |       Home        |
                                  |    (page.tsx)     |
                                  |                   |
                                  +---------+---------+
                                            |
                                            | Contains
                                            v
               +------------------------+---+---+------------------------+
               |                        |       |                        |
               v                        v       v                        v
+---------------------------+ +------------------+ +-----------------+ +------------------+
|                           | |                  | |                 | |                  |
|        Navbar             | |   HeroSection    | | Destination     | |    Popular       |
|     (Navbar.tsx)          | | (HeroSection.tsx)| | Categories      | |  Destinations    |
|     [Client Comp]         | |  [Client Comp]   | |                 | |                  |
|                           | |                  | |                 | |                  |
+---------------------------+ +------------------+ +-----------------+ +------------------+
               |                        |
               |                        |
     +---------+----------+    +--------+--------+
     |                    |    |                 |
     v                    v    v                 v
+----------+      +-------------+     +-------+      +-------------+
| Desktop  |      |   Mobile    |     | Hero  |      |   Search    |
|   Nav    |      |    Menu     |     | Image |      |    Form     |
+----------+      +-------------+     +-------+      +-------------+

               +------------------------+---+---+------------------------+
               |                        |       |                        |
               v                        v       v                        v
+---------------------------+ +------------------+ +-----------------+ +------------------+
|                           | |                  | |                 | |                  |
|    ClimateProtection      | |   Testimonials   | |    Footer      | |  UI Components   |
|  (ClimateProtection.tsx)  | | (Testimonials.tsx)| |  (Footer.tsx) | |   (shadcn/ui)    |
|                           | |                  | |                 | |                  |
|                           | |                  | |                 | |                  |
+---------------------------+ +------------------+ +-----------------+ +------------------+
                                                    |
                                         +---------+----------+
                                         |                    |
                                         v                    v
                                  +-------------+     +----------------+
                                  |  Navigation |     |   Contact      |
                                  |    Links    |     |     Info       |
                                  +-------------+     +----------------+

Styling:
- Tailwind CSS
- Global CSS Variables (globals.css)
- Custom Container Classes
- Custom Button Classes
```
