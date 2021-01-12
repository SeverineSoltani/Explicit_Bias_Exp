function Main_Exp(timeline) {

 	var pracStimuli = jsPsych.randomization.shuffle(['CFD-BF-005-001-N.jpg', 'CFD-BF-007-001-N.jpg', 'CFD-BF-011-002-N.jpg', 'CFD-BF-015-004-N.jpg', 'CFD-BF-020-002-N.jpg', 'CFD-BF-042-026-N.jpg', 'CFD-BF-044-034-N.jpg', 'CFD-BF-206-143-N.jpg', 'CFD-BF-209-172-N.jpg', 'CFD-BF-212-315-N.jpg', 'CFD-BF-213-188-N.jpg', 'CFD-BF-216-132-N.jpg', 'CFD-BF-217-189-N.jpg', 'CFD-BF-227-137-N.jpg', 'CFD-BF-231-202-N.jpg', 'CFD-BF-232-187-N.jpg', 'CFD-BF-233-116-N.jpg', 'CFD-BF-244-231-N.jpg', 'CFD-BF-246-170-N.jpg', 'CFD-BF-247-179-N.jpg', 'CFD-BM-003-003-N.jpg', 'CFD-BM-020-001-N.jpg', 'CFD-BM-022-022-N.jpg', 'CFD-BM-023-029-N.jpg', 'CFD-BM-026-002-N.jpg', 'CFD-BM-038-001-N.jpg', 'CFD-BM-200-046-N.jpg', 'CFD-BM-202-063-N.jpg', 'CFD-BM-206-114-N.jpg', 'CFD-BM-213-134-N.jpg', 'CFD-BM-215-155-N.jpg', 'CFD-BM-227-191-N.jpg', 'CFD-BM-229-209-N.jpg', 'CFD-BM-230-232-N.jpg', 'CFD-BM-234-172-N.jpg', 'CFD-BM-235-226-N.jpg', 'CFD-BM-237-188-N.jpg', 'CFD-BM-238-242-N.jpg', 'CFD-BM-245-164-N.jpg', 'CFD-BM-248-128-N.jpg', 'CFD-WF-002-004-N.jpg', 'CFD-WF-003-003-N.jpg', 'CFD-WF-005-010-N.jpg', 'CFD-WF-012-002-N.jpg', 'CFD-WF-015-006-N.jpg', 'CFD-WF-024-003-N.jpg', 'CFD-WF-025-019-N.jpg', 'CFD-WF-026-002-N.jpg', 'CFD-WF-029-002-N.jpg', 'CFD-WF-034-006-N.jpg', 'CFD-WF-209-052-N.jpg', 'CFD-WF-210-086-N.jpg', 'CFD-WF-219-038-N.jpg', 'CFD-WF-221-005-N.jpg', 'CFD-WF-229-004-N.jpg', 'CFD-WF-231-099-N.jpg', 'CFD-WF-236-107-N.jpg', 'CFD-WF-240-083-N.jpg', 'CFD-WF-248-129-N.jpg', 'CFD-WF-251-014-N.jpg', 'CFD-WM-009-002-N.jpg', 'CFD-WM-017-002-N.jpg', 'CFD-WM-019-003-N.jpg', 'CFD-WM-025-002-N.jpg', 'CFD-WM-028-003-N.jpg', 'CFD-WM-035-032-N.jpg', 'CFD-WM-039-018-N.jpg', 'CFD-WM-203-023-N.jpg', 'CFD-WM-204-031-N.jpg', 'CFD-WM-206-045-N.jpg', 'CFD-WM-211-054-N.jpg', 'CFD-WM-214-026-N.jpg', 'CFD-WM-220-068-N.jpg', 'CFD-WM-222-057-N.jpg', 'CFD-WM-229-129-N.jpg', 'CFD-WM-235-147-N.jpg', 'CFD-WM-243-107-N.jpg', 'CFD-WM-248-036-N.jpg', 'CFD-WM-251-002-N.jpg', 'CFD-WM-258-125-N.jpg']);
	var stimuli = [jsPsych.randomization.shuffle(['CFD-BF-001-025-N.jpg', 'CFD-BF-006-017-N.jpg', 'CFD-BF-010-001-N.jpg', 'CFD-BF-018-039-N.jpg', 'CFD-BF-027-002-N.jpg', 'CFD-BF-030-002-N.jpg', 'CFD-BF-036-027-N.jpg', 'CFD-BF-043-003-N.jpg', 'CFD-BF-048-002-N.jpg', 'CFD-BM-001-014-N.jpg', 'CFD-BM-010-003-N.jpg', 'CFD-BM-017-021-N.jpg', 'CFD-BM-019-002-N.jpg', 'CFD-BM-034-031-N.jpg', 'CFD-BM-208-065-N.jpg', 'CFD-BM-232-213-N.jpg', 'CFD-BM-244-197-N.jpg', 'CFD-BM-252-161-N.jpg', 'CFD-WF-007-001-N.jpg', 'CFD-WF-014-002-N.jpg', 'CFD-WF-017-003-N.jpg', 'CFD-WF-018-017-N.jpg', 'CFD-WF-028-023-N.jpg', 'CFD-WF-038-021-N.jpg', 'CFD-WF-201-156-N.jpg', 'CFD-WF-215-145-N.jpg', 'CFD-WF-245-084-N.jpg', 'CFD-WM-003-002-N.jpg', 'CFD-WM-018-002-N.jpg', 'CFD-WM-021-001-N.jpg', 'CFD-WM-022-001-N.jpg', 'CFD-WM-033-025-N.jpg', 'CFD-WM-231-112-N.jpg', 'CFD-WM-238-020-N.jpg', 'CFD-WM-239-128-N.jpg', 'CFD-WM-257-161-N.jpg']),jsPsych.randomization.shuffle(['CFD-BF-001-025-N.jpg', 'CFD-BF-006-017-N.jpg', 'CFD-BF-010-001-N.jpg', 'CFD-BF-018-039-N.jpg', 'CFD-BF-027-002-N.jpg', 'CFD-BF-030-002-N.jpg', 'CFD-BF-036-027-N.jpg', 'CFD-BF-043-003-N.jpg', 'CFD-BF-048-002-N.jpg', 'CFD-BM-001-014-N.jpg', 'CFD-BM-010-003-N.jpg', 'CFD-BM-017-021-N.jpg', 'CFD-BM-019-002-N.jpg', 'CFD-BM-034-031-N.jpg', 'CFD-BM-208-065-N.jpg', 'CFD-BM-232-213-N.jpg', 'CFD-BM-244-197-N.jpg', 'CFD-BM-252-161-N.jpg', 'CFD-WF-007-001-N.jpg', 'CFD-WF-014-002-N.jpg', 'CFD-WF-017-003-N.jpg', 'CFD-WF-018-017-N.jpg', 'CFD-WF-028-023-N.jpg', 'CFD-WF-038-021-N.jpg', 'CFD-WF-201-156-N.jpg', 'CFD-WF-215-145-N.jpg', 'CFD-WF-245-084-N.jpg', 'CFD-WM-003-002-N.jpg', 'CFD-WM-018-002-N.jpg', 'CFD-WM-021-001-N.jpg', 'CFD-WM-022-001-N.jpg', 'CFD-WM-033-025-N.jpg', 'CFD-WM-231-112-N.jpg', 'CFD-WM-238-020-N.jpg', 'CFD-WM-239-128-N.jpg', 'CFD-WM-257-161-N.jpg'])];
	var stimuliB = jsPsych.randomization.shuffle(['CFD-BF-004-014-N.jpg', 'CFD-BF-008-001-N.jpg', 'CFD-BF-016-017-N.jpg', 'CFD-BF-021-013-N.jpg', 'CFD-BF-025-002-N.jpg', 'CFD-BF-028-001-N.jpg', 'CFD-BF-031-002-N.jpg', 'CFD-BF-037-022-N.jpg', 'CFD-BF-039-031-N.jpg', 'CFD-BF-045-003-N.jpg', 'CFD-BF-047-003-N.jpg', 'CFD-BF-207-004-N.jpg', 'CFD-BF-208-266-N.jpg', 'CFD-BF-211-168-N.jpg', 'CFD-BF-215-177-N.jpg', 'CFD-BF-222-240-N.jpg', 'CFD-BF-225-192-N.jpg', 'CFD-BF-230-189-N.jpg', 'CFD-BF-234-167-N.jpg', 'CFD-BF-235-168-N.jpg', 'CFD-BF-238-190-N.jpg', 'CFD-BF-239-180-N.jpg', 'CFD-BF-248-149-N.jpg', 'CFD-BF-250-121-N.jpg', 'CFD-BF-252-191-N.jpg', 'CFD-BF-253-202-N.jpg', 'CFD-BM-002-013-N.jpg', 'CFD-BM-004-002-N.jpg', 'CFD-BM-005-003-N.jpg', 'CFD-BM-009-002-N.jpg', 'CFD-BM-011-016-N.jpg', 'CFD-BM-021-021-N.jpg', 'CFD-BM-029-024-N.jpg', 'CFD-BM-030-003-N.jpg', 'CFD-BM-031-003-N.jpg', 'CFD-BM-032-024-N.jpg', 'CFD-BM-033-003-N.jpg', 'CFD-BM-036-003-N.jpg', 'CFD-BM-039-029-N.jpg', 'CFD-BM-041-035-N.jpg', 'CFD-BM-045-004-N.jpg', 'CFD-BM-046-006-N.jpg', 'CFD-BM-203-001-N.jpg', 'CFD-BM-207-024-N.jpg', 'CFD-BM-210-148-N.jpg', 'CFD-BM-222-173-N.jpg', 'CFD-BM-224-073-N.jpg', 'CFD-BM-228-145-N.jpg', 'CFD-BM-231-155-N.jpg', 'CFD-BM-236-248-N.jpg', 'CFD-BM-242-233-N.jpg', 'CFD-BM-246-192-N.jpg', 'CFD-WF-001-003-N.jpg', 'CFD-WF-006-002-N.jpg', 'CFD-WF-009-001-N.jpg', 'CFD-WF-016-015-N.jpg', 'CFD-WF-019-005-N.jpg', 'CFD-WF-020-002-N.jpg', 'CFD-WF-021-002-N.jpg', 'CFD-WF-023-003-N.jpg', 'CFD-WF-030-002-N.jpg', 'CFD-WF-035-024-N.jpg', 'CFD-WF-036-023-N.jpg', 'CFD-WF-037-029-N.jpg', 'CFD-WF-039-025-N.jpg', 'CFD-WF-200-099-N.jpg', 'CFD-WF-202-056-N.jpg', 'CFD-WF-214-122-N.jpg', 'CFD-WF-217-085-N.jpg', 'CFD-WF-218-087-N.jpg', 'CFD-WF-222-092-N.jpg', 'CFD-WF-223-133-N.jpg', 'CFD-WF-225-101-N.jpg', 'CFD-WF-227-002-N.jpg', 'CFD-WF-228-196-N.jpg', 'CFD-WF-244-163-N.jpg', 'CFD-WF-246-087-N.jpg', 'CFD-WF-252-159-N.jpg', 'CFD-WM-001-014-N.jpg', 'CFD-WM-011-002-N.jpg', 'CFD-WM-013-001-N.jpg', 'CFD-WM-014-002-N.jpg', 'CFD-WM-015-002-N.jpg', 'CFD-WM-020-001-N.jpg', 'CFD-WM-031-003-N.jpg', 'CFD-WM-032-001-N.jpg', 'CFD-WM-034-030-N.jpg', 'CFD-WM-040-022-N.jpg', 'CFD-WM-202-107-N.jpg', 'CFD-WM-205-007-N.jpg', 'CFD-WM-210-057-N.jpg', 'CFD-WM-212-097-N.jpg', 'CFD-WM-213-076-N.jpg', 'CFD-WM-216-061-N.jpg', 'CFD-WM-218-074-N.jpg', 'CFD-WM-221-091-N.jpg', 'CFD-WM-225-127-N.jpg', 'CFD-WM-230-131-N.jpg', 'CFD-WM-232-070-N.jpg', 'CFD-WM-234-118-N.jpg', 'CFD-WM-240-125-N.jpg', 'CFD-WM-245-123-N.jpg', 'CFD-WM-247-084-N.jpg', 'CFD-WM-252-224-N.jpg']);
	
	
	var trainNumsRaw = [0,1,2,3,4];
	var trainFaces = jsPsych.randomization.shuffle(['CFD-BM-012-018-N.jpg', 'CFD-BM-018-001-N.jpg', 'CFD-BM-028-002-N.jpg',
          'CFD-BM-211-174-N.jpg', 'CFD-BM-243-218-N.jpg']);
	var trainFacesW = jsPsych.randomization.shuffle(['CFD-WM-012-001-N.jpg', 'CFD-WM-016-001-N.jpg', 'CFD-WM-024-015-N.jpg',
          'CFD-WM-223-056-N.jpg', 'CFD-WM-237-052-N.jpg']);
	var trainFaceNums = jsPsych.randomization.shuffle([1,2,3,4,5]);
	var facesUse = [];
	var pracStimuliIt = -1;
	var stimuliIt = -1;
	var bStimuliIt = -1;
	var bSubTaskIt = 0;
	var scenarios = jsPsych.randomization.shuffle([0,1,2]);
	var mainIt = 0;
	var traitIt = 0;
	var fixationMean = 200;
	var fixationSTDev = 50;
	var pracStreak = 0;
	var inStreak = 0;
	var streakCorrect = 0;
	var taskOrderIt = 0;
	var needsFixation = true;
	var memIt = 0;
	var memShow = 0;
	var memMax = 2;
	var wasCorrect = 0;
	var timesThruA = 0;
	var hasFeedback = 1;

	var scenarioNames = ["Stranded Motorist", "Asking for Directions", "Dating Profile"];
	if (inCongruentIt === 1) {
		trainFaces = trainFacesW;
	}
	
	
	if (demo === 1){
		stimuli[0] = stimuli[0].slice(0,4);
		stimuli[1] = stimuli[1].slice(0,4);
		trainNumsRaw = [0,1,2];
		trainFaces = jsPsych.randomization.shuffle(trainFaces).slice(0,3);
		trainFaceNums = [1,2,3];
		stimuliB = stimuliB.slice(0,3);
	}    
	
	var bInstructionScreen = function(){ return {
		type: "html-keyboard-response",
		stimulus: "<div style='position:absolute;top:10%;width:100%;display:table;left:0;'><h3 style='display:table-cell;font-size:2rem;'>" +
					"Task A: Social Scenarios</h3></div>" +
					"<div style='position:absolute;top:30%;width:100%;display:table;left:15%;text-align:center;'><h3 style='display:table-cell;text-align:left;'>" +
					"In the following, imagine yourself in different social scenarios, and answer<br> questions about the faces you see in each scenario." + 
					"</h3></div>"+ 
					"<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
					"Press any key to continue</h3></div>",
		choices: jsPsych.ALL_KEYS,
		on_finish: function(){
				jsPsych.pauseExperiment();
				bStimuliIt = -1;
				stimuliB = jsPsych.randomization.shuffle(stimuliB);
				if (scenarios[bSubTaskIt] == 0) {
					jsPsych.addNodeToEndOfTimeline(motorist, jsPsych.resumeExperiment);
				} else if (scenarios[bSubTaskIt] == 1) {
					jsPsych.addNodeToEndOfTimeline(lost, jsPsych.resumeExperiment);
				} else {
					jsPsych.addNodeToEndOfTimeline(dating, jsPsych.resumeExperiment);
				}
				
		}
    };};

	var motorist = {
		type: "html-keyboard-response",
		stimulus: "<div style='position:absolute;top:10%;width:100%;display:table;left:0;'><h3 style='display:table-cell;font-size: 2rem;'>" +
					"Stranded Motorist</h3></div>" +
					"<div style='position:absolute;top:25%;width:100%;display:table;left:15%;text-align:center;'><h3 style='display:table-cell;text-align:left;'>" +
					"Suppose you encounter a person standing on the side of the highway with a<br> broken-down vehicle." +
					"<br>On a scale of 1 (not at all) to 9 (definitely), how willing would you be to stop and<br> help this person?" +
					"<br><br>Press a number key (1-9) to indicate your answer." +
					"<br>Please answer the questions as truthfully as possible." +
					"</h3></div>" +
					"<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
		"Press any key to continue</h3></div>",
		choices: jsPsych.ALL_KEYS,
		on_finish: function(){
				jsPsych.pauseExperiment();
				bStimuliIt = -1;
				stimuliB = jsPsych.randomization.shuffle(stimuliB);
				jsPsych.addNodeToEndOfTimeline(bLoop(), jsPsych.resumeExperiment);
		}
    };
	
	var lost = {
		type: "html-keyboard-response",
		stimulus: "<div style='position:absolute;top:10%;width:100%;display:table;left:0;'><h3 style='display:table-cell;font-size: 2rem;'>" +
					"Asking for Directions</h3></div>" +
					"<div style='position:absolute;top:25%;width:100%;display:table;left:15%;text-align:center;'><h3 style='display:table-cell;text-align:left;'>" +
					"Suppose you are lost in a new city." +
					"<br>On a scale of 1 (not at all) to 9 (definitely), how likely are you to ask this person<br> for help with directions?" +
					"<br><br>Press a number key (1-9) to indicate your answer." +
					"<br>Please answer the questions as truthfully as possible." +
					"</h3></div>" +
					"<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
		"Press any key to continue</h3></div>",
		choices: jsPsych.ALL_KEYS,
		on_finish: function(){
				jsPsych.pauseExperiment();
				bStimuliIt = -1;
				stimuliB = jsPsych.randomization.shuffle(stimuliB);
				jsPsych.addNodeToEndOfTimeline(bLoop(), jsPsych.resumeExperiment);
		}
    };
	
	var dating = {
		type: "html-keyboard-response",
		stimulus: "<div style='position:absolute;top:10%;width:100%;display:table;left:0;'><h3 style='display:table-cell;font-size: 2rem;'>" +
					"Dating Profile</h3></div>" +
					"<div style='position:absolute;top:25%;width:100%;display:table;left:15%;text-align:center;'><h3 style='display:table-cell;text-align:left;'>" +
					"Suppose this person sent you (or a friend of the appropriate sexual orientation)<br> a greeting message on a dating app." +
					"<br>On a scale of 1 (not at all) to 9 (definitely), how willing are you (or your friend)<br> to respond?" +
					"<br><br>Press a number key (1-9) to indicate your answer." +
					"<br>Please answer the questions as truthfully as possible." +
					"</h3></div>" +
					"<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
		"Press any key to continue</h3></div>",
		choices: jsPsych.ALL_KEYS,
		on_finish: function(){
				jsPsych.pauseExperiment();
				bStimuliIt = -1;
				stimuliB = jsPsych.randomization.shuffle(stimuliB);
				jsPsych.addNodeToEndOfTimeline(bLoop(), jsPsych.resumeExperiment);
		}
    };
	

	//function lostFun(){ jsPsych.addNodeToEndOfTimeline(lost, jsPsych.resumeExperiment); }
	//function electionFun(){ jsPsych.addNodeToEndOfTimeline(election, jsPsych.resumeExperiment); }
	//function motoristFun(){ jsPsych.addNodeToEndOfTimeline(bLoop(), jsPsych.resumeExperiment); }

	var generalInstructionScreen = function(){ 
		return {
			type: "html-keyboard-response",
			stimulus: "<div style='position:absolute;top:10%;width:100%;display:table;left:0;'><h3 style='display:table-cell;font-size:2rem;'>" +
					"Task A: Association</h3></div>" +
					"<div style='position:absolute;top:20%;width:100%;display:table;left:15%;text-align:center;'><h3 style='display:table-cell;text-align:left;'>" +
					"On each trial, you will see a face in the middle of the screen, and either a <br> " + smileCross(smileCrossIt % 2, 0, 0) + " or " + smileCross(smileCrossIt % 2, 1, 0) + " on the left and right sides of the screen." +
					"<br><br>When you see a " + inCongruent[(inCongruentIt % 2) ^ (rightLeftIt % 2)] + " face, press the arrow key (&larr; or &rarr;) that corresponds to the<br> side of the screen the "  + smileCross(smileCrossIt % 2, rightLeftIt % 2, 0) + " is. " +
					"When you see a " + inCongruent[((inCongruentIt + 1) % 2) ^ (rightLeftIt % 2)] + " face, press the arrow<br> key that corresponds to the side of the screen the " + smileCross(smileCrossIt % 2, (rightLeftIt + 1) % 2, 0) + " is." +
					"<br><br>Try to respond quickly and correctly."+
					"<br>If you answer correctly, you will see <img style='width:2.5rem;height:2.5rem;top:.5rem;position: relative;' src='Figures/thumbs_1.png'> on the screen."+
					"<br>If you answer incorrectly, you will see <img style='width:2.5rem;height:2.5rem;top:.5rem;position: relative;' src='Figures/thumbs_0.png'> on the screen."+
					"<br><br>You will first do a set of four practice trials."+
					"</h3></div>" +
					"<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
					"<br>Press any key to continue</h3></div>",
			choices: jsPsych.ALL_KEYS,
			on_finish: function(){
					hasFeedback = 1;
					jsPsych.pauseExperiment();
					jsPsych.addNodeToEndOfTimeline(pracLoop1(), jsPsych.resumeExperiment);
			}
    };};
    
	var pracStimuliPage = {
		type: "html-keyboard-response",
		stimulus: function(){ pracStimuliIt++; getPosition();
				if (smileCrossIt % 2 === 0){
				return "<img style='width:350px' src='IAT_Stimuli/" + pracStimuli[pracStimuliIt % pracStimuli.length] + "'>" +
				"<div style='position:absolute;top:70%;display:table;left:2%;'><h3 style='display:table-row;font-size:9rem;position:relative;'>"+
				smileCross(smileCrossIt % 2, posNum % 2, 1) + "</h3></div>"+
				"<div style='position:absolute;top:70%;display:table;left:85.5%;'><h3 style='display:table-row;font-size:9rem;position:relative;'>"+
				smileCross(smileCrossIt % 2, (posNum + 1) % 2, 1) + "</h3></div>";
				}
				return "<img style='width:350px' src='IAT_Stimuli/" + pracStimuli[pracStimuliIt % pracStimuli.length] + "'>" +
				"<div style='position:absolute;top:75%;display:table;left:2%;'><h3 style='display:table-row;font-size:9rem;position:relative;'>"+
				smileCross(smileCrossIt % 2, posNum % 2, 1) + "</h3></div>"+
				"<div style='position:absolute;top:75%;display:table;left:83%;'><h3 style='display:table-row;font-size:9rem;position:relative;'>"+
				smileCross(smileCrossIt % 2, (posNum + 1) % 2, 1) + "</h3></div>";
		},
		choices: [37, 39],
		on_finish: function(data){
				data.Task = (timesThruA == 0 ? 1 : 3);
				data.StatusID = hasFeedback;
				data.LeftRight = rightLeftIt % 2;
				data.SmileCross = smileCrossIt % 2;
				data.Congruence = inCongruentIt % 2;
				data.Race = (pracStimuli[pracStimuliIt % pracStimuli.length][4] == 'B' ? 1 : 0);
				data.Gender = (pracStimuli[pracStimuliIt % pracStimuli.length][5] == 'M' ? 1 : 0);
				data.Response = Math.floor((data.key_press - 37) / 2);
				data.Catch = 0;
				//1 is correct, 0 incorrect
				data.WasCorrect = Math.floor((data.key_press - 37) / 2) ^ (posNum % 2) ^ (inCongruentIt % 2) ^ (pracStimuli[pracStimuliIt % pracStimuli.length][4] == 'B' ? 1 : 0);
				data.ShownFace = pracStimuli[pracStimuliIt % pracStimuli.length];
				data.FacesRound = pracStimuli.length;
				data.WordShownPositive = lastWordsShownPositive;
				data.WordShownNegative = lastWordsShownNegative;
				if (smileCrossIt % 2 === 0){
					data.WordShownPositive = "NaN";
					data.WordShownNegative = "NaN";
				}
		},
	}
	
	var mainStimuliPage = {
		type: "html-keyboard-response",
		stimulus: function(){ stimuliIt++; getPosition();
				if (smileCrossIt % 2 === 0){
					return "<img style='width:350px' src='IAT_Stimuli/" + stimuli[smileCrossIt % 2][stimuliIt % stimuli[smileCrossIt % 2].length] + "'>" +
					"<div style='position:absolute;top:70%;display:table;left:2%;'><h3 style='display:table-row;font-size:9rem;position:relative;'>"+
					smileCross(smileCrossIt % 2, posNum % 2, 1) + "</h3></div>"+
					"<div style='position:absolute;top:70%;display:table;left:85.5%;'><h3 style='display:table-row;font-size:9rem;position:relative;'>"+
					smileCross(smileCrossIt % 2, (posNum + 1) % 2, 1) + "</h3></div>";

				}
				return "<img style='width:350px' src='IAT_Stimuli/" + stimuli[smileCrossIt % 2][stimuliIt % stimuli[smileCrossIt % 2].length] + "'>" +
				"<div style='position:absolute;top:75%;display:table;left:2%;'><h3 style='display:table-row;font-size:9rem;position:relative;'>"+
				smileCross(smileCrossIt % 2, posNum % 2, 1) + "</h3></div>"+
				"<div style='position:absolute;top:75%;display:table;left:83%;'><h3 style='display:table-row;font-size:9rem;position:relative;'>"+
				smileCross(smileCrossIt % 2, (posNum + 1) % 2, 1) + "</h3></div>";
		},
		choices: [37, 39],
		on_finish: function(data){
				data.Task = data.Task = (timesThruA == 0 ? 1 : 3);
				data.StatusID = 3;
				data.LeftRight = rightLeftIt % 2;
				data.SmileCross = smileCrossIt % 2;
				data.Congruence = inCongruentIt % 2;
				data.Race = (stimuli[smileCrossIt % 2][stimuliIt % stimuli[smileCrossIt % 2].length][4] == 'B' ? 1 : 0);
				data.Gender = (stimuli[smileCrossIt % 2][stimuliIt % stimuli[smileCrossIt % 2].length][5] == 'M' ? 1 : 0);
				data.Response = Math.floor((data.key_press - 37) / 2); //left is 0, 1 is right
				data.Catch = 0;
				//1 is correct, 0 incorrect
				data.WasCorrect = Math.floor((data.key_press - 37) / 2) ^ (posNum % 2) ^ (inCongruentIt % 2) ^ (stimuli[smileCrossIt % 2][stimuliIt % stimuli[smileCrossIt % 2].length][4] == 'B' ? 1 : 0);
				data.ShownFace = stimuli[smileCrossIt % 2][stimuliIt % stimuli[smileCrossIt % 2].length];
				data.FacesRound = stimuli[smileCrossIt % 2].length;
				data.WordShownPositive = lastWordsShownPositive;
				data.WordShownNegative = lastWordsShownNegative;
				if (smileCrossIt % 2 === 0){
					data.WordShownPositive = "NaN";
					data.WordShownNegative = "NaN";
				}
		},
	}
	
	var bStimuliPage = {
		type: "html-keyboard-response",
		stimulus: function(){ bStimuliIt++; getPosition();
				return "<div style='position:absolute;top:5%;width:100%;display:table;left:0;'><h3 style='display:table-cell;font-size: 2rem;'>" +
				scenarioNames[scenarios[bSubTaskIt]] + "</h3></div>" +
				"<img style='width:300px' src='IAT_Stimuli/" + stimuliB[bStimuliIt % stimuliB.length] + "'>" +
				"<div style='position:absolute;top:85%;width:100%;display:table;left:0;font-size:1.5rem'><h3 style='display:table-row;'>"+
				"1 2 3 4 5 6 7 8 9</h3>"+
				"<h3 style='display:table-row;font-size:2rem'>"+
				"&nbsp;&nbsp;&nbsp;Not at all \<-------------------------\> Definitely</h3></div>";
		},
		choices: [49, 50, 51, 52, 53, 54, 55, 56, 57],
		on_finish: function(data){
			data.Task = (timesThruA == 0 ? 1 : 3);
			data.StatusID = 4 + scenarios[bSubTaskIt];
			data.LeftRight = "NaN";
			data.SmileCross = "NaN";
			data.Congruence = "NaN";
			data.Race = (stimuliB[bStimuliIt % stimuliB.length][4] == 'B' ? 1 : 0);
			data.Gender = (stimuliB[bStimuliIt % stimuliB.length][5] == 'M' ? 1 : 0);
			data.Response = data.key_press - 48;
			data.Catch = 0;
			//1 is correct, 0 incorrect
			data.WasCorrect = "NaN";
			data.ShownFace = stimuliB[bStimuliIt % stimuliB.length];
			data.FacesRound = stimuliB.length;
			data.WordShownPositive = "NaN";
			data.WordShownNegative = "NaN";
		},
	}
	
	var bFixation = {
		type: 'html-keyboard-response',
		stimulus: function(){ return "<div style='position:absolute;top:5%;width:100%;display:table;left:0;'><h3 style='display:table-cell;font-size: 2rem;'>" +
				scenarioNames[scenarios[bSubTaskIt]] + "</h3></div>" +
				'<h1 style="font-size:2rem;">'+ 
				(jsPsych.data.get().last(1).values()[0].key_press - 48) +'</h1>' + 
				"<div style='position:absolute;top:85%;width:100%;display:table;left:0;font-size:1.5rem'><h3 style='display:table-row;'>"+
				"1 2 3 4 5 6 7 8 9</h3>"+
				"<h3 style='display:table-row;font-size:2rem'>"+
				"&nbsp;&nbsp;&nbsp;Not at all \<-------------------------\> Definitely</h3></div>";
				},
		choices: jsPsych.NO_KEYS,
		trial_duration: normalRand(),
		data: {test_part: 'fixation'}
	}
	
	var ifbStimuliPage = {
		timeline: [bStimuliPage, bFixation],
		conditional_function: function(){
			if(catchIndices[catchCounter] !== 1) {
				return true;
			} else {
				return false;
			}
		}
	}
	
	var bcatchStimuli = {
		type: "html-keyboard-response",
		stimulus: function(){return "<div style='position:absolute;top:5%;width:100%;display:table;left:0;'><h3 style='display:table-cell;font-size: 2rem;'>" +
				scenarioNames[scenarios[bSubTaskIt]] + "</h3></div>" +
				"<h3>Press the answer to " + catchNum1Scenario + " + " + catchNum2Scenario + 
				" if you are paying attention.</h3>" + "<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 + style='display:table-cell;'>" +
				"<div style='position:absolute;top:85%;width:100%;display:table;left:0;font-size:1.5rem'><h3 style='display:table-row;'>"+
				"1 2 3 4 5 6 7 8 9</h3>"+
				"<h3 style='display:table-row;font-size:2rem'>"+
				"&nbsp;&nbsp;&nbsp;Not at all \<-------------------------\> Definitely</h3></div>";
				},
		choices: [49, 50, 51, 52, 53, 54, 55, 56, 57],
		on_finish: function(data){
				data.Task = (timesThruA == 0 ? 1 : 3);
				data.StatusID = 4 + scenarios[bSubTaskIt];
				data.LeftRight = "NaN";
				data.SmileCross = "NaN";
				data.Congruence = "NaN";
				data.Race = "NaN";
				data.Gender = "NaN";
				data.Response = data.key_press - 48;
				data.Catch = 1;
				//1 is correct, 0 incorrect
				data.WasCorrect = (catchNum1Scenario + catchNum2Scenario == data.key_press - 48 ? 1 : 0);
				data.ShownFace = catchNum1Scenario + catchNum2Scenario;
				data.FacesRound = stimuliB.length;
				data.WordShownPositive = "NaN";
				data.WordShownNegative = "NaN";
		},
	}
	
		var bcatchStimuliFail = {
		type: "html-keyboard-response",
		stimulus: function(){return "<div style='position:absolute;top:5%;width:100%;display:table;left:0;'><h3 style='display:table-cell;font-size: 2rem;'>" +
				scenarioNames[scenarios[bSubTaskIt]] + "</h3></div>" +
				"<h3>The previous response was incorrect.</h3> <h3>Press the answer to " + catchNum1Scenario + " + " + catchNum2Scenario + 
				" if you are paying attention to advance.</h3>" + "<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 + style='display:table-cell;'>" +
				"<div style='position:absolute;top:85%;width:100%;display:table;left:0;font-size:1.5rem'><h3 style='display:table-row;'>"+
				"1 2 3 4 5 6 7 8 9</h3>"+
				"<h3 style='display:table-row;font-size:2rem'>"+
				"&nbsp;&nbsp;&nbsp;Not at all \<-------------------------\> Definitely</h3></div>";
				},
		choices: function(){ return [(catchNum1Scenario + catchNum2Scenario + 48)];},
	}
	
	var bcatchStimuliAdvance = {
		type: "html-keyboard-response",
		stimulus: function(){return "<div style='position:absolute;top:5%;width:100%;display:table;left:0;'><h3 style='display:table-cell;font-size: 2rem;'>" +
				scenarioNames[scenarios[bSubTaskIt]] + "</h3></div>" +
				"<h3>Correct!</h3>" + 
					"<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
					"Press the Right Arrow key (&rarr;) to continue</h3></div>";
				},
		choices: [39],
	}
	


	
	var bifCatchFailed = {
		timeline: [bcatchStimuliFail],
		conditional_function: function(){
			if (jsPsych.data.get().last(1).values()[0].WasCorrect === 0){
				
				return true;
			} else {
				return false;
			}
			
		}
	}
	
	var bifCatch = {
		timeline: [bcatchStimuli, bifCatchFailed, bcatchStimuliAdvance],
		conditional_function: function(){
			catchCounter++;
			if (catchIndices[catchCounter] === 1){
				getCatchNumsScenario();
				return true;
			} else {
				return false;
			}
			
		}
	}
	
	function getCatchNumsScenario() {
		catchNum1Scenario = Math.floor(Math.random() * 9); // 0 to 8
		catchNum2Scenario = Math.floor(Math.random() * (9 - catchNum1Scenario)) + 1; // complement of catchNum1Scenario
	}
	
	
	
	
	
	var bLoop = function(){ return {
		timeline: [bifCatch, ifbStimuliPage],
		loop_function: function(){
			 
			if(bStimuliIt < stimuliB.length - 1){
				return true;
			} else {
				bSubTaskIt++;
				bStimuliIt = 0;
				jsPsych.pauseExperiment();				
				if(bSubTaskIt >= 3)
				{
					bSubTaskIt = 0;
					if(taskOrderIt < 1){
						taskOrderIt++;
						timesThruA++;
						if (condGroup == 6 || condGroup == 7){
							jsPsych.addNodeToEndOfTimeline(countdownNextTrialBreakOnly(), jsPsych.resumeExperiment);
						}else{
							jsPsych.addNodeToEndOfTimeline(countdownNextTrial(), jsPsych.resumeExperiment);
						}
					} else {
						collectData();
						jsPsych.addNodeToEndOfTimeline(endExperimentNode, jsPsych.resumeExperiment);
					}
				}
				else
				{
					jsPsych.addNodeToEndOfTimeline(countdownNextSS(), jsPsych.resumeExperiment);
					
				}
				return false;
				
			}
		},	
	};};

	var pracFixation = {
		type: "html-keyboard-response",
		stimulus: function(){ pracStreak++; inStreak += jsPsych.data.get().last(1).values()[0].WasCorrect;
				if (smileCrossIt % 2 === 0){
				return "<img style='width:7rem;' src='Figures/thumbs_" + jsPsych.data.get().last(1).values()[0].WasCorrect + ".png'>" +
				"<div style='position:absolute;top:70%;display:table;left:2%;'><h3 style='display:table-row;font-size:9rem;position:relative;'>"+
				smileCross(smileCrossIt % 2, posNum % 2, 2) + "</h3></div>"+
				"<div style='position:absolute;top:70%;display:table;left:85.5%;'><h3 style='display:table-row;font-size:9rem;position:relative;'>"+
				smileCross(smileCrossIt % 2, (posNum + 1) % 2, 2) + "</h3></div>";
				}
				return "<img style='width:7rem;' src='Figures/thumbs_" + jsPsych.data.get().last(1).values()[0].WasCorrect + ".png'>" +
				"<div style='position:absolute;top:75%;display:table;left:2%;'><h3 style='display:table-row;font-size:9rem;position:relative;'>"+
				smileCross(smileCrossIt % 2, posNum % 2, 2) + "</h3></div>"+
				"<div style='position:absolute;top:75%;display:table;left:83%;'><h3 style='display:table-row;font-size:9rem;position:relative;'>"+
				smileCross(smileCrossIt % 2, (posNum + 1) % 2, 2) + "</h3></div>";
		},
		choices: jsPsych.NO_KEYS,
		trial_duration: normalRand(),
		data: {test_part: 'fixation'},
	}
	
	var pracFixationNF = {
		type: "html-keyboard-response",
		stimulus: function(){ pracStreak++; inStreak += jsPsych.data.get().last(1).values()[0].WasCorrect;
				if (smileCrossIt % 2 === 0){
					return "<div style='position:absolute;top:70%;display:table;left:2%;'><h3 style='display:table-row;font-size:9rem;position:relative;'>"+
					smileCross(smileCrossIt % 2, posNum % 2, 2) + "</h3></div>"+
					"<div style='position:absolute;top:70%;display:table;left:85.5%;'><h3 style='display:table-row;font-size:9rem;position:relative;'>"+
					smileCross(smileCrossIt % 2, (posNum + 1) % 2, 2) + "</h3></div>";
				}
				return "<div style='position:absolute;top:75%;display:table;left:2%;'><h3 style='display:table-row;font-size:9rem;position:relative;'>"+
				smileCross(smileCrossIt % 2, posNum % 2, 2) + "</h3></div>"+
				"<div style='position:absolute;top:75%;display:table;left:83%;'><h3 style='display:table-row;font-size:9rem;position:relative;'>"+
				smileCross(smileCrossIt % 2, (posNum + 1) % 2, 2) + "</h3></div>";
		},
		choices: jsPsych.NO_KEYS,
		trial_duration: normalRand(),
		data: {test_part: 'fixation'},
	}
	
	var fixationNF = {
		type: "html-keyboard-response",
		stimulus: function(){ 
				if (smileCrossIt % 2 === 0){
					return "<div style='position:absolute;top:70%;display:table;left:2%;'><h3 style='display:table-row;font-size:9rem;position:relative;'>"+
					smileCross(smileCrossIt % 2, posNum % 2, 2) + "</h3></div>"+
					"<div style='position:absolute;top:70%;display:table;left:85.5%;'><h3 style='display:table-row;font-size:9rem;position:relative;'>"+
					smileCross(smileCrossIt % 2, (posNum + 1) % 2, 2) + "</h3></div>";
				}
				return "<div style='position:absolute;top:75%;display:table;left:2%;'><h3 style='display:table-row;font-size:9rem;position:relative;'>"+
				smileCross(smileCrossIt % 2, posNum % 2, 2) + "</h3></div>"+
				"<div style='position:absolute;top:75%;display:table;left:83%;'><h3 style='display:table-row;font-size:9rem;position:relative;'>"+
				smileCross(smileCrossIt % 2, (posNum + 1) % 2, 2) + "</h3></div>";
		},
		choices: jsPsych.NO_KEYS,
		trial_duration: normalRand(),
		data: {test_part: 'fixation'},
	}

	
	var pracLoop1InstructionScreenF = function(){ 
		return {
			type: "html-keyboard-response",
			stimulus: "<div style='position:absolute;top:10%;width:100%;display:table;left:0;'><h3 style='display:table-cell;font-size:2rem;'>" +
					"You got " +streakCorrect +"/4 correct - try again.</h3></div>" +
					"<div style='position:absolute;top:20%;width:100%;display:table;left:15%;text-align:center;'><h3 style='display:table-cell;text-align:left;'>" +
					"You will do another set of four practice trials with the same rules." +
					"<br><br>When you see a " + inCongruent[(inCongruentIt % 2) ^ (rightLeftIt % 2)] + " face, press the arrow key (&larr; or &rarr;) that corresponds to the<br> side of the screen the "  + smileCross(smileCrossIt % 2, rightLeftIt % 2, 0) + " is. " +
					"When you see a " + inCongruent[((inCongruentIt + 1) % 2) ^ (rightLeftIt % 2)] + " face, press the arrow<br> key that corresponds to the side of the screen the " + smileCross(smileCrossIt % 2, (rightLeftIt + 1) % 2, 0) + " is." +
					"<br><br>Try to respond quickly and correctly."+
					"<br>If you answer correctly, you will see <img style='width:3rem;height:3rem;top:1rem;position: relative;' src='Figures/thumbs_1.png'> on the screen."+
					"<br>If you answer incorrectly, you will see <img style='width:3rem;height:3rem;top:1rem;position: relative;' src='Figures/thumbs_0.png'> on the screen."+
					"</h3></div>" +
					"<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
					"Press any key to continue</h3></div>",
			choices: jsPsych.ALL_KEYS,
			on_finish: function(){
					hasFeedback = 1;
					jsPsych.pauseExperiment();
					jsPsych.addNodeToEndOfTimeline(pracLoop1(), jsPsych.resumeExperiment);
			}
    };};


	var pracLoop2InstructionScreen = function(){ 
		return {
			type: "html-keyboard-response",
			stimulus: "<div style='position:absolute;top:10%;width:100%;display:table;left:0;'><h3 style='display:table-cell;font-size:2rem;'>" +
					"You got " +streakCorrect +"/4 correct - very good!</h3></div>" +
					"<div style='position:absolute;top:20%;width:100%;display:table;left:15%;text-align:center;'><h3 style='display:table-cell;text-align:left;'>" +
					"You will do another set of four practice trials with the same rules." +
					"<br><br>When you see a " + inCongruent[(inCongruentIt % 2) ^ (rightLeftIt % 2)] + " face, press the arrow key (&larr; or &rarr;) that corresponds to the<br> side of the screen the "  + smileCross(smileCrossIt % 2, rightLeftIt % 2, 0) + " is. " +
					"When you see a " + inCongruent[((inCongruentIt + 1) % 2) ^ (rightLeftIt % 2)] + " face, press the arrow<br> key that corresponds to the side of the screen the " + smileCross(smileCrossIt % 2, (rightLeftIt + 1) % 2, 0) + " is." +
					"<br><br>Try to respond quickly and correctly. You will not receive feedback."+
					"</h3></div>" +
					"<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
					"Press any key to continue</h3></div>",
			choices: jsPsych.ALL_KEYS,
			on_finish: function(){
					hasFeedback++;
					jsPsych.pauseExperiment();
					jsPsych.addNodeToEndOfTimeline(pracLoop2(), jsPsych.resumeExperiment);
			}
    };};
	
	var pracLoop2InstructionScreenF = function(){ 
		return {
			type: "html-keyboard-response",
			stimulus: "<div style='position:absolute;top:10%;width:100%;display:table;left:0;'><h3 style='display:table-cell;font-size:2rem;'>" +
					"You got " +streakCorrect +"/4 correct - try again.</h3></div>" +
					"<div style='position:absolute;top:20%;width:100%;display:table;left:15%;text-align:center;'><h3 style='display:table-cell;text-align:left;'>" +
					"You will do another set of four practice trials with the same rules." +
					"<br><br>When you see a " + inCongruent[(inCongruentIt % 2) ^ (rightLeftIt % 2)] + " face, press the arrow key (&larr; or &rarr;) that corresponds to the<br> side of the screen the "  + smileCross(smileCrossIt % 2, rightLeftIt % 2, 0) + " is. " +
					"When you see a " + inCongruent[((inCongruentIt + 1) % 2) ^ (rightLeftIt % 2)] + " face, press the arrow<br> key that corresponds to the side of the screen the " + smileCross(smileCrossIt % 2, (rightLeftIt + 1) % 2, 0) + " is." +
					"<br><br>Try to respond quickly and correctly. You will not receive feedback."+
					"</h3></div>" +
					"<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
					"Press any key to continue</h3></div>",
			choices: jsPsych.ALL_KEYS,
			on_finish: function(){
					hasFeedback = 2;
					jsPsych.pauseExperiment();
					jsPsych.addNodeToEndOfTimeline(pracLoop2(), jsPsych.resumeExperiment);
			}
    };};
	
	var pracLoop1 = function(){ return {
		timeline: [pracStimuliPage, pracFixation, blankPage],
		loop_function: function(){
			  
			if(pracStreak % 4 == 0){
				pracStreak = 0;
				streakCorrect = inStreak;
				inStreak = 0;
				jsPsych.pauseExperiment();
				if(streakCorrect == 4)
				{
					jsPsych.addNodeToEndOfTimeline(pracLoop2InstructionScreen(), jsPsych.resumeExperiment);
				}
				else
				{
					jsPsych.addNodeToEndOfTimeline(pracLoop1InstructionScreenF(), jsPsych.resumeExperiment);
				}
				return false;
			} else {
				return true;
			}
		},	
	};};
	
	var pracLoop2 = function(){ return {
		timeline: [pracStimuliPage, pracFixationNF, blankPage],
		loop_function: function(){
			  
			if(pracStreak % 4 == 0){
				pracStreak = 0;
				streakCorrect = inStreak;
				inStreak = 0;
				jsPsych.pauseExperiment();
				if(streakCorrect == 4)
				{
					jsPsych.addNodeToEndOfTimeline(traitInstructionScreenMainInit, jsPsych.resumeExperiment);
				}
				else
				{
					jsPsych.addNodeToEndOfTimeline(pracLoop2InstructionScreenF(), jsPsych.resumeExperiment);
				}
				return false;
			} else {
				return true;
			}
		},	
	};};

	var traitInstructionScreenMainInit = {
			type: "html-keyboard-response",
			stimulus: function(){ 
		return "<div style='position:absolute;top:10%;width:100%;display:table;left:0;'><h3 style='display:table-cell;font-size: 2rem;'>" +
					"Very good!</h3></div>" +
					"<div style='position:absolute;top:20%;width:100%;display:table;left:15%;text-align:center;'><h3 style='display:table-cell;text-align:left;'>" +
					"You are now ready to move on to the main experiment. The rules are the same." +
					"<br><br>When you see a " + inCongruent[(inCongruentIt % 2) ^ (rightLeftIt % 2)] + " face, press the arrow key (&larr; or &rarr;) that corresponds to the<br> side of the screen the "  + smileCross(smileCrossIt % 2, rightLeftIt % 2, 0) + " is. " +
					"When you see a " + inCongruent[((inCongruentIt + 1) % 2) ^ (rightLeftIt % 2)] + " face, press the arrow<br> key that corresponds to the side of the screen the " + smileCross(smileCrossIt % 2, (rightLeftIt + 1) % 2, 0) + " is." +
					"<br><br>Try to respond quickly and correctly. You will not receive feedback."+
					"</h3></div>" +
					"<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
		"Press any key to continue</h3></div>";},
			choices: jsPsych.ALL_KEYS,
			on_finish: function(){
					hasFeedback = 1;
					jsPsych.pauseExperiment();
					jsPsych.addNodeToEndOfTimeline(mainLoop, jsPsych.resumeExperiment);
			}
    }

	var blankPage = {
		type: 'html-keyboard-response',
		stimulus: function(){
				if (smileCrossIt % 2 === 0){
					return "<div style='position:absolute;top:70%;display:table;left:2%;'><h3 style='display:table-row;font-size:9rem;position:relative;'>"+
					smileCross(smileCrossIt % 2, posNum % 2, 2) + "</h3></div>"+
					"<div style='position:absolute;top:70%;display:table;left:85.5%;'><h3 style='display:table-row;font-size:9rem;position:relative;'>"+
					smileCross(smileCrossIt % 2, (posNum + 1) % 2, 2) + "</h3></div>";

				}
				return "<div style='position:absolute;top:75%;display:table;left:2%;'><h3 style='display:table-row;font-size:9rem;position:relative;'>"+
				smileCross(smileCrossIt % 2, posNum % 2, 2) + "</h3></div>"+
				"<div style='position:absolute;top:75%;display:table;left:83%;'><h3 style='display:table-row;font-size:9rem;position:relative;'>"+
				smileCross(smileCrossIt % 2, (posNum + 1) % 2, 2) + "</h3></div>";
		},
		choices: jsPsych.NO_KEYS,
		trial_duration: normalRand(),
		data: {test_part: 'blankpage'}
	}

	function normalRand() {
		return (Math.sqrt((-2)*Math.log(Math.random()))*Math.cos(2*Math.PI*Math.random())) * fixationSTDev + fixationMean 
	}
	
	function getCatchNums() {
		catchNum1 = Math.floor(Math.random() * 2);
	}
	
	function getPosition() {
		posNum = Math.floor(Math.random() * 2);
	}
	
	var catchStimuli = {
		type: "html-keyboard-response",
		stimulus: function(){getPosition();
				if (smileCrossIt % 2 === 0){
					return "<h3>Press the key associated with " + inCongruent[catchNum1] + " faces if you are paying attention.</h3>" + "<div style='position:absolute;top:70%;display:table;left:2%;'><h3 style='display:table-row;font-size:9rem;position:relative;'>"+
					smileCross(smileCrossIt % 2, posNum % 2, 1) + "</h3></div>"+
					"<div style='position:absolute;top:70%;display:table;left:85.5%;'><h3 style='display:table-row;font-size:9rem;position:relative;'>"+
					smileCross(smileCrossIt % 2, (posNum + 1) % 2, 1) + "</h3></div>";
				}
				return "<h3>Press the key associated with " + inCongruent[catchNum1] + " faces if you are paying attention.</h3>" + "<div style='position:absolute;top:75%;display:table;left:2%;'><h3 style='display:table-row;font-size:9rem;position:relative;'>"+
				smileCross(smileCrossIt % 2, posNum % 2, 1) + "</h3></div>"+
				"<div style='position:absolute;top:75%;display:table;left:83%;'><h3 style='display:table-row;font-size:9rem;position:relative;'>"+
				smileCross(smileCrossIt % 2, (posNum + 1) % 2, 1) + "</h3></div>";},
		choices: [37, 39],
		on_finish: function(data){
			
			data.Task = (timesThruA === 0 ? 1 : 3);
			data.StatusID = 3;
			data.LeftRight = rightLeftIt % 2;
			data.SmileCross = smileCrossIt % 2;
			data.Congruence = inCongruentIt % 2;
			data.Race = (inCongruent[catchNum1] == 'BLACK' ? 1 : 0);
			data.Gender = "NaN";
			data.Response = Math.floor((data.key_press - 37) / 2);
			data.Catch = 1;
			//1 is correct, 0 incorrect
			data.WasCorrect = Math.floor((data.key_press - 37) / 2) ^ (posNum % 2) ^ (inCongruentIt % 2) ^ (catchNum1^1);
			data.ShownFace = inCongruent[catchNum1];
			data.FacesRound = stimuli[smileCrossIt % 2].length;
			data.WordShownPositive = lastWordsShownPositive;
			data.WordShownNegative = lastWordsShownNegative;
			if (smileCrossIt % 2 === 0){
					data.WordShownPositive = "NaN";
					data.WordShownNegative = "NaN";
				}
		}
	}
	
	var ifMainStimuli = {
		timeline: [mainStimuliPage],
		conditional_function: function(){
			if(catchIndices[catchCounter] !== 1) {
				return true;
			} else {
				getCatchNums();
				return false;
			}
		}
	}

	var ifCatch = {
		timeline: [catchStimuli],
		conditional_function: function(){
			if (catchIndices[catchCounter] === 1){
				mainIt--;
				needsFixation = true;
				getCatchNums();
				return true;
			} else {
				return false;
			}
		}
	}

	var ifFixation = {
		timeline: [fixationNF],
		conditional_function: function(){
			var data = jsPsych.data.get().last(1).values()[0];
			var needed_fix = needsFixation;
			needsFixation = true;
			if(needed_fix){
				return true;
			} else {
				return false;
			}
		}
	}	
	

    var mainLoop = {
		timeline: [ifMainStimuli, ifCatch, ifFixation, blankPage],
		loop_function: function(){
		mainIt++;
		catchCounter++;
		if (mainIt < stimuli[smileCrossIt % 2].length){
			return true;
		} else {
			mainIt = 0;
			traitIt= traitIt + 2;
			inCongruentIt++;
			stimuli[smileCrossIt % 2] = jsPsych.randomization.shuffle(stimuli[smileCrossIt % 2]);
			/*
			//stimuli[smileCrossIt % 2] = jsPsych.randomization.shuffle(stimuli[smileCrossIt % 2]);
			if (traitIt == 2) {
				//smileCrossIt++;
				jsPsych.pauseExperiment();//
				jsPsych.addNodeToEndOfTimeline(countdownNextCond(), jsPsych.resumeExperiment);//
			return false;
			}*/
			jsPsych.pauseExperiment();
			if(traitIt < 4){
				//stimuli[smileCrossIt % 2] = stimuli[(smileCrossIt + 1) % 2];
				jsPsych.addNodeToEndOfTimeline(ruleChangeInstructionScreen(), jsPsych.resumeExperiment);
			} else {
				traitIt = 0;
				//smileCrossIt++;
				bTrialCount = bTrialCountMax;
				jsPsych.addNodeToEndOfTimeline(countdownNextTrialB(), jsPsych.resumeExperiment);
				
			}
			return false;
			}
		}
    }
	
	
	var ruleChangeInstructionScreen = function(){ 
		return {
			type: "html-keyboard-response",
			stimulus: "<div style='position:absolute;top:10%;width:100%;display:table;left:0;'><h3 style='display:table-cell;font-size:2rem;'>" +
					"Now the rules are different</h3></div>" +
					"<div style='position:absolute;top:20%;width:100%;display:table;left:15%;text-align:center;'><h3 style='display:table-cell;text-align:left;'>" +
					"On each trial, you will see a face in the middle of the screen, and either a <br> " + smileCross(smileCrossIt % 2, 0, 0) + " or " + smileCross(smileCrossIt % 2, 1, 0) + " on the left and right sides of the screen." +
					"<br><br>When you see a " + inCongruent[(inCongruentIt % 2) ^ (rightLeftIt % 2)] + " face, press the arrow key (&larr; or &rarr;) that corresponds to the<br> side of the screen the "  + smileCross(smileCrossIt % 2, rightLeftIt % 2, 0) + " is. " +
					"When you see a " + inCongruent[((inCongruentIt + 1) % 2) ^ (rightLeftIt % 2)] + " face, press the arrow<br> key that corresponds to the side of the screen the " + smileCross(smileCrossIt % 2, (rightLeftIt + 1) % 2, 0) + " is." +
					"<br><br>Try to respond quickly and correctly."+
					"<br>If you answer correctly, you will see <img style='width:2.5rem;height:2.5rem;top:.5rem;position: relative;' src='Figures/thumbs_1.png'> on the screen."+
					"<br>If you answer incorrectly, you will see <img style='width:2.5rem;height:2.5rem;top:.5rem;position: relative;' src='Figures/thumbs_0.png'> on the screen."+
					"<br><br>You will first do a set of four practice trials."+
					"</h3></div>" +
					"<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
					"<br>Press any key to continue</h3></div>",
			choices: jsPsych.ALL_KEYS,
			on_finish: function(){
					hasFeedback = 1;
					jsPsych.pauseExperiment();
					jsPsych.addNodeToEndOfTimeline(pracLoop1(), jsPsych.resumeExperiment);
			}
    };};

	var countdownNextCond = function(){ return {
		type: "html-keyboard-response",
		stimulus: "<h3 style='font-size:1.5rem;'>You are partway through Task A; take a break, and rest your eyes.</h3>" +
				"<div style='position:absolute;top:65%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
				"<p>The experiment will resume after</p><p>" + 
				bTrialCount + "s</p></h3></div>",
		choices: jsPsych.NO_KEYS,
		trial_duration: 1000,
		on_finish: function(){
				bTrialCount--;
				if(bTrialCount > 0){
					jsPsych.pauseExperiment();
					jsPsych.addNodeToEndOfTimeline(countdownNextCond(), jsPsych.resumeExperiment);	
				} else {
					bTrialCount = bTrialCountMax;
					jsPsych.pauseExperiment();
					jsPsych.addNodeToEndOfTimeline(countdownNextCondDone(), jsPsych.resumeExperiment);	

				}
		}
	};};

	var countdownNextCondDone = function(){ return {
		type: "html-keyboard-response",
		stimulus: "<h3>The experiment is ready to resume.</h3>" +
				"<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
				"Press any key to continue</h3></div>",
		on_finish: function(){
			jsPsych.pauseExperiment();
			jsPsych.addNodeToEndOfTimeline(ruleChangeInstructionScreen(), jsPsych.resumeExperiment);	
		}
	};};
	
	var countdownNextSS = function(){ return {
		type: "html-keyboard-response",
		stimulus: "<h3 style='font-size:1.5rem;'>You are done with Scenario " + bSubTaskIt + "; take a break, and rest your eyes.</h3>" +
				"<div style='position:absolute;top:65%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
				"<p>The experiment will resume after</p><p>" + 
		bTrialCount + "s</p></h3></div>",
		choices: jsPsych.NO_KEYS,
		trial_duration: 1000,
		on_finish: function(){
				bTrialCount--;
				if(bTrialCount > 0){
					jsPsych.pauseExperiment();
					jsPsych.addNodeToEndOfTimeline(countdownNextSS(), jsPsych.resumeExperiment);	
				} else {
					bTrialCount = bTrialCountMax;
					jsPsych.pauseExperiment();
					jsPsych.addNodeToEndOfTimeline(countdownNextSSDone(), jsPsych.resumeExperiment);	

				}
		}
	};};

	var countdownNextSSDone = function(){ return {
		type: "html-keyboard-response",
		stimulus: "<h3>The experiment is ready to resume.</h3>" +
				"<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
				"Press any key to continue</h3></div>",
		on_finish: function(){
			jsPsych.pauseExperiment();
			if (scenarios[bSubTaskIt] == 0) {
				jsPsych.addNodeToEndOfTimeline(motorist, jsPsych.resumeExperiment);
			} else if (scenarios[bSubTaskIt] == 1) {
				jsPsych.addNodeToEndOfTimeline(lost, jsPsych.resumeExperiment);
			} else {
				jsPsych.addNodeToEndOfTimeline(dating, jsPsych.resumeExperiment);
			}
		}
	};};
	
	

	
	var countdownNextTrial = function(){ return {
		type: "html-keyboard-response",
		stimulus: "<h3 style='font-size:2rem;'>You have completed Task A!</h3>" +
				"<div style='position:absolute;top:65%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
				"<p>The experiment will resume after</p><p>" + 
				bTrialCount + "s</p></h3></div>",
		choices: jsPsych.NO_KEYS,
		trial_duration: 1000,
		on_finish: function(){
				bTrialCount--;
				if(bTrialCount > 0){
					jsPsych.pauseExperiment();
					jsPsych.addNodeToEndOfTimeline(countdownNextTrial(), jsPsych.resumeExperiment);	
				} else {
					bTrialCount = bTrialCount;
					jsPsych.pauseExperiment();
					jsPsych.addNodeToEndOfTimeline(countdownNextTrialDone(), jsPsych.resumeExperiment);	

				}
		}
	};};
	
	var countdownNextTrialBreakOnly = function(){ return {
		type: "html-keyboard-response",
		stimulus: "<h3 style='font-size:2rem;'>You have completed Task A!</h3>" +
				"<div style='position:absolute;top:65%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
				"<p>The experiment will resume after</p><p>" + 
				bTrialCountLong + "s</p></h3></div>",
		choices: jsPsych.NO_KEYS,
		trial_duration: 1000,
		on_finish: function(){
				bTrialCountLong--;
				if(bTrialCountLong > 0){
					jsPsych.pauseExperiment();
					jsPsych.addNodeToEndOfTimeline(countdownNextTrialBreakOnly(), jsPsych.resumeExperiment);	
				} else {
					bTrialCountLong = bTrialCountLongMax;
					jsPsych.pauseExperiment();
					jsPsych.addNodeToEndOfTimeline(countdownNextTrialDone(), jsPsych.resumeExperiment);	

				}
		}
	};};
	
	
	
	var countdownNextTrialDone = function(){ return {
		type: "html-keyboard-response",
		stimulus: "<h3>The experiment is ready to resume.</h3>" +
				"<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
				"Press any key to continue</h3></div>",
		on_finish: function(){
			jsPsych.pauseExperiment();
			if (condGroup === 6 || condGroup === 7){
				jsPsych.addNodeToEndOfTimeline(bInstructionScreen(), jsPsych.resumeExperiment);
			}
			else if (trainOrA > 0) {
				jsPsych.addNodeToEndOfTimeline(generalInstructionScreen(), jsPsych.resumeExperiment);	
			} 
			
			else {
				jsPsych.addNodeToEndOfTimeline(trainInitInstructionScreen(), jsPsych.resumeExperiment);	
			}
		}
	};};
	
	var trainInitInstructionScreen = function(){ 
		return {
			type: "html-keyboard-response",
			stimulus: "<div style='position:absolute;top:10%;width:100%;display:table;left:0;'><h3 style='display:table-cell;font-size:2rem;'>" +
					"Task B: Identification</h3></div>" +
					"<div style='position:absolute;top:30%;width:100%;display:table;left:15%;text-align:center;'><h3 style='display:table-cell;text-align:left;'>" +
					"You will learn to associate a total of 5 faces with 5 different numbers." + 
					"<br><br>First, you will be shown two faces and numbers. Once you feel that you have memorized" +
					"<br>the number corresponding to each face, press the appropriate number key to continue.</h3></div>"+ 
					"<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
					"Press any key to continue</h3></div>",
			choices: jsPsych.ALL_KEYS,
			on_finish: function(){
					memIt = 0;
					memShow = Math.floor(Math.random() * memMax);
					facesUse = jsPsych.randomization.shuffle(trainNumsRaw.slice(0,memMax));
					if (demo === 1){
						facesUse = trainNumsRaw.slice(0,memMax);
						memShow = 0;}
					jsPsych.pauseExperiment();
					jsPsych.addNodeToEndOfTimeline(memLoop(), jsPsych.resumeExperiment);
			}
    };};
	
	var memFixation = {
		type: "html-keyboard-response",
		stimulus: function(){ return "";//"<img style='width:7rem;' src='Figures/thumbs_1.png'>";
		},
		choices: jsPsych.NO_KEYS,
		trial_duration: normalRand() * 2,
		data: {test_part: 'fixation'},
	}
    
	var memStimuliPage = {
		type: "html-keyboard-response",
		stimulus: function(){
				return "<img style='width:280px' src='Individuation_Stimuli/" + trainFaces[facesUse[memShow % memMax]] + "'>" +
				"<div style='position:absolute;top:88%;display:table;left:0%;text-align:center;width:100%;'><h3 style='display:table-row;font-size:5rem;position:relative;'>"+
				trainFaceNums[facesUse[memShow % memMax]] + "</h3></div>";
		},
		choices: function(){ return [(trainFaceNums[facesUse[memShow % memMax]] + 48)];},
		on_finish: function(data){
			data.Task = 2;
			data.StatusID = 1;
			data.LeftRight = "NaN";
			data.SmileCross = "NaN";
			data.Congruence = inCongruentIt; //White or black
			data.Race = "NaN";
			data.Gender = "NaN";
			data.Response = data.key_press - 48;
			data.Catch = 0;
			data.WasCorrect = 1;
			data.FacesRound = memMax;
			data.ShownFace = trainFaces[facesUse[memShow % memMax]];
			data.WordShownPositive = "NaN";
			data.WordShownNegative = "NaN";
		},
	}
	var memLoop = function(){ return {
		timeline: [memStimuliPage, memFixation],
		loop_function: function(){
			memIt++;
			memShow++;
			if(memIt < memMax){
				return true;
			} else {
				jsPsych.pauseExperiment();
				jsPsych.addNodeToEndOfTimeline(testInitInstructionScreen(), jsPsych.resumeExperiment);
				return false;
			}
		},	
	};};
	
	
	var testInitInstructionScreen = function(){ 
		return {
			type: "html-keyboard-response",
			stimulus: "<div style='position:absolute;top:10%;width:100%;display:table;left:0;'><h3 style='display:table-cell;font-size:2rem;'>" +
					"Can you remember who is who?</h3></div>" +
					"<div style='position:absolute;top:30%;width:100%;display:table;left:15%;text-align:center;'><h3 style='display:table-cell;text-align:left;'>" +
					"Press the appropriate number key for each face."+

					"<br><br>If you answer correctly, you will see <img style='width:3rem;height:3rem;top:1rem;position: relative;' src='Figures/thumbs_1.png'> on the screen."+
					"<br>If you answer incorrectly, you will see <img style='width:3rem;height:3rem;top:1rem;position: relative;' src='Figures/thumbs_0.png'> on the screen. You will also be shown " + 
					"<br>the correct answer and must press the correct number key to continue."+
					"</h3></div>" +
					"<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
					"Press any key to continue</h3></div>",
			choices: jsPsych.ALL_KEYS,
			on_finish: function(){
					memIt = 0;
					memShow = Math.floor(Math.random() * memMax);
					facesUse = jsPsych.randomization.shuffle(trainNumsRaw.slice(0,memMax));
					if (demo === 1){
						facesUse = trainNumsRaw.slice(0,memMax);
						memShow = 0;}
					pracStreak = 0;
					inStreak = 0;
					jsPsych.pauseExperiment();
					jsPsych.addNodeToEndOfTimeline(testLoop(), jsPsych.resumeExperiment);
			}
    };};

	var testRedoInstructionScreen = function(){ 
		return {
			type: "html-keyboard-response",
			stimulus: "<div style='position:absolute;top:10%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>" +
					"You did not press the correct number key for all faces.</h3></div>" +
					"<div style='position:absolute;top:40%;width:100%;display:table;text-align:center;left:0%;'><h3 style='display:table-cell;text-align:centers;'>" +
					"Please try again."+
					"</h3></div>" +
					"<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
					"Press any key to continue</h3></div>",
			choices: jsPsych.ALL_KEYS,
			on_finish: function(){
					memIt = 0;
					memShow = Math.floor(Math.random() * memMax);
					facesUse = jsPsych.randomization.shuffle(trainNumsRaw.slice(0,memMax));
					if (demo === 1){
						facesUse = trainNumsRaw.slice(0,memMax);
						memShow = 0;}
					pracStreak = 0;
					inStreak = 0;
					jsPsych.pauseExperiment();
					jsPsych.addNodeToEndOfTimeline(testLoop(), jsPsych.resumeExperiment);
			}
    };};

	var testAdvanceInstructionScreen = function(){ 
		return {
			type: "html-keyboard-response",
			stimulus: "<div style='position:absolute;top:10%;width:100%;display:table;left:0;'><h3 style='display:table-cell;font-size:2rem;'>" +
					"Well done!</h3></div>" +
					"<div style='position:absolute;top:30%;width:100%;display:table;left:15%;text-align:center;'><h3 style='display:table-cell;text-align:left;'>" +
					"Now you will see "+ (memMax + 1) +" faces and their corresponding numbers. Once you feel that "+
					"<br>you have memorized number corresponding to each face, press the "+
					"<br>appropriate number key to continue."+
					"</h3></div>" +
					"<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
					"Press any key to continue</h3></div>",
			choices: jsPsych.ALL_KEYS,
			on_finish: function(){
					memIt = 0;
					memMax++;
					memShow = Math.floor(Math.random() * memMax);
					facesUse = jsPsych.randomization.shuffle(trainNumsRaw.slice(0,memMax));
					if (demo === 1){
						facesUse = trainNumsRaw.slice(0,memMax);
						memShow = 0;}
					pracStreak = 0;
					inStreak = 0;
					jsPsych.pauseExperiment();
					jsPsych.addNodeToEndOfTimeline(memLoop(), jsPsych.resumeExperiment);
			}
    };};
	var testFixation = {
		type: "html-keyboard-response",
		stimulus: function(){ return "<img style='width:7rem;' src='Figures/thumbs_"+wasCorrect+".png'>" + "<div style='position:absolute;top:88%;display:table;left:0%;text-align:center;width:100%;'><h3 style='display:table-row;font-size:5rem;position:relative;'>"+"1&emsp;&emsp;2&emsp;&emsp;3&emsp;&emsp;4&emsp;&emsp;5</h3></div>";
		},
		choices: jsPsych.NO_KEYS,
		trial_duration: normalRand() * 2,
		data: {test_part: 'fixation'},
	}
    
	var testStimuliPage = {
		type: "html-keyboard-response",
		stimulus: function(){ 
				return "<img style='width:280px' src='Individuation_Stimuli/" + trainFaces[facesUse[memShow % memMax]] + "'>" +
				"<div style='position:absolute;top:88%;display:table;left:0%;text-align:center;width:100%;'><h3 style='display:table-row;font-size:5rem;position:relative;'>"+
				"1&emsp;&emsp;2&emsp;&emsp;3&emsp;&emsp;4&emsp;&emsp;5</h3></div>";
		},
		choices: [49, 50, 51, 52, 53],
		on_finish: function(data){
			pracStreak++; 
			data.Task = 2;
			data.StatusID = 2;
			data.LeftRight = "NaN";
			data.SmileCross = "NaN";
			data.Congruence = "NaN";
			data.Race = "NaN";
			data.Gender = "NaN";
			data.Response = data.key_press - 48;
			wasCorrect = (trainFaceNums[facesUse[memShow % memMax]] == data.key_press - 48 ? 1 : 0);
			inStreak += wasCorrect;
			data.Catch = 0;
			data.WasCorrect = wasCorrect;
			data.ShownFace = trainFaces[facesUse[memShow % memMax]];
			data.FacesRound = memMax;
			data.WordShownPositive = "NaN";
			data.WordShownNegative = "NaN";
		},
	}
	
	var wrongPage = {
		type: "html-keyboard-response",
		stimulus: function(){
				return "<img style='width:280px' src='Individuation_Stimuli/" + trainFaces[facesUse[memShow % memMax]] + "'>" +
				"<div style='position:absolute;top:45%;display:table;left:15%;text-align:center;'><img style='width:7rem;' src='Figures/thumbs_0.png'></div>"+
				"<div style='position:absolute;top:88%;display:table;left:0%;text-align:center;width:100%;'><h3 style='display:table-row;font-size:5rem;position:relative;'>"+
				trainFaceNums[facesUse[memShow % memMax]] + "</h3></div>";
		},
		choices: function(){ return [(trainFaceNums[facesUse[memShow % memMax]] + 48)];},
		on_finish: function(data){
				
		},
	}
	
	var ifWrong = {
		timeline: [wrongPage],
		conditional_function: function(){
			if(wasCorrect == 0){
				return true;
			} else {
				return false;
			}
		}
	}	
	var testLoop = function(){ return {
		timeline: [testStimuliPage, testFixation, ifWrong],
		loop_function: function(){
			memIt++;
			memShow++;
			if(memIt < memMax){
				return true;
			} else {
				pracStreak = 0;
				streakCorrect = inStreak;
				inStreak = 0;
				jsPsych.pauseExperiment();
				if(streakCorrect == memMax)
				{
					if(memMax == trainFaceNums.length)
					{
						bTrialCount = bTrialCountMax;
						jsPsych.addNodeToEndOfTimeline(countdownNextTrialB(), jsPsych.resumeExperiment);
					} else{
						jsPsych.addNodeToEndOfTimeline(testAdvanceInstructionScreen(), jsPsych.resumeExperiment);
					}
				}
				else
				{
					jsPsych.addNodeToEndOfTimeline(testRedoInstructionScreen(), jsPsych.resumeExperiment);
				}
				return false;
			}
		},	
	};};
	
	var countdownNextTrialB = function(){ return {
		type: "html-keyboard-response",
		stimulus: "<h3 style='font-size:2rem;'>You have completed Task B!</h3>" +
				"<div style='position:absolute;top:65%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
				"<p>The experiment will resume after</p><p>" + 
				bTrialCount + "s</p></h3></div>",
		choices: jsPsych.NO_KEYS,
		trial_duration: 1000,
		on_finish: function(){
				bTrialCount--;
				if(bTrialCount > 0){
					jsPsych.pauseExperiment();
					jsPsych.addNodeToEndOfTimeline(countdownNextTrialB(), jsPsych.resumeExperiment);	
				} else {
					bTrialCount = bTrialCountMax;
					jsPsych.pauseExperiment();
					jsPsych.addNodeToEndOfTimeline(countdownNextTrialDoneB(), jsPsych.resumeExperiment);	

				}
		}
	};};
	
	
	
	var countdownNextTrialDoneB = function(){ return {
		type: "html-keyboard-response",
		stimulus: "<h3>The experiment is ready to resume.</h3>" +
				"<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
				"Press any key to continue</h3></div>",
		on_finish: function(){
			jsPsych.pauseExperiment();
			jsPsych.addNodeToEndOfTimeline(bInstructionScreen(), jsPsych.resumeExperiment);	
		}
	};};
	
	var generalInstructionScreen2 = function(){ 
		return {
			type: "html-keyboard-response",
			stimulus: "<div style='position:absolute;top:10%;width:100%;display:table;left:0;'><h3 style='display:table-cell;font-size:2rem;'>" +
					"You will now repeat Task A: Association</h3></div>" +
					"<div style='position:absolute;top:20%;width:100%;display:table;left:15%;text-align:center;'><h3 style='display:table-cell;text-align:left;'>" +
					"On each trial, you will see a face in the middle of the screen, and either a <br> " + smileCross(smileCrossIt % 2, 0, 0) + " or " + smileCross(smileCrossIt % 2, 1, 0) + " on the left and right sides of the screen." +
					"<br><br>When you see a " + inCongruent[(inCongruentIt % 2) ^ (rightLeftIt % 2)] + " face, press the arrow key (&larr; or &rarr;) that corresponds to the<br> side of the screen the "  + smileCross(smileCrossIt % 2, rightLeftIt % 2, 0) + " is. " +
					"When you see a " + inCongruent[((inCongruentIt + 1) % 2) ^ (rightLeftIt % 2)] + " face, press the arrow key that<br> corresponds to the side of the screen the " + smileCross(smileCrossIt % 2, (rightLeftIt + 1) % 2, 0) + " is." +
					"<br><br>Try to respond quickly and correctly."+
					"<br>If you answer correctly, you will see <img style='width:2.5rem;height:2.5rem;top:.5rem;position: relative;' src='Figures/thumbs_1.png'> on the screen."+
					"<br>If you answer incorrectly, you will see <img style='width:2.5rem;height:2.5rem;top:.5rem;position: relative;' src='Figures/thumbs_0.png'> on the screen."+
					"<br><br>You will first do a set of four practice trials."+
					"</h3></div>" +
					"<div style='position:absolute;top:85%;width:100%;display:table;left:0;'><h3 style='display:table-cell;'>"+
					"<br>Press any key to continue</h3></div>",
			choices: jsPsych.ALL_KEYS,
			on_finish: function(){
					hasFeedback = 1;
					timesThruA++;
					jsPsych.pauseExperiment();
					jsPsych.addNodeToEndOfTimeline(pracLoop1(), jsPsych.resumeExperiment);
			}
    };};
	
	
	function collectData() {
		formatData(jsPsych.data.get().filter({Task: 1}).values(), 1);
		formatData(jsPsych.data.get().filter({Task: 2}).values(), 2);
		formatData(jsPsych.data.get().filter({Task: 3}).values(), 3);
		//PostJSON();
    };
	
	
	function formatData(data, trialtype) {
		var out = '';
		var nameregexp = /(?:_)([0-9]+)(?:\.jpg)/;
		for(var i = 0; i < data.length; i++)
		{	
			newTrialJson = {
				"Task": data[i].Task,
				"Trial_Type": data[i].StatusID,
				"LeftRight": data[i].LeftRight,
				"SmileCross": data[i].SmileCross,
				"Congruence": data[i].Congruence,
				"Race": data[i].Race,
				"Gender": data[i].Gender,				
				"ShownFace": data[i].ShownFace,//(Number.isInteger(data[i].ShownFace) ? data[i].ShownFace : nameregexp.exec(data[i].ShownFace)[1]),
				"FacesRound": data[i].FacesRound,
				"PostiveWord": data[i].WordShownPositive,
				"NegativeWord": data[i].WordShownNegative,
				"Catch_Trial": data[i].Catch,		
				"Response": data[i].Response,
				"WasCorrect": data[i].WasCorrect,//(data[i].WasCorrect > 0 ? data[i].WasCorrect : "NaN"),
				"Response_Time": data[i].rt * 0.001,
				"Stimulus_Onset": (data[i].time_elapsed * 0.001 - data[i].rt * 0.001),
				"Actual_Response_time": data[i].time_elapsed * 0.001
			};
			allTrialsJson['Trials'].push(newTrialJson);
		}
	}
	
	
	
	
	//jsPsych.addNodeToEndOfTimeline(generalInstructionScreen(), jsPsych.resumeExperiment);
	jsPsych.addNodeToEndOfTimeline(bInstructionScreen(), jsPsych.resumeExperiment);
}




