/**
 * Enables the ribbon button functionality and hides the ribbon buttons after a delay.
 * @returns {boolean} - Always returns false to hide the custom "Hide Buttons" ribbon button.
 */
function EnableRibbonButton()
{
	// Set a timeout to call the hideRibbonButtons function after 2000 milliseconds (2 seconds)
    setTimeout(function () {
        hideRibbonButtons();        
      }, 2000);
    
    return false;
}

/**
 * Hides the ribbon buttons.
 */
function hideRibbonButtons()
{
    const showChartPaneBtn = window.top.document.getElementById("ShowChartPane");
	if (showChartPaneBtn)
		showChartPaneBtn.style.display = "none";

 const openDashboardBtn = window.top.document.getElementById("OpenEntityDashboard");
	if (openDashboardBtn)
		openDashboardBtn.style.display = "none";


}
