const replacements: [string|RegExp, string][] = [
    [new RegExp(',', 'g'), '،'],
    [new RegExp('2', 'g'), 'أ'],
    [new RegExp('3', 'g'), 'ع'],
    [new RegExp('5', 'g'), 'خ'],
    [new RegExp('7', 'g'), 'ح'],
    [new RegExp('8', 'g'), 'غ'],

    [new RegExp('((el)|(al))\\s(?=.)', 'gi'), 'ال'],
    [new RegExp('l\\s(?=.)', 'gi'), 'ال'],
    [new RegExp('(?<=\\s|^)[aou]', 'gi'), 'أ'],
    [new RegExp('(?<=\\s|^)[ei]', 'gi'), 'إ'],
    [new RegExp('[a](?=$|\\s)', 'g'), 'ا'],
    [new RegExp('[eiy](?=$|\\s)', 'gi'), 'ي'],
    [new RegExp('[ou](?=$|\\s)', 'gi'), 'و'],
    [new RegExp('bl\\s(?=.)', 'gi'), 'بل'],
    [new RegExp('((?<!a)a(?!a))', 'gi'), ''],
    [new RegExp('(?<!e)e(?!e)', 'gi'), ''],
    [new RegExp('(?<!o)o(?!o)', 'gi'), ''],
    [new RegExp('(?<!u)u(?!u)', 'gi'), ''],
    [new RegExp('(?<!i)i(?!i)', 'gi'), ''],

    [new RegExp('(sh)|(ch)', 'gi'), 'ش'],
    [new RegExp('(th)', 'gi'), 'ذ'],
    [new RegExp('(kh)', 'gi'), 'خ'],
    [new RegExp('uu', 'gi'), 'و'],
    [new RegExp('oo', 'gi'), 'و'],
    [new RegExp('ii', 'gi'), 'ي'],
    [new RegExp('ee', 'gi'), 'ي'],
    [new RegExp('aa', 'gi'), 'ا'],
    [new RegExp('a', 'gi'), 'ا'],
    [new RegExp('bb', 'gi'), 'بّ'],
    [new RegExp('b', 'gi'), 'ب'],
    [new RegExp('cc', 'gi'), 'كّ'],
    [new RegExp('c', 'gi'), 'ك'],
    [new RegExp('dd', 'gi'), 'دّ'],
    [new RegExp('d', 'gi'), 'د'],
    [new RegExp('e', 'gi'), 'إ'],
    [new RegExp('ff', 'gi'), 'فّ'],
    [new RegExp('f', 'gi'), 'ف'],
    [new RegExp('g', 'gi'), 'ج'],
    [new RegExp('gg', 'gi'), 'جّ'],
    [new RegExp('hh', 'gi'), 'هّ'],
    [new RegExp('h', 'gi'), 'ه'],
    [new RegExp('jj', 'gi'), 'جّ'],
    [new RegExp('j', 'gi'), 'ج'],
    [new RegExp('k', 'gi'), 'ك'],
    [new RegExp('kk', 'gi'), 'كّ'],
    [new RegExp('ll', 'gi'), 'لّ'],
    [new RegExp('l', 'gi'), 'ل'],
    [new RegExp('mm', 'gi'), 'مّ'],
    [new RegExp('m', 'gi'), 'م'],
    [new RegExp('nn', 'gi'), 'نّ'],
    [new RegExp('n', 'gi'), 'ن'],
    [new RegExp('p', 'gi'), 'ب'],
    [new RegExp('pp', 'gi'), 'بّ'],
    [new RegExp('q', 'gi'), 'ق'],
    [new RegExp('qq', 'gi'), 'قّ'],
    [new RegExp('r', 'gi'), 'ر'],
    [new RegExp('rr', 'gi'), 'رّ'],
    [new RegExp('ss', 'gi'), 'ص'],
    [new RegExp('s', 'gi'), 'س'],
    [new RegExp('tt', 'gi'), 'تّ'],
    [new RegExp('t', 'gi'), 'ت'],
    [new RegExp('vv', 'gi'), 'فّ'],
    [new RegExp('v', 'gi'), 'ف'],
    [new RegExp('ww', 'gi'), 'وّ'],
    [new RegExp('w', 'gi'), 'و'],
    [new RegExp('x', 'gi'), 'كس'],
    [new RegExp('yy', 'gi'), 'يّ'],
    [new RegExp('y', 'gi'), 'ي'],
    [new RegExp('zz', 'gi'), 'زّ'],
    [new RegExp('z', 'gi'), 'ز'],
];


const translate = (text: string): string => {
    let result = text + '';
    for (let i = 0; i < replacements.length; i++) {
        const [from, to]: [string|RegExp, string] = replacements[i];
        result = result.replace(from, to);
    }
    return result;
}

export default translate;