function onChangePhoneExtension(executionContext,attributeName) 
{
 var formContext = executionContext.getFormContext();
 const regex = /^[0-9]+$/;
 if (formContext.getControl(attributeName) != null)
 { 
 var attributeValue = formContext.getAttribute(attributeName).getValue();
 if (attributeValue!=null && !regex.test(attributeValue))
 {
  formContext.getControl(attributeName).setNotification("You must enter only numbers for the Extension field");
}
else{
 formContext.getControl(attributeName).clearNotification();
}
}

}


function changeToFormattedValue(executionContext, attributeName) {
    var formContext = executionContext.getFormContext();
    if (formContext.getControl(attributeName) != null) {
        var attributeValue = formContext.getAttribute(attributeName).getValue();        
        if (attributeValue != null) {
            // Format the number as (123)-456-7890
            var formattedNumber = attributeValue.replace(/\D/g, '')
                                                .replace(/(\d{3})(\d{3})(\d{4})/, '($1)-$2-$3');            
            // Set the formatted value back to the attribute
            formContext.getAttribute(attributeName).setValue(formattedNumber);
        }
    }
}


