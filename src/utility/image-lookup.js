export default (key) => {

    const lookupList = {yay: "../hashbump-yay.svg",
                        grrr: "../hashbump-grrr.svg",
                        dunno: "../hashbump-dunno.svg",
                        meh: "../hashbump-meh.svg"};

    return lookupList[key];
};
