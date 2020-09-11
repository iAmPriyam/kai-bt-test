window.addEventListener("load", function() {
  console.log("Hello World!");
});

  var bluetooth = navigator.mozBluetooth;
  var defAdapter = null;
  var settings = navigator.mozSettings;
  

   document.addEventListener('keydown', handleevent);

   function handleevent(evt) {
   	switch(evt.key) {
   		case 'ArrowLeft':
		  var defAdapter = bluetooth.defaultAdapter;
          console.log('defAdapter');
          var req = settings.createLock().get('bluetooth.enabled');
          req.onsuccess = function(e) {
          	console.log('get enabled' + req.result['bluetooth.enabled'] );

          }
   		  break;
   		case 'ArrowRight' :
	   		var req = settings.createLock().set({'bluetooth.enabled': true});
			  req.onerror = function() {
			      console.log('settings error');
			   };
			   req.onsuccess = function(e) {
			   	console.log('success' + e);
           var defAdapter = bluetooth.defaultAdapter;
           defAdapter['enable']();
			   }
   		  break;
   	}
   }

   
