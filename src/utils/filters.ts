export const fullName = (firstname: string, lastname?: string) =>
	[firstname, lastname].filter(Boolean).join(' ');
