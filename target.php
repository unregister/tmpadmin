<?php
if( isset($_POST['cc']) )
{
	echo $_POST['x']	;
}
?>
<form method="post" action="">
<input type="text" name="x" /> <input type="submit" name="cc" value="Go" />
</form>