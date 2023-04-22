import React from 'react';

// color scheme source
// https://hookagency.com/blog/website-color-schemes/#:~:text=4.%20Lemon%20Lime%20%E2%80%93%20VerticalLoop%20Website%20Color%20Scheme
// example
// https://hookagency.com/wp-content/uploads/2021/08/lemon-lime-700x467.png
const ThemeContext = React.createContext({
	background: '#f3ffed',
	highlight: '#CEE2D1',
	background_dark: '#75c9b7',
	background_light: '#c7ddcc',
	foreground: '#16123f',
	setTheme: () => {},
});
//	"#abd699",
export default ThemeContext;
