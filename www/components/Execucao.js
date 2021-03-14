// This is a JavaScript file


	var n1, n2, sinal;
	function bnúmeros(n)
	{
		var temp = document.getElementById('visor').value + n;
		document.getElementById('visor').value = temp;
	}
	function bsinais(s2)
	{
		n1 = parseFloat(document.getElementById ('visor').value);
        s = s2;
        document.getElementById ('visor').value = '';
	}
	function bresultado()
	{
		n2 = parseFloat (document.getElementById ('visor').value);
		if (s == '+')
		{
			document.getElementById ('visor').value = n1 + n2;
		}
		if (s == '-')
		{
			document.getElementById ('visor').value = n1 - n2;
		}
		if (s == 'x')
		{
			document.getElementById ('visor').value = n1 * n2;
		}
		if (s == '/')
		{
			document.getElementById ('visor').value = n1 / n2;
		}
		if (s == '^')
		{
			document.getElementById ('visor').value = Math.pow (n1, n2);	
		}
	}