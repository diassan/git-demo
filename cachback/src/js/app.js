function calculateCachback(usual, elevated, special) {
    const usualCach =  usual * 1 / 100;
    const elevatedCach = elevated * 5 /100;
    const specialCach = special * 30 /100;
    console.log(usualCach);
    console.log(elevatedCach);
    console.log(specialCach);
    const summaCach = usualCach + elevatedCach + specialCach;
    return summaCach;
}
const result = calculateCachback(10000,5000,1000);
console.log(result);