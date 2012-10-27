function populateBaseColors()
{
	var colorsOptions = '';

	colorsOptions = ich.baseColors({ colors: Object.keys(colors) });

	document.getElementById('baseColorSelect').innerHTML = colorsOptions;
}

function updateColorNames()
{
	var baseColor = document.getElementById('baseColorSelect');
	var selectedBaseColor = baseColor.options[baseColor.selectedIndex]['innerHTML'].replace(/\W/g, '');

	var colorsOptions = '';
	Object.keys(colors[selectedBaseColor]).forEach(function(color)
	{
		colorsOptions = colorsOptions + ich.namedColor({ color: colors[selectedBaseColor][color].color, name: colors[selectedBaseColor][color].name, id: color });
	});

	document.getElementById('colorNamesSelect').innerHTML = colorsOptions;
}

function updateColorData()
{
	var baseColor = document.getElementById('baseColorSelect');
	var selectedBaseColor = baseColor.options[baseColor.selectedIndex]['innerHTML'].replace(/\W/g, '');

	var namedColor = document.getElementById('colorNamesSelect');
	var selectedNamedColor = namedColor.options[namedColor.selectedIndex]['value'].replace(/\W/g, '');

	var colorDataArea = document.getElementById('colorDataArea');
	var colorData = ich.colorData({ color: colors[selectedBaseColor][selectedNamedColor].color, r: parseInt(colors[selectedBaseColor][selectedNamedColor].r, 16), g: parseInt(colors[selectedBaseColor][selectedNamedColor].g, 16), b: parseInt(colors[selectedBaseColor][selectedNamedColor].b, 16), });
	colorDataArea.innerHTML = colorData;
}

window.onload = populateBaseColors;
