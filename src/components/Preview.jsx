import {
	Box,
	HStack,
	Flex,
	Heading,
	Text,
	Image,
	Link,
} from '@chakra-ui/react';

import equilibriumImg from '../assets/equilibrium.jpg';
import avatarImg from '../assets/avatar.png';

export default function Preview() {
	return (
		<Flex
			as="article"
			direction="column"
			w="100%"
			maxW="35rem"
			p="2.4rem"
			bgColor="brand.darkblue2"
			m="3rem 0 6rem"
			borderRadius="15px"
			boxShadow="0 25px 50px rgba(0, 0, 0, 0.1)"
		>
			<Flex
				direction="column"
				pos="relative"
				bgColor="brand.softblue"
				mb="2.4rem"
				borderRadius="8px"
				cursor="pointer"
				_before={{
					content: '""',
					pos: 'absolute',
					inset: '0',
					bgColor: 'brand.cyanAlpha500',
					bgImage: 'url("../images/icons/view.svg")',
					bgRepeat: 'no-repeat',
					bgPosition: 'center',
					borderRadius: 'inherit',
					opacity: '0',
					transition: 'opacity 0.3s',
				}}
				_hover={{
					_before: {
						opacity: '1',
					},
				}}
			>
				<Image
					src={equilibriumImg}
					alt="Equilibrium"
					w="100%"
					maxW="100%"
					borderRadius="inherit"
				/>
			</Flex>
			<Flex direction="column">
				<Heading
					mb="1.2rem"
					fontFamily="inherit"
					fontSize="2.2rem"
					fontWeight="600"
					color="brand.softblue"
					lineHeight="1.2727"
					sx={{
						'@media (min-width: 48em)': {
							mb: '1.6rem',
						},
					}}
				>
					<Link href="#" className="btn btn--link">
						Equilibrium #3429
					</Link>
				</Heading>
				<Text
					mb="1.6rem"
					fontWeight="300"
					sx={{
						'@media (min-width: 48em)': {
							mb: '2.4rem',
							fontSize: '1.8rem',
						},
					}}
				>
					Our Equilibrium collection promotes balance and calm.
				</Text>
				<HStack>
					<HStack
						spacing="0.77rem"
						width="50%"
						fontSize="1.5rem"
						fontWeight="600"
						color="brand.cyan"
						sx={{
							'@media (min-width: 48em)': {
								fontSize: '1.6rem',
							},
						}}
					>
						<Box
							as="i"
							className="icon-ethereum"
							aria-hidden="true"
							flex="none"
						></Box>
						<Text as="span">0.041 ETH</Text>
					</HStack>
					<HStack
						spacing="0.77rem"
						width="50%"
						fontSize="1.5rem"
						justify="flex-end"
						sx={{
							'@media (min-width: 48em)': {
								fontSize: '1.6rem',
							},
						}}
					>
						<Box
							as="i"
							className="icon-clock"
							aria-hidden="true"
							flex="none"
						></Box>
						<Text as="span">3 days left</Text>
					</HStack>
				</HStack>
				<HStack
					spacing="1.6rem"
					pt="1.6rem"
					mt="1.6rem"
					borderTopWidth="1px"
					borderTopStyle="solid"
					borderTopColor="brand.darkblue3"
					sx={{
						'@media (min-width: 48em)': {
							mt: '2.4rem',
						},
					}}
				>
					<Image
						src={avatarImg}
						alt="Jules Wyvern"
						flex="none"
						w="3.3rem"
						borderWidth="1px"
						borderStyle="solid"
						borderColor="brand.white"
						borderRadius="50%"
					/>
					<Text
						as="span"
						fontSize="1.5rem"
						sx={{
							'@media (min-width: 48em)': {
								fontSize: '1.6rem',
							},
						}}
					>
						Creation of{' '}
						<Link href="#" className="btn btn--link">
							Jules Wyvern
						</Link>
					</Text>
				</HStack>
			</Flex>
		</Flex>
	);
}
