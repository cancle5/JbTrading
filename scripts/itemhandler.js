const Header1 = document.getElementById("Header1");
const Text1 = document.getElementById("Text");
const Image1 = document.getElementById("Image");

const Value = document.getElementById("Value");
const Price = document.getElementById("Price");
const MaxSpeed = document.getElementById("MaxSpeed");
const Rarity = document.getElementById("Rarity");
const Demand = document.getElementById("Demand");

const ItemCategory = document.getElementById("ItemCategory").getAttribute("value");
const ItemName = document.getElementById("ItemNumber").getAttribute("value");

const MetaTags = document.head.getElementsByTagName("meta");

console.log(DataSaveName);

const Data = JSON.parse(localStorage[DataSaveName]);
const ItemData = Data[ItemCategory][ItemName];

console.log(ItemData);

const displayChart = () => {

    var valuehistorydates = ItemData["valuehistorydate"].split(" ");
    var valuehistory = ItemData["valuehistory"].split(" ");

    var ctx = document.getElementById("myChart").getContext("2d");

    var config = {
        type: "line",
        data: {
            labels: valuehistorydates,
            datasets: [{
                label: "Value",
                data: valuehistory,
                backgroundColor: ["rgba(255, 99, 132, 0.2)"],
                borderColor: ["rgba(255, 99, 132, 1)"],
                borderWidth: 1,
            }, ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false,
                },
            },
        },
    };

    var myChart = new Chart(ctx, config);
    
};

if (ItemData != null && ItemData != undefined) {

    Header1.innerHTML = ItemData["name"];
    Text1.innerHTML = ItemData["description"];
    Image1.innerHTML = '<img src="' + ItemData["image"] + '" alt="' + ItemData["name"] + '"></img>';

    Value.innerHTML = "Value: " + ItemData["value"];
    Price.innerHTML = "Price: " + ItemData["price"];
    MaxSpeed.innerHTML = "Max Speed: " + ItemData["maxspeed"];
    Demand.innerHTML = "Demand: " + ItemData["demand"];
    Rarity.innerHTML = "Rarity: " + ItemData["rarity"];

    displayChart();

    document.getElementsByTagName("title")[0].innerHTML = "JB Values - " + ItemData["name"];

    for (var Tag in MetaTags) {

        Tag = MetaTags[Tag];

        if (Tag.name == "title") {

            Tag.content = "JB Values - " + ItemData["name"];

        }

        if (Tag.name == "description") {

            Tag.content = ItemData["description"];

        }

        if (Tag.name == "keywords") {

            Tag.content = "roblox jailbreak " + ItemData["name"];

        }

    }    

} else {

    console.warn("Failed to load item.");

}