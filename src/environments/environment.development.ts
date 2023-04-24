const url = 'http://176.58.115.160:3000/api/v1/';
const loginUrl = url + 'login/';
const accountsBaseUrl = url + 'accounts/';
const organizationBaseUrl = url + 'organizations/';
const projectBaseUrl = url + 'project/';
const attendeeBaseUrl = url + 'attendee/';
const eventBaseUrl = url + 'event/';

export const environment = {
    ///////////////** USER URLS **///////////////////
    loginUser: loginUrl,
    registerUser: accountsBaseUrl + 'register/',
    refreshToken: accountsBaseUrl + 'token/refresh/',
    verifyToken: accountsBaseUrl + 'token/verify',

    getUserProfile: accountsBaseUrl + 'profile/',
    updateUserProfile: accountsBaseUrl + 'profile/',

    ///////////////** Organization URLS **///////////////////
    createOrganization: organizationBaseUrl,
    getAllOrganization: organizationBaseUrl,
    updateOrganization: organizationBaseUrl,
    getOneOrganization: organizationBaseUrl,

    createOrganizationMember: organizationBaseUrl + 'member/',
    getAllOrganizationMember: organizationBaseUrl + 'member/',
    deleteOrganizationMember: organizationBaseUrl + 'member/',
    getOneOrganizationMember: organizationBaseUrl + 'member/',


    






};
