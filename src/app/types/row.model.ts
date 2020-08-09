export class RowModel {
    healthIndex: any;
    endDate: any;
    minValueDateTime: any;
    type: any;
    cowId: any;
    animalId: any;
    eventId: any;
    deletable: boolean;
    lactationNumber: any;
    daysInLactation: any;
    ageInDays: any;
    startDateTime: any;
    reportingDateTime: any;
    constructor(row) {
        this.healthIndex = row.healthIndex ? row.healthIndex : '';
        this.endDate = row.endDate ? row.endDate : '';
        this.minValueDateTime = row.minValueDateTime ? row.minValueDateTime : '';
        this.type = row.type ? row.type : '';
        this.cowId = row.cowId ? row.cowId : '';
        this.animalId = row.animalId ? row.animalId : '';
        this.eventId = row.eventId ? row.eventId : '';
        this.deletable = row.deletable ? row.deletable : '';
        this.lactationNumber = row.lactationNumber ? row.lactationNumber : '';
        this.daysInLactation = row.daysInLactation ? row.daysInLactation : '';
        this.ageInDays = row.ageInDays ? row.ageInDays : '';
        this.startDateTime = row.startDateTime ? row.startDateTime : '';
        this.reportingDateTime = row.reportingDateTime ? row.reportingDateTime : '';
    }

}
