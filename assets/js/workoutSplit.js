const globalDailyWarmUp = [
  {
    exercise: "1. Treadmill brisk walk, cycling, or jump rope.",
    detail: "Duration: 3–5 minutes.",
  },
  {
    exercise: "2. Hip Flexor Stretch",
    detail: "30 sec/side – critical for desk workers.",
  },
  {
    exercise: "3. Thoracic Spine Rotations",
    detail: "5 reps/side – combat rounded shoulders.",
  },
  {
    exercise: "4. Cat-Cow Stretch",
    detail: "10 reps – spinal mobility.",
  },
  {
    exercise: "5. Shoulder Dislocations",
    detail: "10 reps – shoulder health.",
  },
  {
    exercise: "6. Band pull-aparts",
    detail: "3x20 before pressing days.",
  },
  {
    exercise: "7. Leg Swings",
    detail: "10 reps/side (front-to-back) – hip mobility.",
  },
  {
    exercise: "8. Ankle Rolls",
    detail: "10 reps/side – if you’re doing squats/deadlifts that day.",
  },
];

const workoutData = {
  "Day 5": {
    name: "Day 5: Chest & Triceps (Upper Chest Focus)",
    specificWarmUp: [
      {
        exercise: "1. Band Chest Stretch",
        detail: "1 minute: hold a band behind your back and stretch the chest.",
      },
      {
        exercise: "2. Incline Push-Ups",
        detail: "2 sets x 15 reps (warm up shoulders and chest).",
      },
      {
        exercise: "3. Band External Rotations",
        detail: "2 sets x 15 reps/side",
      },
    ],
    mainExercises: [
      {
        exercise: "1. Incline Dumbbell Press",
        detail: "4 sets x 8-12 reps (Upper chest)",
      },
      {
        exercise: "2. Incline Cable Flyes (Low-to-High)",
        detail: "3 sets x 12-15 reps",
      },
      {
        exercise: "3. Cable Chest Flyes (30° Incline)",
        detail: "3 sets x 12-15 reps + dropset",
      },
      {
        exercise: "4. Weighted Dips",
        detail: "3 sets x 8-10 reps (Lower chest/triceps)",
      },
      {
        exercise: "5. Overhead Tricep Extension",
        detail: "3 sets x 12-15 reps",
      },
      {
        exercise: "6. Rope Pushdowns",
        detail: "3 sets x 15-20 reps",
      },
      {
        exercise: "Core - Hanging Leg Raises",
        detail: "3 sets x 12-15 reps",
      },
    ],
  },
  "Day 6": {
    name: "Day 6: Back & Biceps (Rear Delts + Thickness)",
    specificWarmUp: [
      {
        exercise: "1. Lat Stretch",
        detail: "1 minute/side: hang from a pull-up bar or doorframe.",
      },
      {
        exercise: "2. Banded Face Pulls",
        detail: "2 sets x 20 reps – added for rear delts",
      },
      {
        exercise: "3. Band Rows or Empty-Bar Bent-Over Rows",
        detail: "2 sets x 12 reps",
      },
    ],
    mainExercises: [
      {
        exercise: "1. Wide-Grip Pull-Ups",
        detail: "4 sets x AMRAP",
      },
      {
        exercise: "2. Deadlift",
        detail: "4 sets x 5-7 reps (Posterior chain)",
      },
      {
        exercise: "3. Bent-Over Barbell Rows",
        detail: "4 sets x 8-12 reps",
      },
      {
        exercise: "4. Reverse Grip Lat Pulldowns",
        detail: "4 sets x 8-12 reps",
      },
      {
        exercise: "5. Face Pulls",
        detail: "4 sets x 15-20 reps (Rear delts)",
      },
      {
        exercise: "6. Preacher Curl",
        detail: "4 sets x 8-12 reps",
      },
      {
        exercise: "7. Incline Dumbbell Curls",
        detail: "3 sets x 10-12 reps",
      },
      {
        exercise: "Core - Bird Dogs",
        detail: "3 sets x 20s holds/side",
      },
    ],
  },
  "Day 3": {
    name: "Day 3: Shoulders (Full Delt Emphasis)",
    specificWarmUp: [
      {
        exercise: "1. Band External Rotations",
        detail: "2 sets x 15 reps/side",
      },
      {
        exercise: "2. Scapular Push-Ups",
        detail: "2 sets x 10 reps",
      },
    ],
    mainExercises: [
      {
        exercise: "1. Seated Dumbbell Overhead Press",
        detail: "4 sets x 8-12 reps (Anterior delts)",
      },
      {
        exercise: "2. Arnold Press",
        detail: "4 sets x 8-12 reps (360° delt activation)",
      },
      {
        exercise: "3. Cable Lateral Raises",
        detail: "4 sets x 15-20 reps (Side delts)",
      },
      {
        exercise: "4. Front Raises",
        detail: "3 sets x 12-15 reps (Anterior delt isolation)",
      },
      {
        exercise: "5. Reverse Pec Deck Flyes",
        detail: "3 sets x 15-20 reps (Rear delts)",
      },
      {
        exercise: "Core - Plank with Shoulder Taps",
        detail: "3 sets x 45-60 seconds",
      },
    ],
  },
  "Day 1": {
    name: "Day 1: Chest & Triceps (Full Chest + Pump)",
    specificWarmUp: [
      {
        exercise: "1. Band Chest Stretch",
        detail: "1 minute: hold a band behind your back and stretch the chest.",
      },
      {
        exercise: "2. Incline Push-Ups",
        detail: "2 sets x 15 reps (warm up shoulders and chest).",
      },
      {
        exercise: "3. Band External Rotations",
        detail: "2 sets x 15 reps/side",
      },
    ],
    mainExercises: [
      {
        exercise: "1. Flat Barbell Bench Press",
        detail: "4 sets x 6-8 reps (Mid-chest strength)",
      },
      {
        exercise: "2. Incline Hex Press",
        detail: "4 sets x 8-12 reps (Upper chest squeeze)",
      },
      {
        exercise: "3. Cable Flyes (Mid-Chest Height)",
        detail: "3 sets x 15-20 reps + dropset",
      },
      {
        exercise: "4. Low-to-High Cable Crossovers",
        detail: "3 sets x 12-15 reps",
      },
      {
        exercise: "5. Skull Crushers",
        detail: "3 sets x 10-12 reps",
      },
      {
        exercise: "6. Tricep Pushdowns",
        detail: "3 sets x 15-20 reps",
      },
      {
        exercise: "Core - Russian Twists",
        detail: "3 sets x 20 reps/side",
      },
    ],
  },
  "Day 2": {
    name: "Day 2: Back & Biceps (Upper Back + Width)",
    specificWarmUp: [
      {
        exercise: "1. Lat Stretch",
        detail: "1 minute/side: hang from a pull-up bar or doorframe.",
      },
      {
        exercise: "2. Banded Face Pulls",
        detail: "2 sets x 20 reps – added for rear delts",
      },
      {
        exercise: "3. Light Hammer Curls",
        detail: "2 sets x 15 reps: use 40% of your working weight.",
      },
    ],
    mainExercises: [
      {
        exercise: "1. Weighted Chin-Ups",
        detail: "4 sets x 6-8 reps",
      },
      {
        exercise: "2. Single-Arm Dumbbell Rows",
        detail: "4 sets x 8-12 reps",
      },
      {
        exercise: "3. Lat Pulldown (Wide Grip)",
        detail: "3 sets x 12-15 reps",
      },
      {
        exercise: "4. Cable Upright Rows (Wide Grip) or Wide-Grip T-Bar Rows",
        detail: "4 sets x 12-15 reps",
      },
      {
        exercise: "5. Seated Cable Rows (Neutral Grip)",
        detail: "4 sets x 8-12 reps",
      },
      {
        exercise: "6. Hammer Curl",
        detail: "4 sets x 10-12 reps",
      },
      {
        exercise: "7. Spider Curl",
        detail: "3 sets x 12-15 reps",
      },
      {
        exercise: "Core - Cable Woodchoppers",
        detail: "3 sets x 12-15 reps/side",
      },
    ],
  },
  "Day 4": {
    name: "Day 4: Legs (Hypertrophy Focus)",
    specificWarmUp: [
      {
        exercise: "1. Bodyweight Squats",
        detail: "2 sets x 20 reps: focus on depth.",
      },
      {
        exercise: "2. Glute Bridges",
        detail: "2 sets x 15 reps: fire up the posterior chain.",
      },
      {
        exercise: "3. Ankle Rolls",
        detail: "2 sets x 10 reps/side",
      },
    ],
    mainExercises: [
      {
        exercise: "1. Barbell Back Squats",
        detail: "4 sets x 6-8 reps (Heavy strength)",
      },
      {
        exercise: "2. Romanian Deadlifts",
        detail: "4 sets x 8-10 reps (Hamstrings/glutes)",
      },
      {
        exercise: "3. Leg Press",
        detail: "4 sets x 15-20 reps (Quad hypertrophy)",
      },
      {
        exercise: "4. Bulgarian Split Squats",
        detail: "4 sets x 10-12 reps/leg",
      },
      {
        exercise: "5. Glute-Focused Hip Thrusts",
        detail: "3 sets x 10-12 reps",
      },
      {
        exercise: "6. Hamstring Curls",
        detail: "3 sets x 12-15 reps",
      },
      {
        exercise: "7. Standing Calf Raises",
        detail: "4 sets x 20-25 reps",
      },
    ],
  },
};
