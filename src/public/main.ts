import swal from "sweetalert2";

/**
 * An object containing functions
 * that are to be used in the client's browser.
 */
let publicFunctions = {
    manageProperties: () => {
        swal("You have no properties to manage!");
    },
    showTradeWindow: () => {
        swal("Cannot trade", "Trading is unavailable at this point.", "error");
    },
    confirmBankruptcy: () => {
        swal({
            title: "💸",
            text: "Are you sure you want to file for bankruptcy?",
            type: "warning",
            showCancelButton: true,
            reverseButtons: true,
            cancelButtonText: "No",
            confirmButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then(result => {
            if (result.value) {
                swal("💸", "You have filed bankruptcy.");
            }
        });
    },
    showPropertyInfo: (name: string, color: string, cost: number, improvement: number, ...fees: number[]) => {
        let selectedPropertyElement = document.getElementById("selected-property");
        while (selectedPropertyElement.hasChildNodes()) {
            selectedPropertyElement.removeChild(selectedPropertyElement.lastChild);
        }
        
        let propertyTitleElement = document.createElement("div");
        propertyTitleElement.id = "prop-name";
        propertyTitleElement.textContent = name;

        let improvementText = ["Fee", "👍", "👍👍", "👍👍👍", "👍👍👍👍", "👌"];
        let transportText = ["Fee", "With 2 transports", "With 3 transports", "With 4 transports"];
        let priceTableTextElements = ["fee-0", "fee-1", "fee-2", "fee-3", "fee-4", "fee-5"].map((value) => document.getElementById(value + "-text"));
        let priceTableElements = ["fee-0", "fee-1", "fee-2", "fee-3", "fee-4", "fee-5"].map((value) => document.getElementById(value));

        if (color) {
            propertyTitleElement.className = color;
            priceTableElements.forEach((element, index) => {
                priceTableTextElements[index].innerHTML = improvementText[index];
                element.innerHTML = fees[index].toString();
            });
            document.getElementById("cost-improve-text").innerHTML = "Cost per 👍/👌";
            document.getElementById("cost-improve").innerHTML = improvement.toString();
        } else {
            propertyTitleElement.className = undefined;
            
        }
        
        document.getElementById("disabled-value").innerText = Math.floor(cost * 0.5).toString();
        document.getElementById("cost-reenable").innerText = Math.floor(cost * 0.55).toString();
    }
};

Object.assign(window, publicFunctions);