let outputJSON = {};
let counter = 0;
for (let linkElem of document.querySelectorAll("a")) {
    outputJSON[counter] = {};
    outputJSON[counter]["result"] = "Invalid";
    outputJSON[counter]["text"] = (linkElem.textContent);
    outputJSON[counter]["link"] = (linkElem.href);
    outputJSON[counter]["query"] = (linkElem.search);
    //
    if (linkElem.href.includes("i_code=")) {
        let qsp = linkElem.href.split("i_code=")[1];
        let qspSource = qsp.split(":")[0];
        let qspMedium = qsp.split(":")[1];
        let qspID = qsp.split(":")[2];
        let qspName = qsp.split(":")[3];
        //
        outputJSON[counter]["source"] = qspSource;
        outputJSON[counter]["medium"] = qspMedium;
        outputJSON[counter]["id"] = qspID;
        outputJSON[counter]["name"] = qspName;
        //
        if (qspSource.includes("na")) {
            outputJSON[counter]["result"] = "No Source Param";
        } else if (qspMedium.includes("na")) {
            outputJSON[counter]["result"] = "No Medium Param";
        } else if (qspID.includes("na")) {
            outputJSON[counter]["result"] = "No ID Param";
        } else if (qspName.includes("na")) {
            outputJSON[counter]["result"] = "No Name Param";
        } else {
            outputJSON[counter]["result"] = "Valid";
        }
    } else {
        outputJSON[counter]["result"] = "No i_code";
    }
    //
    counter++;
}
console.table(outputJSON);
console.log(outputJSON);