var jsPsych = initJsPsych({
    show_progress_bar: true, // Enable the default progress bar
    auto_update_progress_bar: true // Allow automatic progress bar updates
  });
  
  var timeline = [];
  
  var imageDisplayDuration = 3000; // Image display duration
  var totalQuestions = 2;
  
  // Welcome and instructions
  timeline.push(welcome());
  timeline.push(instructions());
  
  // Display images and ask questions
  timeline.push(displayImage('images/lux.jpg', imageDisplayDuration));
  timeline.push(question());
  
  timeline.push(displayImage('images/valo.jpg', imageDisplayDuration));
  timeline.push(question());
  
  // Goodbye message
  timeline.push(goodbye());
  
  // Run the experiment
  jsPsych.run(timeline);
  