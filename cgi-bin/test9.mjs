#! /Users/user/Documents/CMC/prac4/server/server/mjs
<SCRIPT LANGUAGE="mjs" RUNAT="server">
{
	function x2(q)
	{
		return 2*q;
	}
	function x(y, z)
	{
		return x2(y)+z;
	}
	write(x(2,3) + 3, "\n");
}
</SCRIPT>