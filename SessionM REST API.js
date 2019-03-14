<script runat=server>

	Platform.Load("core", "1.1.1");
	
	var key				= "INSERT_API_KEY_HERE";
	var secret			= "INSERT_API_SECRET_HERE";
	var externalId			= "%%=V(@SubscriberKey)=%%";

	var url 			= "https://api-skechers-usa.stg-sessionm.com/priv/v1/apps/" + key + "/external/users/" + externalId;
	var request 			= new Script.Util.HttpRequest(url);
	request.emptyContentHandling 	= 0;
	request.retries 		= 2;
	request.continueOnError 	= true;
	request.contentType 		= "application/json";
	request.setHeader 		= ("Authorization", "Basic " + key + ":" + secret);
	request.method 			= "PUT";
	request.postData 		= {
 		“user”:{
			“external_id”	: externalId,
			“email”		: “%%=V(@SubscriberEmail)=%%“,
			“gender”	: “%%=V(@Gender)=%%“,
			“dob”		: “%%=V(@DOB)=%%“,
			“zip”		: “%%=V(@ZipCode)=%%“,
  		}
	};

	var response = request.send();
	Platform.Response.Write("Content:<br/>" + response.content);
	Platform.Response.Write("Return header: " + response.headers["returnHeader"]);

</script>
