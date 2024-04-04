/* Skapa en klubba (= lollipop), en array som innehåller alla klubbor 
som ett globalState( =typa upp) samt ett initialtvärde (=allLollipops) */
import uuid from "react-uuid";

//En lollipop skall vara ett object som innehåller nedan keys
export type lollipop = {
    id: string;
	name: string;
	flavor: string;
	color: string;
	sparkleLevel: number;
	hasWings: boolean;
	magicPower: string | null;
};

//Det globalLollipopState är ett object som innehåller en array av lollipop-objekt
export type globalLollipopState = {
    lollipops: lollipop[];
};

//Det initiala objectet av lollipops
export const initialLollipops: globalLollipopState = {
    lollipops:[
        {
			id: uuid(),
			name: "Sparkle Dream",
			flavor: "Cotton Candy",
			color: "Pink",
			sparkleLevel: 8,
			hasWings: true,
			magicPower: "Grants wishes",
		},
		{
			id: uuid(),
			name: "Enchanted Twilight",
			flavor: "Blueberry",
			color: "Purple",
			sparkleLevel: 6,
			hasWings: false,
			magicPower: "Levitation",
		},
		{
			id: uuid(),
			name: "Whimsical Whirl",
			flavor: "Strawberry",
			color: "Red",
			sparkleLevel: 9,
			hasWings: true,
			magicPower: null,
		}
    ]
};

