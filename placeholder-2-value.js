			$('input[type="text"]').each(function() { 
	        	var $this = $(this); 
	        	$this.attr("value", $this.attr("placeholder")).removeAttr("placeholder");

	       	 	var val=$this.attr("value");
			         $(this).on
			         ({
					    focus: function() 
					    {
					        if (this.value===val) this.value = '';
					    },
					    blur: function() 
					    {
					        if (this.value==='') this.value = val;
					    }
						});
	    		});
	    	

	