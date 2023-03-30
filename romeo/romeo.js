function convertRomeo() {
    let name = document.getElementById('name').value;
    const check = clickBtn1()
    if (check == 3) {
        name = convertToKatakana(name);
        document.getElementById('converted').innerHTML = 'ああ、 ' + name + '、 ' + name + '、 あなたはどうして' + name + 'なの?';
    }
    if (check == 1) {
        name = convertToRoman(name);
        document.getElementById('converted').innerHTML = 'O ' + name + ', ' + name + '! wherefore art thou ' + name + '?';
    }else if (check == 2) {
        name = convertToRoman(name);
        document.getElementById('converted').innerHTML = 'Oh ' + name + ', ' + name + '! why are you ' + name + '?';
    }
}

function convertToRoman(str) {
    const hiragana = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん', 'ー','っ', 'ゃ', 'ゅ', 'ょ', 'ぁ', 'ぃ', 'ぅ', 'ぇ', 'ぉ', 'ゐ', 'ゑ', 'ら゚', 'り゚', 'る゚', 'れ゚', 'ろ゚', 'わ゙', 'ゐ゙', 'ゔ', 'ゑ゙', 'を゙', 'が', 'ぎ', 'ぐ', 'げ', 'ご', 'ざ', 'じ', 'ず', 'ぜ', 'ぞ', 'だ', 'ぢ', 'づ', 'で', 'ど', 'ば', 'び', 'ぶ', 'べ', 'ぼ', 'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ'];
        const roman = ['a', 'i', 'u', 'e', 'o', 'ka', 'ki', 'ku', 'ke', 'ko', 'sa', 'shi', 'su', 'se', 'so', 'ta', 'chi', 'tsu', 'te', 'to', 'na', 'ni', 'nu', 'ne', 'no', 'ha', 'hi', 'fu', 'he', 'ho', 'ma', 'mi', 'mu', 'me', 'mo', 'ya', 'yu', 'yo', 'ra', 'ri', 'ru', 're', 'ro', 'wa', 'o', 'n', '̄','q', 'xya', 'xyu', 'xyo', 'xa', 'xi', 'xu', 'xe', 'xo', 'i', 'e', 'la', 'li', 'lu', 'le', 'lo', 'va', 'vi', 'vu', 've', 'vo', 'ga', 'gi', 'gu', 'ge', 'go', 'za', 'ji', 'zu', 'ze', 'zo', 'da', 'ji', 'zu', 'de', 'do', 'ba', 'bi', 'bu', 'be', 'bo', 'pa', 'pi', 'pu', 'pe', 'po'];
        let result = '';
        for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let index = hiragana.indexOf(char);
        if (index !== -1) {
            result += roman[index];
        }
        }
        result = result.replace(/sy/g, 'sh').replace(/ty/g, 'ch').replace(/zy/g, 'j')
        result = result.replace(/ixya/g, 'ya').replace(/ixyu/g, 'yu').replace(/ixyo/g, 'yo').replace(/uxa/g, 'wa').replace(/uxi/g, 'wi').replace(/uxe/g, 'we').replace(/uxo/g, 'wo').replace(/ixe/g, 'ye').replace(/ixi/g, 'yi').replace(/qb/g, 'bb').replace(/qc/g, 'tc').replace(/qd/g, 'dd').replace(/qf/g, 'ff').replace(/qg/g, 'gg').replace(/qh/g, 'hh').replace(/qj/g, 'jj').replace(/qk/g, 'kk').replace(/ql/g, 'll').replace(/qp/g, 'pp').replace(/qr/g, 'rr').replace(/qs/g, 'ss').replace(/qt/g, 'tt').replace(/qv/, 'vv').replace(/ou/g, 'ō').replace(/nn/g, "n'n")
        result = result.replace(/fw/g, 'f').replace(/nn/g, "n'n").replace(/nm/g, "mm").replace(/np/g, "mp").replace(/nb/g, "mb")
        result = result.replace(/shy/g, 'sh').replace(/chy/g, 'ch').replace(/jy/g, 'j')
        result = result.charAt(0).toUpperCase() + result.slice(1);
        return result;
}

function oldEnglish() {
    let name = document.getElementById('name').value;
    name = convertToRoman(name);
    document.getElementById('converted').innerHTML = 'O ' + name + ', ' + name + '! wherefore art thou ' + name + '?';
}
function English() {
    let name = document.getElementById('name').value;
    name = convertToRoman(name);
    document.getElementById('converted').innerHTML = 'Oh ' + name + ', ' + name + '! why are you ' + name + '?';
}
function Japanese() {
    let name = document.getElementById('name').value;
    name = convertToKatakana(name);
    document.getElementById('converted').innerHTML = 'ああ、 ' + name + '、 ' + name + '、 あなたはどうして' + name + 'なの?';
}

function convertToKatakana(str) {
    const hiragana = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん', 'ー', 'ゃ', 'ゅ', 'ょ', 'ぁ', 'ぃ', 'ぅ', 'ぇ', 'ぉ', 'ゐ', 'ゑ', 'が', 'ぎ', 'ぐ', 'げ', 'ご', 'ざ', 'じ', 'ず', 'ぜ', 'ぞ', 'だ', 'ぢ', 'づ', 'で', 'ど', 'ば', 'び', 'ぶ', 'べ', 'ぼ', 'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ'];
    const roman = ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 'ラ', 'リ', 'ル', 'レ', 'ロ', 'ワ', 'ヲ', 'ん', 'ー', 'ャ', 'ュ', 'ョ', 'ァ', 'ィ', 'ゥ', 'ェ', 'ォ', 'ヰ', 'ヱ', 'ガ', 'ギ', 'グ', 'ゲ', 'ゴ', 'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ', 'ダ', 'ヂ', 'ヅ', 'デ', 'ド', 'バ', 'ビ', 'ブ', 'ベ', 'ボ', 'パ', 'ピ', 'プ', 'ペ', 'ポ'];
    let result = '';
    for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let index = hiragana.indexOf(char);
    if (index !== -1) {
        result += roman[index];
    }
    }
    return result;
}

function clickBtn1() {
    let str = "";
    const group1 = document.form1.group1;

    for (let i = 0; i < group1.length; i++) {
        if (group1[i].checked) {//(color1[i].checked === true)と同じ
        str = group1[i].value;
        break;
        }
    }
    return str;
}

