export interface User
{
    id: number;
    logon: string;
    fName: string;
    lName: string;
    email: string;
    managerID: number;
    managerName: string;
    departmentID: number;
    departmentName: string;
    lastUpdated: Date;
}