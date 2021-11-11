'use strict';

const HU = {
    date(nowDate){
        return new Intl.DateTimeFormat('hu-HU').format(nowDate);
    },
    curreny(currencyNumber){
        return new Intl.NumberFormat('hu-HU', {
            style: 'currency',
            currency: 'HUF'
        }).format(currencyNumber);
    },
    list(names){
        let templatedNames = '';
        names.forEach((name, index) => {
            templatedNames += name + (index === names.length - 2 ? ' és ' : ', ');
        });
        return templatedNames.substring(0, templatedNames.length - 2);
    }
};
    


export default HU
