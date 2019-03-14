<script runat=server>

	Platform.Load("core", "1.1.1");
	
	var accessToken 		= "";
	var url 			= "";
	var auth 			= 'Bearer ' + accessToken;
	var request 			= new Script.Util.HttpRequest(url);
	request.emptyContentHandling 	= 0;
	request.retries 		= 2;
	request.continueOnError 	= true;
	request.contentType 		= "application/json";
	request.setHeader 		= ("Authorization", auth);
	request.method 			= "PUT";
	request.postData 		= {
 		“user”:{
			“external_id”	: “%%=V(@SubscriberKey)=%%“,
			“email”			: “%%=V(@SubscriberEmail)=%%“,
			“gender”		: “%%=V(@Gender)=%%“,
			“dob”			: “%%=V(@DOB)=%%“,
			“zip”			: “%%=V(@ZipCode)=%%“,
  		}
	};

	var response = request.send();
	Platform.Response.Write("Content:<br/>" + response.content);
	Platform.Response.Write("Return header: " + response.headers["returnHeader"]);

</script>
