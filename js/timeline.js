var jsPsych = initJsPsych();

var timeline = [];

var imageDisplayDuration = 3000;

timeline.push(welcome());

timeline.push(displayImage('images/lux.jpg', imageDisplayDuration));
timeline.push(question());

timeline.push(displayImage('images/valo.jpg', imageDisplayDuration));
timeline.push(question());

timeline.push(goodbye());

jsPsych.run(timeline);
