//DEVOPS-186 - Open main form instead of quick create form

function OpenMainForm(executionContext, entityName, formId) {
    console.log("Disabled as of 01/08/2025 as it's causing issue to DEVOPS-186");
    return;

    var formContext = executionContext.getFormContext();
    var queryParams = Xrm.Utility.getGlobalContext().getQueryStringParameters();
   
    // Check if the form was opened from a lookup
    const isOpenedFromLookup = queryParams.parentrecordid && queryParams.parentrecordtype;
   
    // Log results for debugging
    console.log("Quick Create Form Source:");
   
    if (!isOpenedFromLookup) {
        console.log("Opened from the + button. Query Params:", queryParams);
 
        // Open the main form in a new window
        Xrm.Navigation.openForm({
            entityName: entityName,
            entityId: null, // New record
            formId: formId
        })
            .then(() => {
                console.log("Main form opened successfully.");
            })
            .catch((error) => {
                console.error("Error opening main form:", error.message);
            });
 
        // Close the Quick Create form
        formContext.ui.close();
    }
    else {
        console.log("Opened from a lookup field. Query Params:", queryParams);
    }
}