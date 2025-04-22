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
  
  function question() {
    return {
      type: jsPsychSurveyMultiChoice,
      questions: [
        {
          prompt: "Is this character from League of Legends?",
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
      choices: "NO_KEYS"  // or `[" "]` if you want them to press something to continue
    };
  }
  