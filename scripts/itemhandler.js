const Header1 = document.getElementById("Header1");
const Text1 = document.getElementById("Text");
const Image1 = document.getElementById("Image1");

const Value = document.getElementById("Value");
const Price = document.getElementById("Price");
const MaxSpeed = document.getElementById("MaxSpeed");
const Rarity = document.getElementById("Rarity");
const Demand = document.getElementById("Demand");

const ItemCategory = document.getElementById("ItemCategory").getAttribute("value");
const ItemName = document.getElementById("ItemNumber").getAttribute("value");

console.log(DataSaveName)

const Data = JSON.parse(localStorage[DataSaveName]);
const ItemData = Data[ItemCategory][ItemName];

console.log(ItemData)

const displayChart = () => {
    const ctx = document.getElementById("myChart").getContext("2d");

    const config = {
        type: "line",
        data: {
            labels: ItemData["valuehistorydate"].split(" "),
            datasets: [{
                label: "Value",
                data: ItemData["valuehistory"].split(" "),
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

    const myChart = new Chart(ctx, config);
};

if (ItemData != null && ItemData != undefined) {

    Header1.innerHTML = ItemData["name"];
    Text1.innerHTML = ItemData["description"];

    Value.innerHTML = "Value: " + ItemData["value"];
    Price.innerHTML = "Price: " + ItemData["price"];
    MaxSpeed.innerHTML = "Max Speed: " + ItemData["maxspeed"];
    Demand.innerHTML = "Demand: " + ItemData["demand"];
    Rarity.innerHTML = "Rarity: " + ItemData["rarity"];

    displayChart();

} else {

    console.warn("Failed to load item.");

};