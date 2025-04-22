function displayImage(imagePath, duration) {
    return {
      type: jsPsychImageKeyboardResponse,
      stimulus: imagePath,
      choices: 'NO_KEYS',
      trial_duration: duration
    };
  }
  
  function welcome() {
    return {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: "Welcome! Press any key to begin."
    };
  }
  
  function instructions() {
    return {
      type: jsPsychInstructions,
      pages: [
        'In this task, you will be shown an image of a character',
        
        'After 3 seconds, the image will disappear, and you will be asked to complete two tasks',
        '1. Answer the question: "Was this character from League of Legends?" <br><br>' +
        '2. Rate how confident you are in your answer, on a scale from 1 (not confident) to 5 (very confident)',
        'Click "Next" to begin the experiment.'
      ],
      show_clickable_nav: true
    };
  }
  
  
  
  function question() {
    return {
      type: jsPsychSurveyMultiChoice,
      questions: [
        {
          prompt: "Was this character from League of Legends?",
          name: 'league_test',
          options: ["Yes", "No"],
          required: true,
          horizontal: true
        },
        {
          prompt: "How confident are you in your answer? (1 = Not confident, 5 = Very confident)",
          name: 'confidence',
          options: ["1", "2", "3", "4", "5"],
          required: true,
          horizontal: true
        }
      ]
    };
  }
  
  function goodbye() {
    return {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: "Thank you for your participation. You may now close the window.",
      choices: "NO_KEYS"
    };
  }
  