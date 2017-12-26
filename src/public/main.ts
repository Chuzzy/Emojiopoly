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
                swal("💸","You have filed bankruptcy.");
            }
        });
    }
};

Object.assign(window, publicFunctions);