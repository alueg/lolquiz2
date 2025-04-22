const jsPsych = initJsPsych({
  on_finish: function () {
    jsPsych.data.displayData(); // show data at end
  }
});

const timeline = [];

timeline.push({
  type: jsPsychImage,
  stimulus: 'images/lux.jpg',
  trial_duration: 20000
});

timeline.push({
  type: jsPsychSurveyMultiChoice,
  questions: [
    {
      prompt: "Is this character from League of Legends?",
      options: ["Yes", "No"],
      required: true,
      name: 'league_test'
    }
  ]
});

jsPsych.run(timeline);
