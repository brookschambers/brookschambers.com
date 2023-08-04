import { Metadata } from 'vite-imagetools';

declare module '*?lqip' {
	const lqip: {
		lqip: string;
		width: number;
		height: number;
		src: string;
	};
	export default lqip;
}

declare module '*?meta' {
	const value: Metadata | Metadata[];
	export default value;
}

declare module '*&meta' {
	const value: Metadata | Metadata[];
	export default value;
}

declare module '*?metadata' {
	const value: Metadata | Metadata[];
	export default value;
}

declare module '*&metadata' {
	const value: Metadata | Metadata[];
	export default value;
}

declare module '*?picture' {
	const value: Picture | Picture[];
	export default value;
}

declare module '*&picture' {
	const value: Picture | Picture[];
	export default value;
}

declare module '*?srcset' {
	const value: Srcset | Srcset[];
	export default value;
}

declare module '*&srcset' {
	const value: Srcset | Srcset[];
	export default value;
}
