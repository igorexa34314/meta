import type { ImageMetadata } from 'astro';

const socialsIcons = import.meta.glob<{ default: ImageMetadata }>(
	'../assets/icons/socials/*.{jpeg,jpg,png,gif,svg,ico}'
);

export const socials = [
	{ name: 'twitter', title: 'Twitter', icon: '../assets/icons/socials/twitter.png', link: '#' },
	{ name: 'discord', title: 'Discord', icon: '../assets/icons/socials/discord.png', link: '#' },
	{ name: 'youtube', title: 'Youtube', icon: '../assets/icons/socials/youtube.png', link: '#' },
	{ name: 'telegram', title: 'Telegram', icon: '../assets/icons/socials/telegram.png', link: '#' },
];

export const socialsWithIcons = socials.map(social => ({
	...social,
	icon: socialsIcons[social.icon](),
}));
