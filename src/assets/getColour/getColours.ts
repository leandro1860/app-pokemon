let numberColour = 0;
const colour: any = ['bg-yellow-400', 'bg-red-400', 'bg-green-400'];

export const getColour = () => {
    if (numberColour === 0) {
        numberColour++;
        return colour[0];
    } else if (numberColour === 1) {
        numberColour++;
        return colour[1];
    } else if (numberColour === 2) {
        numberColour = 0;
        return colour[2];
    }
};
