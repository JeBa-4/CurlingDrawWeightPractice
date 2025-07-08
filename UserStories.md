# User Stories - CurlingDrawWeightPractice

This document contains the user stories that guide the development of the CurlingDrawWeightPractice application. User stories are organized by release priorities (MVP and Future Enhancements) and describe the functionality from the perspective of the curling player.

## MVP User Stories

### 1. Basic Shot Recording

```
As a curling player,
I want to record the accuracy of each shot by inputting two integer values:
1) Distance in centimeters (measured from the target to the edge of the stone with a laser meter)
2) Direction as an angle in degrees (where 0Â° points toward the delivery end, 90Â° points left, 180Â° points to the back of the sheet, and 270Â° points right)
So that I can precisely track my draw weight accuracy and analyze my consistency patterns.
```

*Acceptance Criteria:*
- User can input distance in centimeters (integer value)
- User can input direction as an angle between 0-359 degrees (integer value) 
- The angle reference system is clearly indicated (0Â° = toward delivery end)
- The system validates inputs (positive integers only)
- Measurements are saved with the corresponding shot type
- User can easily proceed to the next shot after recording

### 2. Practice Session Management

```
As a curling player,
I want to start a new practice session with predefined target locations,
So that I can practice draws to specific locations on the sheet.
```

*Acceptance Criteria:*
- User can start a new practice session
- System presents the 10 predefined shot types (VK, VL, VT, OK, OL, OT, PV, ES, T, TS) in sequence
- Each shot type has a defined target location on the sheet
- User is prompted to input results for each shot type
- Session is saved with date and time

### 3. Shot Type Rotation

```
As a curling player,
I want each shot to have the correct rotation (MP/clockwise for right-side shots, VP/counterclockwise for left-side shots),
So that my practice matches real game throwing mechanics.
```

*Acceptance Criteria:*
- Right-side shots (O-prefix) use MP/clockwise rotation by default
- Left-side shots (V-prefix) use VP/counterclockwise rotation by default
- For the four center-line shots, the following rotation rules apply:
  - T and PV shots must always have the same rotation (either both MP or both VP)
  - ES and TS shots must always have the same rotation, opposite to T and PV
  - This ensures exactly two center line shots use MP and two use VP rotation
- The center-line rotation assignments are predetermined for a session but vary between sessions
- Shot type display clearly indicates the required rotation
- Rotation terminology is displayed using appropriate abbreviations (MP/VP or CW/CCW) based on language settings

### 4. Shot Results Visualization

```
As a curling player,
I want to see a visual representation of my shots compared to targets with shot type labels,
So that I can understand my drawing accuracy patterns for different shot types.
```

*Acceptance Criteria:*
- User can view a graphical representation of the curling sheet
- Target locations for each shot type (VK, VL, VT, etc.) are clearly marked
- Actual shot locations are displayed based on input data
- Shot types and rotation (where applicable) are labeled on the visualization
- Distance from target is calculated and displayed for each shot

### 5. Practice History

```
As a curling player,
I want to view my previous practice sessions with results categorized by shot type,
So that I can track my progress for specific shot types over time.
```

*Acceptance Criteria:*
- User can access a list of previous practice sessions
- User can select a session to view detailed results
- Results are organized by shot type (VK, VL, VT, etc.)
- For PV, ES, T, and TS shots, rotation (MP/VP) is displayed
- User can filter history to see performance for specific shot types

## Future Enhancement User Stories

### 6. Shot Type Performance Analysis

```
As a curling player,
I want to see statistics about my drawing accuracy for each shot type,
So that I can identify which specific shots need more practice.
```

*Acceptance Criteria:*
- System calculates average accuracy for each shot type
- Performance trends are displayed over time
- Shot types are ranked from most to least accurate
- Rotation impact (MP vs VP) is analyzed for applicable shot types

### 7. Custom Practice Sequence

```
As a curling player,
I want to create custom practice sequences using the standard shot types,
So that I can focus on specific shots that need improvement.
```

*Acceptance Criteria:*
- User can select which shot types to include in a practice session
- User can determine the order of shots
- User can specify the number of repetitions for each shot type
- System maintains rotation alternation rules for applicable shots

### 8. Team Practice Mode

```
As a curling team captain,
I want to track practice results for multiple players,
So that I can monitor the team's overall drawing capabilities.
```

*Acceptance Criteria:*
- User can create and manage player profiles
- Practice sessions can be assigned to specific players
- Team statistics can be viewed across all players
- Comparative performance can be analyzed

### 9. Video Integration

```
As a curling player,
I want to attach short video clips to my shot records,
So that I can review my technique alongside the results.
```

*Acceptance Criteria:*
- User can record or upload short videos for shots
- Videos are linked to specific shots in the practice session
- Videos can be played back during review
- Storage is optimized for mobile devices

### 10. Export/Share Function

```
As a curling player,
I want to export my practice data or share with my coach,
So that I can receive expert feedback on my progress.
```

*Acceptance Criteria:*
- User can export practice data in standard formats (CSV, PDF)
- User can share results via email or messaging
- Coaches can receive links to view practice results
- Privacy settings control what information is shared

## Shot Type Definitions

For reference, the 10 standard shot types used in the application are:

1. **VK (Left side long guard)**
   - Position: 1 meter from Hog Line, left of center line
   - Purpose: Long guard on the left side

2. **VL (Left side short guard)**
   - Position: 1.5 meters from top of House, left of center line
   - Purpose: Short guard on the left side

3. **VT (Left side tee line shot)**
   - Position: On tee line, 7ft (2.13m) left of center line (middle of 8ft circle)
   - Purpose: Draw to the 8-foot on the left side

4. **OK (Right side long guard)**
   - Position: 1 meter from Hog Line, right of center line
   - Purpose: Long guard on the right side

5. **OL (Right side short guard)**
   - Position: 1.5 meters from top of House, right of center line
   - Purpose: Short guard on the right side

6. **OT (Right side tee line shot)**
   - Position: On tee line, 7ft (2.13m) right of center line (middle of 8ft circle)
   - Purpose: Draw to the 8-foot on the right side

7. **PV (Center line half-way guard)**
   - Position: On center line, halfway between Hog Line and top of House
   - Purpose: Center guard
   - Rotation: Will alternate between MP (clockwise) and VP (counterclockwise)

8. **ES (Center line draw to 8-foot)**
   - Position: On center line, 7ft short of tee line (middle of 8ft circle)
   - Purpose: Draw to the top 8-foot
   - Rotation: Will alternate between MP and VP

9. **T (Button)**
   - Position: In the middle of the house (on the button at the tee line)
   - Purpose: Draw to the button/center of the house
   - Rotation: Will alternate between MP and VP

10. **TS (Back 8-foot)**
    - Position: In the middle of 8ft circle in back house on center line
    - Purpose: Draw to the back 8-foot on the center line
    - Rotation: Will alternate between MP and VP