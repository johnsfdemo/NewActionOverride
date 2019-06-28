({
    onInit : function(component, event, helper) {
        component.find("workspace").isConsoleNavigation().then(function(isConsole) {
            component.set("v.isConsole", isConsole);
            if (isConsole)
                component.find("workspace").getFocusedTabInfo().then(function(tabInfo) {
                    component.set("v.tabId", tabInfo.tabId);
                });
            else
                component.set("v.isOpen", true);
        });
    },
    
    handleSaved : function(component, event, helper) {
        if (component.get("v.isConsole")) {
            component.find("workspace").openTab({
                url: "/lightning/r/" + event.getParam("id") + "/view",
                focus: true
            });
            component.find("workspace").closeTab({tabId: component.get("v.tabId")});
        } else {
            component.set("v.isOpen", false);
            component.find("navService").navigate({    
                type: "standard__recordPage",
                attributes: {
                    recordId: event.getParam("id"),
                    objectApiName: component.get("v.sObjectName"),
                    actionName: "view"
                }
            });
        }
        component.find("notifLib").showToast({
            message: component.get("v.successMessage"),
            variant: "success",
            mode: "dismissable"
        });
    },
    
    handleCancelled : function(component, event, helper) {
        if (component.get("v.isConsole"))
            component.find("workspace").closeTab({tabId: component.get("v.tabId")});
        else {
            component.set("v.isOpen", false);
            component.find("navService").navigate({    
                type: "standard__objectPage",
                attributes: {
                    objectApiName: component.get("v.sObjectName"),
                    actionName: "home"
                }
            });
        }
    },
    
    handleError : function(component, event, helper) {
        if (component.get("v.isConsole"))
            component.find("workspace").closeTab({tabId: component.get("v.tabId")});
        else {
            component.set("v.isOpen", false);
            component.find("navService").navigate({    
                type: "standard__objectPage",
                attributes: {
                    objectApiName: component.get("v.sObjectName"),
                    actionName: "home"
                }
            });
        }
        component.find("notifLib").showToast({
            message: "Record was not created.",
            variant: "error",
            mode: "pester"
        });
    }
})