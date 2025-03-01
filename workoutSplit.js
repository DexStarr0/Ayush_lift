const globalDailyWarmUp = [
  {
    exercise: "Treadmill brisk walk, cycling, or jump rope.",
    detail: "Duration: 3–5 minutes.",
  },
  {
    exercise: "Hip Flexor Stretch",
    detail: "30 sec/side – critical for desk workers.",
  },
  {
    exercise: "Thoracic Spine Rotations",
    detail: "5 reps/side – combat rounded shoulders.",
  },
  {
    exercise: "Cat-Cow Stretch",
    detail: "10 reps – spinal mobility.",
  },
  {
    exercise: "Shoulder Dislocations",
    detail: "10 reps – shoulder health.",
  },
  {
    exercise: "Band pull-aparts",
    detail: "3x20 before pressing days.",
  },
  {
    exercise: "Leg Swings",
    detail: "10 reps/side (front-to-back) – hip mobility.",
  },
  {
    exercise: "Ankle Rolls",
    detail: "10 reps/side – if you’re doing squats/deadlifts that day.",
  },
];

/**************************************
 * Workout Data Object (day-specific, object structure)
 **************************************/
const workoutData = {
  "Day 1": {
    name: "Day 1: Chest & Triceps (Upper Chest Focus)",
    specificWarmUp: [
      {
        exercise: "Band Chest Stretch",
        detail: "1 minute: hold a band behind your back and stretch the chest.",
      },
      {
        exercise: "Incline Push-Ups",
        detail: "2 sets x 15 reps (warm up shoulders and chest).",
      },
      {
        exercise: "Band External Rotations",
        detail: "2 sets x 15 reps/side",
      },
    ],
    mainExercises: [
      {
        exercise: "Incline Dumbbell Press",
        detail: "4 sets x 8-12 reps",
      },
      {
        exercise: "Low-Incline Smith Machine Press",
        detail: "4 sets x 10-12 reps",
      },
      {
        exercise: "Cable Chest Flyes (30° Incline)",
        detail: "3 sets x 12-15 reps + drop set",
      },
      { exercise: "Weighted Dips", detail: "3 sets x 8-10 reps" },
      {
        exercise: "Overhead Tricep Extension",
        detail: "3 sets x 12-15 reps",
      },
      {
        exercise: "Rope Pushdowns",
        detail: "3 sets x 15-20 reps",
      },
      {
        exercise: "Hanging Leg Raises",
        detail: "3 sets x 12-15 reps",
      },
    ],
  },
  "Day 2": {
    name: "Day 2: Back & Biceps (Rear Delts + Thickness)",
    specificWarmUp: [
      {
        exercise: "Lat Stretch",
        detail: "1 minute/side: hang from a pull-up bar or doorframe.",
      },
      {
        exercise: "Banded Face Pulls",
        detail: "2 sets x 20 reps – added for rear delts",
      },
      {
        exercise: "Band Rows or Empty-Bar Bent-Over Rows",
        detail: "2 sets x 12 reps",
      },
    ],
    mainExercises: [
      { exercise: "Deadlift", detail: "4 sets x 5-7 reps" },
      {
        exercise: "Wide-Grip Pull-Ups",
        detail: "4 sets x AMRAP",
      },
      {
        exercise: "Bent-Over Barbell Rows",
        detail: "4 sets x 8-12 reps",
      },
      {
        exercise: "Barbell Shrugs",
        detail: "4 sets x 10-15 reps",
      },
      {
        exercise: "Face Pulls",
        detail: "4 sets x 15-20 reps",
      },
      {
        exercise: "Preacher Curl",
        detail: "4 sets x 8-12 reps",
      },
      {
        exercise: "Reverse Curl",
        detail: "3 sets x 10-12 reps",
      },
      {
        exercise: "Hanging Leg Raises",
        detail: "3 sets x 12-15 reps",
      },
      {
        exercise: "Bird Dogs",
        detail: "3 sets x 20s holds/side",
      },
    ],
  },
  "Day 3": {
    name: "Day 3: Legs & Shoulders (Heavy Legs + Delts)",
    specificWarmUp: [
      {
        exercise: "Bodyweight Squats",
        detail: "2 sets x 20 reps: focus on depth.",
      },
      {
        exercise: "Glute Bridges",
        detail: "2 sets x 15 reps: fire up the posterior chain.",
      },
      {
        exercise: "Empty-Bar Overhead Press",
        detail: "2 sets x 12 reps",
      },
    ],
    mainExercises: [
      {
        exercise: "Barbell Back Squats",
        detail: "4 sets x 6-8 reps",
      },
      {
        exercise: "Barbell Overhead Press",
        detail: "4 sets x 6-8 reps",
      },
      {
        exercise: "Lateral Raises (Pyramid)",
        detail: "4 sets x 12-20 reps",
      },
      {
        exercise: "Romanian Deadlifts",
        detail: "4 sets x 8-10 reps",
      },
      {
        exercise: "Hamstring Curls",
        detail: "3 sets x 12-15 reps",
      },
      {
        exercise: "Leg Extensions",
        detail: "3 sets x 15-20 reps",
      },
      {
        exercise: "Bent-Over Lateral Raises",
        detail: "3 sets x 12-15 reps",
      },
      {
        exercise: "Russian Twists",
        detail: "3 sets x 20 reps/side",
      },
    ],
  },
  "Day 4": {
    name: "Day 4: Chest & Triceps (Full Chest + Pump)",
    specificWarmUp: [
      {
        exercise: "Band Chest Stretch",
        detail: "1 minute: hold a band behind your back and stretch the chest.",
      },
      {
        exercise: "Incline Push-Ups",
        detail: "2 sets x 15 reps (warm up shoulders and chest).",
      },
      {
        exercise: "Band External Rotations",
        detail: "2 sets x 15 reps/side",
      },
    ],
    mainExercises: [
      {
        exercise: "Flat Barbell Bench Press",
        detail: "4 sets x 6-8 reps",
      },
      {
        exercise: "Incline Hex Press",
        detail: "4 sets x 8-12 reps",
      },
      {
        exercise: "Cable Flyes (Mid-Chest Height)",
        detail: "3 sets x 15-20 reps + drop set",
      },
      {
        exercise: "Incline Cable Flyes (Low-to-High)",
        detail: "3 sets x 12-15 reps + drop set",
      },
      {
        exercise: "Skull Crushers",
        detail: "3 sets x 10-12 reps",
      },
      {
        exercise: "Tricep Pushdowns",
        detail: "3 sets x 15-20 reps",
      },
      {
        exercise: "Plank with Shoulder Taps",
        detail: "3 sets x 45-60 seconds",
      },
    ],
  },
  "Day 5": {
    name: "Day 5: Back & Biceps (Upper Back + Width)",
    specificWarmUp: [
      {
        exercise: "Lat Stretch",
        detail: "1 minute/side: hang from a pull-up bar or doorframe.",
      },
      {
        exercise: "Banded Face Pulls",
        detail: "2 sets x 20 reps – added for rear delts",
      },
      {
        exercise: "Light Hammer Curls",
        detail: "2 sets x 15 reps: use 40% of your working weight.",
      },
    ],
    mainExercises: [
      {
        exercise: "Weighted Chin-Ups",
        detail: "4 sets x 6-8 reps",
      },
      {
        exercise: "Single-Arm Dumbbell Rows",
        detail: "4 sets x 8-12 reps",
      },
      {
        exercise: "Lat Pulldown (Wide Grip)",
        detail: "3 sets x 12-15 reps",
      },
      {
        exercise: "Cable Upright Rows",
        detail: "3 sets x 12-15 reps",
      },
      {
        exercise: "Hammer Curl",
        detail: "4 sets x 10-12 reps",
      },
      {
        exercise: "Spider Curl",
        detail: "3 sets x 12-15 reps",
      },
      {
        exercise: "Cable Woodchoppers",
        detail: "3 sets x 12-15 reps/side",
      },
      {
        exercise: "Back Extensions",
        detail: "3 sets x 12-15 reps",
      },
    ],
  },
  "Day 6": {
    name: "Day 6: Legs & Shoulders (Hypertrophy Legs + Delts)",
    specificWarmUp: [
      {
        exercise: "Bodyweight Squats",
        detail: "2 sets x 20 reps: focus on depth.",
      },
      {
        exercise: "Glute Bridges",
        detail: "2 sets x 15 reps: fire up the posterior chain.",
      },
      {
        exercise: "Scapular Push-Ups",
        detail: "2 sets x 10 reps: strengthen shoulder blades.",
      },
    ],
    mainExercises: [
      {
        exercise: "Bulgarian Split Squats",
        detail: "4 sets x 10-12 reps/leg",
      },
      {
        exercise: "Leg Press",
        detail: "4 sets x 15-20 reps",
      },
      {
        exercise: "Glute-Focused Hip Thrusts",
        detail: "3 sets x 10-12 reps",
      },
      {
        exercise: "Standing Calf Raises",
        detail: "4 sets x 20-25 reps",
      },
      {
        exercise: "Leg Extensions",
        detail: "3 sets x 15-20 reps",
      },
      {
        exercise: "Reverse Pec Deck",
        detail: "3 sets x 15 reps",
      },
      {
        exercise: "Seated Dumbbell Overhead Press",
        detail: "4 sets x 8-12 reps",
      },
      {
        exercise: "Cable Lateral Raises",
        detail: "3 sets x 15-20 reps",
      },
    ],
  },
};
