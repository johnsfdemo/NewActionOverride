# New Action Override

This package contains a Salesforce Lightning components that can be used as an action override for the `New` button in a Salesforce page:

![New Action Modal Dialog](/images/New_Action_Modal.png)

# How to Configure

The component uses the `lightning:recordForm` construct to determine which fields to present to the user and gets those fields from an `aura:attribute name="fields"` in the component markup, which you will need to configure. So although the component can be used for any Salesforce object, it cannot be used for multiple objects at the same time since those fields will change from object to object. Simply duplicate the component for use with additional objects.

The `aura:attribute`s in the component provide an option for selecting the message that is displayed when a record is successfully created and another option for selecting the static resource containing the image of the logo that appears in the left corner of the modal dialog.

The component has been written to work with both standard and console navigation and has been tested using the `New` button in a list view in both cases.

To actually override the button, [follow these instructions](https://help.salesforce.com/articleView?id=assign_action_overrides.htm&type=5).

# Support for Record Types

If your object uses record types, it is important to set a `recordTypeId=` attribute in the `lightning:recordForm` so that the right choices in anyn picklist fields you select will be shown in the modal dialog. Please see the [documentation](https://developer.salesforce.com/docs/component-library/bundle/lightning:recordForm/documentation) for `lightning:recordForm` for more details.

If you have a default record type for the object you are configuring, you may not want the record type picker showing up each time you click the `New` button. To prevent that record type selection screen from appearing, click on your user picture icon in the upper right corner of the page and go to `Settings` -> `Display and Layout` -> `Set Default Record Types` and click the checkbox next to the object you are configuring.

## How to Deploy This Package to Your Org

I am a pre-sales Solutions Engineer for [Salesforce](https://www.salesforce.com) and I develop solutions for my customers to demonstrate the capabilities of the amazing Salesforce platform. *This package represents functionality that I have used for demonstration purposes and the content herein is definitely not ready for actual production use; specifically, it has not been tested extensively nor has it been written with security and access controls in mind. By installing this package, you assume all risk for any consequences and agree not to hold me or my company liable.*  If you are OK with that ...

Simply click the button below and log into your org:

<a href="https://githubsfdeploy.herokuapp.com">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/src/main/webapp/resources/img/deploy.png">
</a>