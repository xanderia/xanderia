
const tabWidthInSpaces = 4;
const maxConsoleWidth = 8 * tabWidthInSpaces; // 32


const calculateTabCount = _ => {
    const l = _.length;
    let t = 1;

    t = Math.ceil((maxConsoleWidth - l) / tabWidthInSpaces);

    return (t);
};



const c = _ => {
    const name = _.name;
    delete _.name;

    console.log(
        name +
        "\t".repeat(calculateTabCount(name)),
         _
    );
};


export default {
    c
};
