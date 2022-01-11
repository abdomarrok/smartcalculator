<?php   
         
      
         if(!empty($_POST))
         {
            $expression =$_POST['res'];
            eval( '$result = (' . $expression . ');' );
            echo $result;
            
         }
         
  ?>