let Data = [];

var popup = document.getElementById('popup');
var itemList = document.getElementById('itempopuplist');

var create_ad_items = document.document.getElementById('create-ad-main').getElementsByClassName('box-trade-ad-item');

const displayItems = (characters) => {

    const htmlString = characters
        .map((character) => {

            return `
            <div id="${character.ID}" class="trade-selectionbox">

                <div id="${character.Header1}" class="text" style="font-size: 1.8rem; font-weight: 600;">${character.Header1}</div>
                <div style="padding-top: 1rem"></div>
                <img id="trade-selectionimage" src="${character.Image1}" />

            </div>
        `;
        })
    .join(''); 

    itemList.innerHTML = itemList.innerHTML + htmlString

    for (const item of itemList.getElementsByClassName('trade-selectionbox')){
    
        item.addEventListener('click', (event) => {


    
            popup.style.display = 'none';
    
        });
    
    }

};

const loadData = async () => {

    try {

        await fetch('https://opensheet.elk.sh/1T9-q3RWbYz_m9g5RPygdAC4vod09XJIRUcN0ijkuSts/1')
        .then(result => result.json())
        .then((output) => {
    
            console.log(output);

            Data = output;
    
            displayItems(output);
    
            localStorage["DataBackup"] = JSON.stringify(output);
    
        })

    } catch (error) {

        console.log(error);

        Data = JSON.parse(localStorage["DataBackup"]);

        console.log(Data);
    
        if (Array.isArray(Data)) {
    
            displayItems(Data);

        }

    }

};

window.onload = function () {

    var Information = JSON.parse(localStorage["AccountInformation"]);
    
    if (Information === null || Information === undefined) {

        console.log("ERROR | No login data found.");

    } else {

        fetch("/sections/create-ad.html")
        .then((response) => response.text())
        .then((html) => {
    
            document.getElementById("box-create-ad-7p979z8r").innerHTML = html;

            document.getElementById("pfp-create-ad").style.backgroundImage = Information.picture;
    
        })

    };

    loadData();

    for (const item of create_ad_items){
    
        item.addEventListener('click', (event) => {
    
            popup.style.display = 'block';
    
        });
    
    }
    
};
