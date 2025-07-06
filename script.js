function removeColor() {
    // Get the select element
    const colorSelect = document.getElementById("colorSelect");
    
    // Get the selected index
    const selectedIndex = colorSelect.selectedIndex;
    
    // Remove the selected option if one is selected
    if (selectedIndex !== -1) {
        colorSelect.remove(selectedIndex);
    }
}
