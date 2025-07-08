# Design System - CurlingDrawWeightPractice

This document outlines the design system for the CurlingDrawWeightPractice application, establishing consistent visual language, interaction patterns, and UI components across the entire mobile application.

## 1. Brand Identity

### 1.1 Brand Colors

**Primary Colors**
- Curling Blue: `#005EB8` - Primary app color, headers, key elements
- Ice White: `#F0F8FF` - Backgrounds, clean spaces
- Stone Granite: `#3A3A3A` - Text, icons, borders

**Secondary Colors**
- Red House: `#D81E05` - Alerts, errors, important elements
- Blue House: `#0077CC` - Buttons, interactive elements
- Yellow Button: `#FFD700` - Highlights, accents, calls to action

**Tertiary Colors**
- Sheet Gray: `#E0E0E0` - Secondary backgrounds, disabled states
- Line Green: `#4CAF50` - Success states, positive indicators
- Warm Beige: `#F5F5DC` - Alternative background, contrast elements

### 1.2 Typography

**Font Families**
- Primary: Roboto - Clean, modern sans-serif suitable for mobile
- Alternative: Open Sans - Secondary option if Roboto is unavailable

**Font Sizes**
- Header 1: 24px (Shot type screens, main headers)
- Header 2: 20px (Section headers, practice summary)
- Header 3: 18px (Sub-sections, list headers)
- Body: 16px (Main content text)
- Caption: 14px (Supporting information, labels)
- Small: 12px (Footnotes, timestamps)

**Font Weights**
- Bold: 700 (Headers, emphasis)
- Medium: 500 (Sub-headers, interactive elements)
- Regular: 400 (Body text, general content)
- Light: 300 (Supporting text, subtle elements)

### 1.3 Logo & App Icon

**App Icon**
- Simple curling stone with measurement indicator
- Background: Curling Blue (`#005EB8`)
- Stone: Dark gray gradient with measuring laser line in Yellow Button (`#FFD700`)

**Logo Guidelines**
- Minimum clear space: Equal to "C" height in logo
- Minimum display size: 120px width for digital use
- Always display on appropriate contrasting background

## 2. UI Components

### 2.1 Buttons

**Primary Button**
- Background: Blue House (`#0077CC`)
- Text: Ice White (`#F0F8FF`)
- Border: None
- Corner Radius: 8px
- Height: 48px
- States: Default, Hover, Active, Disabled

**Secondary Button**
- Background: Transparent
- Text: Blue House (`#0077CC`)
- Border: 1px solid Blue House (`#0077CC`)
- Corner Radius: 8px
- Height: 48px
- States: Default, Hover, Active, Disabled

**Tertiary Button / Link**
- Background: Transparent
- Text: Blue House (`#0077CC`)
- Border: None
- Underline: None (underline on hover)
- States: Default, Hover, Active, Disabled

**Action Button (e.g., "Save & Next")**
- Background: Yellow Button (`#FFD700`)
- Text: Stone Granite (`#3A3A3A`)
- Border: None
- Corner Radius: 8px
- Height: 48px
- Icon: Right-facing arrow
- States: Default, Hover, Active, Disabled

### 2.2 Form Elements

**Text Input**
- Background: Ice White (`#F0F8FF`)
- Text: Stone Granite (`#3A3A3A`)
- Border: 1px solid Sheet Gray (`#E0E0E0`)
- Corner Radius: 4px
- Height: 40px
- Active Border: Blue House (`#0077CC`)
- Error Border: Red House (`#D81E05`)

**Number Input (for distance and angle)**
- Background: Ice White (`#F0F8FF`)
- Text: Stone Granite (`#3A3A3A`) (Larger than standard text input)
- Border: 1px solid Sheet Gray (`#E0E0E0`)
- Corner Radius: 4px
- Height: 44px
- Active Border: Blue House (`#0077CC`)
- Units Indicator: Right-aligned within input

**Checkbox & Radio Button**
- Unchecked Border: 2px solid Sheet Gray (`#E0E0E0`)
- Checked Background: Blue House (`#0077CC`)
- Check Mark: Ice White (`#F0F8FF`)
- Size: 24px (touch-friendly)

**Dropdown / Select**
- Styling matches Text Input
- Dropdown Icon: Downward triangle in Stone Granite (`#3A3A3A`)
- Selected Item: Bold text

### 2.3 Cards & Containers

**Standard Card**
- Background: Ice White (`#F0F8FF`)
- Border: None
- Shadow: Light drop shadow (0px 2px 4px rgba(0,0,0,0.1))
- Corner Radius: 8px
- Padding: 16px

**List Item Card**
- Background: Ice White (`#F0F8FF`)
- Border Bottom: 1px solid Sheet Gray (`#E0E0E0`)
- Corner Radius: 0px
- Padding: 12px 16px
- States: Default, Active/Selected

**Sheet Visualization Container**
- Background: Ice White (`#F0F8FF`)
- Border: 1px solid Curling Blue (`#005EB8`)
- Corner Radius: 8px
- Padding: 8px
- Aspect Ratio: 16:9 (landscape orientation of sheet)

### 2.4 Navigation Elements

**Top Navigation Bar**
- Background: Curling Blue (`#005EB8`)
- Text: Ice White (`#F0F8FF`)
- Height: 56px
- Title: Center-aligned
- Back Button: Left-aligned arrow icon
- Additional Actions: Right-aligned icons

**Tab Navigation**
- Background: Ice White (`#F0F8FF`)
- Active Tab Indicator: Blue House (`#0077CC`)
- Text: Stone Granite (`#3A3A3A`)
- Active Text: Blue House (`#0077CC`)
- Height: 48px

**Progress Indicator**
- Background Track: Sheet Gray (`#E0E0E0`)
- Progress Fill: Blue House (`#0077CC`)
- Height: 4px
- Text Indicator: "Shot X of Y" in Caption size

## 3. Iconography

### 3.1 Icon Style

**General Style**
- Line weight: 2px
- Corner style: Slightly rounded
- Size: 24px Ã— 24px (touchable areas minimum 44px Ã— 44px)
- Colors: Inherit from parent text or specified color

### 3.2 Key Icons

**Navigation Icons**
- Home: House symbol
- Back: Left arrow
- Settings: Gear symbol
- History: Clock with counterclockwise arrow

**Action Icons**
- Add: Plus symbol
- Delete: Trash can
- Edit: Pencil
- Share: Upward arrow from box
- Save: Disk symbol

**Curling-Specific Icons**
- Curling Stone: Top-down view of stone
- Curling House: Simplified target/house
- Laser Measure: Beam emitting from device
- Rotation (MP): Clockwise circular arrow
- Rotation (VP): Counterclockwise circular arrow

## 4. Data Visualization

### 4.1 Curling Sheet Representation

**Sheet Elements**
- Ice: Ice White (`#F0F8FF`) background
- Lines: Dark gray (`#333333`)
- House Rings:
  - 12-foot: Light blue (`#ADD8E6`)
  - 8-foot: Blue House (`#0077CC`)
  - 4-foot: Red House (`#D81E05`)
  - Button: White circle with Stone Granite (`#3A3A3A`) center dot

**Shot Markers**
- Target Position: "X" in Blue House (`#0077CC`)
- Actual Shot Position: Simplified curling stone icon in Stone Granite (`#3A3A3A`)
- Accuracy Indicator: Line connecting target to actual position

### 4.2 Statistical Visualizations

**Bar Charts**
- Bar Fill: Blue House (`#0077CC`)
- Background: Sheet Gray (`#E0E0E0`)
- Axes: Stone Granite (`#3A3A3A`)
- Labels: Caption size text

**Line Charts**
- Line: Blue House (`#0077CC`)
- Points: Filled circles, Blue House (`#0077CC`)
- Trend Improvement: Line Green (`#4CAF50`)
- Trend Decline: Red House (`#D81E05`)
- Grid Lines: Light Sheet Gray (`#F0F0F0`)

**Accuracy Indicators**
- High Accuracy (>85%): Line Green (`#4CAF50`)
- Medium Accuracy (60-85%): Yellow Button (`#FFD700`)
- Low Accuracy (<60%): Red House (`#D81E05`)

## 5. Responsive Behavior

### 5.1 Breakpoints

The application is mobile-first with optimization for:
- Small phones: 320px - 375px width
- Standard phones: 376px - 428px width
- Large phones: 429px - 896px width
- Tablets: Support for landscape orientation

### 5.2 Touch Targets

- Minimum touch target size: 44px Ã— 44px
- Minimum spacing between touchable elements: 8px
- Interactive elements positioned for thumb-friendly zones

### 5.3 Orientation Handling

**Portrait Orientation (Primary)**
- Full sheet visualization
- Vertical scrolling for longer content
- Bottom-aligned inputs for thumb access

**Landscape Orientation (Secondary)**
- Expanded sheet visualization
- Side-by-side layouts for forms and visualizations
- Adjusted navigation for horizontal layout

## 6. Accessibility Guidelines

### 6.1 Color & Contrast

- Minimum contrast ratio: 4.5:1 for normal text
- Minimum contrast ratio: 3:1 for large text
- Color is never the only indicator for state or information
- Alternative color schemes for colorblind users

### 6.2 Text Readability

- Minimum text size: 12px
- Line height: 1.5Ã— font size
- Letter spacing: Normal to slightly increased
- Paragraph width: Maximum 66 characters

### 6.3 Input Assistance

- Clear labels for all inputs
- Error messages are explicit and actionable
- Sufficient spacing around interactive elements
- Support for larger text sizes

## 7. Motion & Animations

### 7.1 Transitions

- Default duration: 300ms
- Easing: Ease-out for entering elements, Ease-in for exiting elements
- Reduced motion option for accessibility

### 7.2 Animation Types

- Page transitions: Slide from right, exit to left
- Element appearance: Fade in (200ms)
- Button feedback: Scale slightly (95%) on press
- Loading indicator: Subtle rotation animation

## 8. Voice & Tone

### 8.1 Text Guidelines

- Clear, concise instructions
- Active voice where possible
- Technical curling terminology with explanations where needed
- Friendly but focused tone

### 8.2 Error Messages

- Specific: Clearly state what went wrong
- Constructive: Explain how to fix the issue
- Polite: Avoid blame or technical jargon
- Example: "Please enter a distance between 0-500cm" instead of "Invalid input"

### 8.3 Success Messages

- Confirmatory: Clearly indicate successful actions
- Concise: Keep success messages brief
- Forward-looking: Suggest next steps when appropriate
- Example: "Shot saved! Ready for your next throw."

## 9. Component Usage Guidelines

This section provides guidance on when and how to use different components within the application.

### 9.1 When to Use Primary vs. Secondary Buttons

- Primary buttons: For the main action on a screen (e.g., "Start Practice", "Save & Next Shot")
- Secondary buttons: For alternative actions (e.g., "Cancel", "Back")
- Only one primary button should appear on a screen

### 9.2 Card Usage

- Use cards to group related information
- Maintain consistent padding within card groups
- Avoid nesting cards within cards
- Limit content within each card for scanability

### 9.3 Form Layout Guidelines

- Group related inputs
- Align labels consistently (left-aligned)
- Provide clear instruction text above complex inputs
- Match field width to expected content length

---

This design system will evolve as the application develops and user feedback is incorporated. All team members should reference this document when designing, developing, or reviewing the CurlingDrawWeightPractice application.