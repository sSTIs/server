#! /Users/user/Documents/CMC/prac4/server/server/mjs
<SCRIPT LANGUAGE="mjs" RUNAT="server">
{
	var x = 3;
	var sum = 0;
	for (x = 1;x < 5; x++)
		sum = sum + x;
	write(sum, "\n");
}
</SCRIPT>