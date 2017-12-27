import swal from "sweetalert2";
import * as $ from "jquery";

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
    /**
     * Shows information about a property.
     * @param name The name of the property.
     * @param color The property's color.
     * @param cost The cost to purchase.
     * @param improvement The cost to develop on this property.
     * @param fees The fees in increasing order.
     */
    showPropertyInfo: (name: string, color: string, cost: number, improvement: number, ...fees: number[]) => {
        $("#selected-property").removeClass("invisible");

        let propertyTitleElement = $("#prop-name");
        propertyTitleElement.text(name);

        let improvementText = ["Fee", "👍", "👍👍", "👍👍👍", "👍👍👍👍", "👌"];
        let priceTableTextElements = ["fee-0", "fee-1", "fee-2", "fee-3", "fee-4", "fee-5"].map((value) => $("#" + value + "-text"));
        let priceTableElements = ["fee-0", "fee-1", "fee-2", "fee-3", "fee-4", "fee-5"].map((value) => $("#" + value));

        propertyTitleElement.removeClass();
        propertyTitleElement.addClass(color);

        for (let i = 0; i < priceTableElements.length; i++) {
            priceTableTextElements[i].text(improvementText[i]);
            priceTableElements[i].text(fees[i].toString());
        }

        $("#cost-improve-text").text("Cost per 👍/👌");
        $("#cost-improve").text(improvement.toString());

        $("#cost-purchase").text(cost);
        $("#disabled-value").text(Math.floor(cost * 0.5));
        $("#cost-reenable").text(Math.floor(cost * 0.55));
    },
    /**
     * Shows information about a transport property.
     * @param name The name of the property.
     */
    showTransportInfo: (name: string) => {
        $("#selected-property").removeClass("invisible");

        let propertyTitleElement = $("#prop-name");
        propertyTitleElement.removeClass();
        propertyTitleElement.text(name);

        let transportText = ["Fee", "With 2 transports", "With 3 transports", "With 4 transports", "", ""];
        let priceTableTextElements = ["fee-0", "fee-1", "fee-2", "fee-3", "fee-4", "fee-5"].map((value) => $("#" + value + "-text"));
        let priceTableElements = ["fee-0", "fee-1", "fee-2", "fee-3", "fee-4", "fee-5"].map((value) => $("#" + value));
        let fees = ["25", "50", "100", "200", "", ""];
        let cost = 200;

        priceTableElements.forEach((element, index) => {
            priceTableTextElements[index].text(transportText[index]);
            element.text(fees[index]);
        });

        $("#cost-improve-text").text("");
        $("#cost-improve").text("");

        $("#cost-purchase").text(cost);
        $("#disabled-value").text(Math.floor(cost * 0.5));
        $("#cost-reenable").text(Math.floor(cost * 0.55));
    },
    /**
     * Shows information about a utility property.
     * @param name The name of the property.
     */
    showUtilityInfo: (name: string) => {
        $("#selected-property").removeClass("invisible");

        let propertyTitleElement = $("#prop-name");
        propertyTitleElement.removeClass();
        propertyTitleElement.text(name);

        let priceTableTextElements = ["fee-0", "fee-1", "fee-2", "fee-3", "fee-4", "fee-5"].map((value) => $("#" + value + "-text"));
        let priceTableElements = ["fee-0", "fee-1", "fee-2", "fee-3", "fee-4", "fee-5"].map((value) => $("#" + value));
        priceTableTextElements.forEach(value => value.text(""));
        priceTableElements.forEach(value => value.text(""));

        priceTableTextElements[0].text("If one utility is owned");
        priceTableTextElements[1].text("If both utilities are owned");

        priceTableElements[0].text("4x dice roll");
        priceTableElements[1].text("10x dice roll");

        $("#cost-improve-text").text("");
        $("#cost-improve").text("");

        let cost = 150;
        $("#cost-purchase").text(cost);
        $("#disabled-value").text(Math.floor(cost * 0.5));
        $("#cost-reenable").text(Math.floor(cost * 0.55));
    },
    hidePropertyInfo: () => $("#selected-property").addClass("invisible")
};

Object.assign(window, publicFunctions);