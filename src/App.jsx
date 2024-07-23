import { extendTheme, ChakraProvider, Flex } from '@chakra-ui/react';

import Header from './components/Header.jsx';
import Preview from './components/Preview.jsx';
import Footer from './components/Footer.jsx';

const brand = {
	fontFamily: `'Outfit', sans-serif`,
	colors: {
		softblue: 'hsl(215, 51%, 70%)',
		cyan: 'hsl(178, 100%, 50%)',
		cyanAlpha500: 'hsla(178, 100%, 50%, 0.5)',
		darkblue1: 'hsl(217, 54%, 11%)',
		darkblue2: 'hsl(216, 50%, 16%)',
		darkblue3: 'hsl(215, 32%, 27%)',
		white: 'hsl(0, 0%, 100%)',
	},
	lineHeight: 1.5,
};

const theme = extendTheme({
	styles: {
		global: {
			body: {
				bg: brand.colors.darkblue1,
				color: brand.colors.softblue,
				lineHeight: brand.lineHeight,
			},
		},
	},
	fonts: {
		body: brand.fontFamily,
		heading: brand.fontFamily
	},
	colors: {
		brand: brand.colors,
	},
	components: {
		Link: {
			baseStyle: {
				_hover: {
					textDecoration: 'none',
				},
			},
		},
	},
});

function App() {
	return (
		<ChakraProvider resetCSS={false} theme={theme}>
			<Header />
			<Flex as="main" flex="auto">
				<Flex flex="auto" justify="center" align="center" p="0 2.4rem">
					<Preview />
				</Flex>
			</Flex>
			<Footer />
		</ChakraProvider>
	);
}

export default App;
