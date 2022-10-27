var DataLink = "/data.json";
var DataSaveName = "JBValues_Datastore_Backup_V1";
var CooldownSaveName = "JBValues_Datastore_Cooldown_V1";
var FetchCooldown = 6000;

var FetchKey = "L5TYP!A7epCdA?iStb@NtohSJME4xBCgPxxEcEKA"

var CurrentTime = new Date();
CurrentTime = CurrentTime.getTime();

if (localStorage[DataSaveName] == null || localStorage[DataSaveName] == undefined) {

    console.log("No backup cache found.");

    try {
    
        fetch(DataLink)
        
        .then(result => result.json())
        .then((output) => {
    
            localStorage[DataSaveName] = JSON.stringify(output);
            localStorage[CooldownSaveName] = CurrentTime;

            console.log("New data fetched.");
    
        })

    } catch (error) {

        console.log(error);

    }

}
else {

    /* Old User */

    if (localStorage[CooldownSaveName] == null || localStorage[CooldownSaveName] == undefined) {

        localStorage[CooldownSaveName] = 1;

    };    

    if ((CurrentTime - localStorage[CooldownSaveName]) > FetchCooldown) {

        console.log("Expired backup data found, fetching new data.");

        try {
    
            fetch(DataLink)
            
            .then(result => result.json())
            .then((output) => {
        
                localStorage[DataSaveName] = JSON.stringify(output);
                localStorage[CooldownSaveName] = CurrentTime;
        
            })
    
        } catch (error) {
    
            console.log(error);
    
        }

    }
    else {

        console.log("Backup data found.");

    };

};