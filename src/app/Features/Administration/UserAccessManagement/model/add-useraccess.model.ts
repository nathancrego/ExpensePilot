export interface AddUserAccess{
    userID?:number| null;
    userRoleID?:number| null;
    logon:string;
    role:string;
    lastUpdated:Date;
}