if ( "serviceWorker" in navigator ) {
      navigator.serviceWorker.register( "sw.js" )
        .then( function ( registration ) { // Registration was successful
          console.log( "ServiceWorker registration successful with scope: ");

        } ).catch( function ( err ) { // registration failed :(

          console.error( "ServiceWorker registration failed: ", err );
        } );

    }
	  
	  
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-142528919-1', 'auto');
      ga('send', 'pageview');
	
	var deferredPrompt;

	window.addEventListener('beforeinstallprompt', function(e) {
	  console.log('beforeinstallprompt Event fired');
	  e.preventDefault();

	  // Stash the event so it can be triggered later.
	  deferredPrompt = e;
		
	console.log(deferredPrompt);
	  if(deferredPrompt !== undefined) {
		// The user has had a postive interaction with our app and Chrome
		// has tried to prompt previously, so let's show the prompt.
		deferredPrompt.prompt();

		// Follow what the user has done with the prompt.
		deferredPrompt.userChoice.then(function(choiceResult) {

		  console.log(choiceResult.outcome);

		  if(choiceResult.outcome == 'dismissed') {
			console.log('User cancelled home screen install');
		  }
		  else {
			console.log('User added to home screen');
		  }

		  // We no longer need the prompt.  Clear it up.
		  deferredPrompt = null;
		});
	  }


	  return false;
	});
	//setTimeout( function() { document.getElementById("installer").click(); },1000);
	/*var btnSave = document.getElementById('installer');
	btnSave.addEventListener('click', function() {
		console.log(deferredPrompt);
	  if(deferredPrompt !== undefined) {
		// The user has had a postive interaction with our app and Chrome
		// has tried to prompt previously, so let's show the prompt.
		deferredPrompt.prompt();

		// Follow what the user has done with the prompt.
		deferredPrompt.userChoice.then(function(choiceResult) {

		  console.log(choiceResult.outcome);

		  if(choiceResult.outcome == 'dismissed') {
			console.log('User cancelled home screen install');
		  }
		  else {
			console.log('User added to home screen');
		  }

		  // We no longer need the prompt.  Clear it up.
		  deferredPrompt = null;
		});
	  }
	}); */