// imports
import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class BoatSearch extends NavigationMixin(LightningElement) {
  isLoading = false;

  // Handles loading event
  @api
  handleLoading() {
    this.isLoading = true;
  }

  // Handles done loading event
  @api
  handleDoneLoading() {
    this.isLoading = false;
  }

  // Handles search boat event
  // This custom event comes from the form
  // call child component searchBoats method
  searchBoats(event) {
    const boatTypeId = event.detail.boatTypeId;
    this.template.querySelector("c-boat-search-results").searchBoats(boatTypeId);
  }

  createNewBoat() {
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes: {
        objectApiName: 'Boat__c',
        actionName: 'new',
      },
    });
  }
}
