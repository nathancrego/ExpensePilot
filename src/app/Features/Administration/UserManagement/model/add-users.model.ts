export interface AddUser
{
    logon: string;
    fName: string;
    lName: string;
    email: string;
    managerID?: number | null;
    managerName: string;
    departmentID?: number | null;
    departmentName: string;
    lastUpdated: Date;
}