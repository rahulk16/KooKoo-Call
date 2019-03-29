var xml = require('xml');
// var train = require('./train.js');

function getXMLResponse(response) {
	return xml(response);
}

module.exports = {
	getXMLBody : function createResponse(req) {
		var event = req.query.event;
		var data = req.query.data || '';
		// var cid = req.query.cid;
		var res;
		if(event){
			if (event == 'NewCall') {
				res = {
					response:
					[{
						playtext: 'Welcome to Galaxy Card.'
					},
					{
						collectdtmf: [ {
							_attr: { t: "#"}
						},
						{
							playtext: 'Press 1 followed by # if you are a male OR\n\n Press 2 followed by # if you are a female.'
						}
					]}]
				};
			}

      else if(event=='GotDTMF'){
        if(data){
          var gender = parseInt(data);
          if(gender==1){ //male
            res = {
    					response:
    					[{
    						playtext: 'You selected for MALE.'
    					},
    					{
    						collectdtmf: [ {
    							_attr: { t: "#"}
    						},
    						{
    							playtext: 'Press 1 followed by # if you are above 21 years OR\n\n Press 2 followed by # if you are below 21 years.'
    						}
    					]}]
    				};

            // if(data){
            //   var age = parseInt(data);
            //   if(age>21){
            //     res = {
          	// 			response:
          	// 			[{
          	// 				playtext: 'You are an ADULT.'
          	// 			}]
          	// 		};
            //   }
            //   else{
            //     res = {
          	// 			response:
          	// 			[{
          	// 				playtext: 'Minors are NOT ALLOWED.'
          	// 			}]
          	// 		};
            //   }
            // }
          }
          if(gender==2){ //female
            res = {
    					response:
    					[{
    						playtext: 'You selected for FEMALE.'
    					},
    					{
    						collectdtmf: [ {
    							_attr: { t: "#"}
    						},
    						{
    							playtext: 'Press 1 followed by # if you are above 18 years OR\n\n Press 2 followed by # if you are below 18 years.'
    						}
    					]}]
    				};

            // if(data){
            //   var age = parseInt(data);
            //   if(age>18){
            //     res = {
          	// 			response:
          	// 			[{
          	// 				playtext: 'You are an ADULT.'
          	// 			}]
          	// 		};
            //   }
            //   else{
            //     res = {
          	// 			response:
          	// 			[{
          	// 				playtext: 'Minors are NOT ALLOWED.'
          	// 			}]
          	// 		};
            //   }
            // }

          }
        }
      }
			// else if(event == 'GotDTMF'){
			// 	var trainId = req.query.sid.split('$')[1];
			// 	if(trainId || data) {
			// 		console.log('SID:: ', req.query.sid);
			// 		if (trainId) {
			// 			var trainDay = parseInt(data);
			// 			if(trainDay || trainDay == 0) {
			// 				if(trainDay == 1 || trainDay == 2 || trainDay == 3) {
			// 					var day = ['Yesterday', 'Today', 'Tomorrow'];
			// 					res = {
			// 						response:
			// 						[{
			// 							playtext: train.getTrainStatus(trainId, trainDay)
			// 						}]
			// 					};
			// 				} else {
			// 					res = {
			// 						response :
			// 						[{
			// 							_attr: { sid: cid + "$" + trainId }
			// 						},
			// 						{
			// 							playtext: "Sorry, wrong input received."
			// 						},
			// 						{
			// 							collectdtmf: [{
			// 								_attr: { t: "#"}
			// 							},
			// 							{
			// 								playtext: 'Please select the date of journey followed by #'
			// 							},
			// 							{
			// 								playtext: '1 for yesterday, 2 for today, 3 for tomorrow'
			// 							}]
			// 						}]
			// 					};
			// 				}
			// 			} else {
			// 				res = {
			// 					response :
			// 					[{
			// 						_attr: { sid: cid + "$" + trainId }
			// 					},
			// 					{
			// 						playtext: "Sorry, no input received."
			// 					},
			// 					{
			// 						collectdtmf: [{
			// 							_attr: { t: "#"}
			// 						},
			// 						{
			// 							playtext: 'Please select the date of journey followed by #'
			// 						}, {
			// 							playtext: '1 for yesterday, 2 for today, 3 for tomorrow'
			// 						}]
			// 					}]
			// 				};
			// 			}
			// 		} else if (data.length == 5){
			// 			var trainId = train.getTrainID(data);
			// 			if(trainId) {
			// 				res = {
			// 					response:
			// 					[{
			// 						_attr: { sid: cid + "$" + trainId }
			// 					},
			// 					{
			// 						collectdtmf: [{
			// 							_attr: { t: "#"}
			// 						},
			// 						{
			// 							playtext: 'Please select the date of journey followed by #'
			// 						}, {
			// 							playtext: '1 for yesterday, 2 for today, 3 for tomorrow'
			// 						}]
			// 					}]
			// 				};
			// 			} else {
			// 				res = {
			// 					response:
			// 					[{
			// 						collectdtmf: [{
			// 							_attr: { t: "#"}
			// 						},
			// 						{
			// 							playtext: 'Sorry, no train found by this train number, Please enter the correct 5 digit train number followed by #.'
			// 						}]
			// 					}]
			// 				};
			// 			}
			// 		}
			// 		else{
			// 			res = {
			// 				response:
			// 				[{
			// 					collectdtmf: [{
			// 						_attr: { t: "#"}
			// 					},
			// 					{
			// 						playtext: 'Please enter the correct 5 digit train number followed by #.'
			// 					}]
			// 				}]
			// 			};
			// 		}
			// 	}
			// 	else {
			// 		res = {
			// 			response:
			// 			[{
			// 				playtext: 'You have not entered anything'
			// 			},
			// 			{
			// 				collectdtmf: [{
			// 					_attr: { t: "#"}
			// 				},
			// 				{
			// 					playtext: 'Please enter 5 digit train number followed by #.'
			// 				}]
			// 			}]
			// 		};
			// 	}
			// }
		}
		else {
			res = {
				response:
				[{
					hangup: ''
				}
			]
		};
	}
	return getXMLResponse(res);
}
};
