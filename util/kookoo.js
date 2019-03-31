var xml = require('xml');

function getXMLResponse(response) {
	return xml(response);
}

module.exports = {
	getXMLBody : function createResponse(req) {
		var event = req.query.event;
		var data = req.query.data || '';
		var cid = req.query.cid;

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
							playtext: 'Press 1  if you are a MALE.\n OR\n Press 2 if you are a FEMALE.'
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
    					},{
								collectdtmf: [ {
									_attr: { t: "#"}
								},
								{
								playtext: 'Press 9 if you are above 21'
							},
							{
								playtext: 'Press 0 if you are below 21'
							}
							]}
    					]
    				};


						if(data){
							var mage = parseInt(data);
              if(mage==9){
                res = {
          				response:
          				[{
										playtext:'You are an ADULT'
									}
										]
          			};
              }
             if(mage==0){
                res = {
          				response:
          				[{
										playtext: 'Minors are not ALLOWED'
									}
										]
          			};
              }

						}
          }

        else if(gender==2){ //female
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
    							playtext: 'Press 9 if you are above 18 years OR\n\n Press 0 if you are below 18 years.'
    						}
    					]}]
    				};

						if(data){
							var fage = parseInt(data);
              if(fage==9){
                res = {
          				response:
          				[{
          					playtext: 'You are an ADULT.'
          				}]
          			};
              }
               if(fage==0){
                res = {
          				response:
          				[{
          					playtext: 'Minors are NOT ALLOWED.'
          				}]
          			};
              }
						}
          }
        }
      }
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
