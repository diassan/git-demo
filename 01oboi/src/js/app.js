function oboi(lenght, width, heightSm, widthRullon,  ) {
    const heightM = (heightSm + 10)/100;
    const perimetr = (lenght + width) * 2;
    const cloth = perimetr / widthRullon;
    alert(Math.ceil(cloth));
    const clothRool = 10 / heightM;
    const rool = cloth / clothRool;
    alert(Math.floor(rool));
return rool;
}
const result = oboi(5,6,272,1);
console.log(result);