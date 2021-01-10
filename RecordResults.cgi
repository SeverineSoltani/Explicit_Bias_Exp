#!/usr/bin/env python
print "Content-Type: text/html"     # HTML is following
print
import cgi, cgitb, re, json
cgitb.enable()

def is_form_data_invalid(input_data):
   # userid checks
   if "userid" not in input_data:
       return "ERROR: userid isn't provided"
	   
   userid = input_data["userid"].value
   if userid == "":
       return "ERROR: userid is empty"
	   
   if not re.match(r"^[0-9]*$", userid):
       return "ERROR: userid contains non-digits"

   # surveyid checks
   if "sc" not in input_data:
       return "ERROR: survey id isn't provided"
	   
   sc = input_data["sc"].value
   if sc == "":
       return "ERROR: survey id is empty"
	   
   # Responses checks
   if "Responses" not in input_data:
       return "ERROR: Responses isn't provided"

   # Everything passed
   return False

def ValOrNaN(dic, key):
   try:
       return str(dic[key]).replace(',', '')
   except: # KeyError
       return 'NaN'
   
def JsonToCSV(jsn):
   csvTrialKeys = ['Task', 'Trial_Type', 'LeftRight', 'SmileCross', 'Congruence', 'Race', 'Gender', 'ShownFace', 'FacesRound', 'PostiveWord', 'NegativeWord', 'Catch_Trial', 'Response', 'WasCorrect', 'Response_Time', 'Stimulus_Onset', 'Actual_Response_time']
   csv = ['','']
   for key, value in json.loads(jsn)['Trials'][0].items():
       csv[0] = csv[0] + key + ','
       csv[1] = csv[1] + value.replace(',', '') + ','
   csv.append('')
   csv.append(','.join(csvTrialKeys))
   for trial in json.loads(jsn)['Trials'][1:]:
       csv.append(','.join([ValOrNaN(trial, key) for key in csvTrialKeys]))
   return '\n'.join(csv)


input_data = cgi.FieldStorage()

if "is_participant_info" in input_data:
    with open('Counterbalance_Count.txt', 'r') as file:
        data = file.readlines()
    m_list = sorted([('0', int(data[0])),('1', int(data[1])),('2', int(data[2])), ('3',int(data[3])),('4',int(data[4])),('5',int(data[5])),('6',int(data[6])), ('7',int(data[7]))], key=lambda x: x[1])
    cond_number_str = m_list[0][0]
    cond_number_ind = int(m_list[0][0])
    num_subjects = m_list[0][1] + 1
    data[cond_number_ind] = str(num_subjects) + "\n"
    with open('Counterbalance_Count.txt', 'w') as file:
        file.writelines(data)    
    print '<head><title></title><script>window.location.href="'+input_data["is_participant_info"].value + '&condGroup=' + cond_number_str +'";</script></head><body></body></html>'

else:
    result = is_form_data_invalid(input_data)
    if result:
       print '<head><title>ERROR</title></head><body style="margin: 0px; height: 100%; width: 100%;" tabindex="0" class="jspsych-display-element">ERROR: {}</body></html>'.format(result)
    else:
    	
       if "00000000" in input_data["userid"].value:
          print '<head><title>Thank you</title><link href="jspsych-6.1.0/css/jspsych.css" rel="stylesheet" type="text/css"></link></head><body style="margin: 0px; height: 100%; width: 100%;" tabindex="0" class="jspsych-display-element"><div style="display:table;width:100%;height:100%;"><div style="display:table-cell;vertical-align:middle;text-align:center;"><h3>Thank you! <br>Your responses are recorded, and you may close the tab or window.</h3></div></div></body></html>'   
          json_file = open("/home/websites/yulabexp-face/Explicit_Bias/RecRes/Demo_Data/" + input_data["sc"].value + ".txt",'w')
          json_file.write(input_data["Responses"].value)
          json_file.close()
          csv_file = open("/home/websites/yulabexp-face/Explicit_Bias/RecRes/Demo_Data/" + input_data["sc"].value + ".csv",'w')
          csv_file.write(JsonToCSV(input_data["Responses"].value))
          csv_file.close()
    	  
       elif "Lab_" in input_data["sc"].value:
          print '<head><title>Thank you</title><link href="jspsych-6.1.0/css/jspsych.css" rel="stylesheet" type="text/css"></link></head><body style="margin: 0px; height: 100%; width: 100%;" tabindex="0" class="jspsych-display-element"><div style="display:table;width:100%;height:100%;"><div style="display:table-cell;vertical-align:middle;text-align:center;"><h3>Thank you! <br>Your responses are recorded, and you may close the tab or window.</h3></div></div></body></html>'
          cond_group = "Cond_" + input_data["condGroup"].value + "/"
          json_file = open("/home/websites/yulabexp-face/Explicit_Bias/RecRes/Lab_Group/" + cond_group + input_data["sc"].value + ".txt",'w')
          json_file.write(input_data["Responses"].value)
          json_file.close()
          csv_file = open("/home/websites/yulabexp-face/Explicit_Bias/RecRes/Lab_Group/" + cond_group + input_data["sc"].value + ".csv",'w')
          csv_file.write(JsonToCSV(input_data["Responses"].value))
          csv_file.close() 
    	  
       else:
          print '<head><title>Thank you</title><link href="jspsych-6.1.0/css/jspsych.css" rel="stylesheet" type="text/css"></link></head><body style="margin: 0px; height: 100%; width: 100%;" tabindex="0" class="jspsych-display-element"><div style="display:table;width:100%;height:100%;"><div style="display:table-cell;vertical-align:middle;text-align:center;"><h3>Thank you! <br>Your responses are recorded; <a href="https://ucsd.sona-systems.com/webstudy_credit.aspx?experiment_id=1955&credit_token=3939a052bb6d45f783fbe569e85d338c&survey_code=' + input_data["sc"].value +'">please click on this link to receive your credit.</a></h3></div></div></body></html>'   
          cond_group = "Cond_" + input_data["condGroup"].value + "/"
          json_file = open("/home/websites/yulabexp-face/Explicit_Bias/RecRes/JSON_Data/" + cond_group + input_data["sc"].value + ".txt",'w')
          json_file.write(input_data["Responses"].value)
          json_file.close()
          csv_file = open("/home/websites/yulabexp-face/Explicit_Bias/RecRes/CSV_Data/" + cond_group + input_data["sc"].value + ".csv",'w')
          csv_file.write(JsonToCSV(input_data["Responses"].value))
          csv_file.close()
